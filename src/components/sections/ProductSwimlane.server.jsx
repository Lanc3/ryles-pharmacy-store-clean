import {gql, useLocalization, useShopQuery} from '@shopify/hydrogen';
import {Suspense, useMemo} from 'react';
import {ProductCard} from '~/components';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Featured Products',
  data = mockProducts,
  count = 12,
  ...props
}) {
  const productCardsMarkup = useMemo(() => {
    // If the data is already provided, there's no need to query it, so we'll just return the data
    if (typeof data === 'object') {
      return <ProductCards products={data} />;
    }

    // If the data provided is a productId, we will query the productRecommendations API.
    // To make sure we have enough products for the swimlane, we'll combine the results with our top selling products.
    if (typeof data === 'string') {
      return (
        <Suspense>
          <RecommendedProducts productId={data} count={count} />
        </Suspense>
      );
    }

    // If no data is provided, we'll go and query the top products
    return <TopProducts count={count} />;
  }, [count, data]);

  return (
    <div>
      <span className="font-semibold text-lg text-white text-center mb-2 block bg-rylesgold rounded-t-xl mx-40">
        Our Featured Products
      </span>
      <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-32 ">
        {productCardsMarkup}
      </div>
    </div>
  );
}

function ProductCards({products}) {
  return (
    <div className="flex overflow-x-auto space-x-8 w-full overflow-y-hidden mx-10">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          className={'snap-start w-60 mt-16'}
        />
      ))}
    </div>
  );
}

function RecommendedProducts({productId, count}) {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data: products} = useShopQuery({
    query: RECOMMENDED_PRODUCTS_QUERY,
    variables: {
      count,
      productId,
      languageCode,
      countryCode,
    },
  });

  const mergedProducts = products.recommended
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts
    .map((item) => item.id)
    .indexOf(productId);

  mergedProducts.splice(originalProduct, 1);

  return <ProductCards products={mergedProducts} />;
}

function TopProducts({count}) {
  const {
    data: {products},
  } = useShopQuery({
    query: TOP_PRODUCTS_QUERY,
    variables: {
      count,
    },
  });

  return <ProductCards products={products.nodes} />;
}

const RECOMMENDED_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query productRecommendations(
    $productId: ID!
    $count: Int
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(country: $countryCode, language: $languageCode) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

const TOP_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query topProducts(
    $count: Int
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(country: $countryCode, language: $languageCode) {
    products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

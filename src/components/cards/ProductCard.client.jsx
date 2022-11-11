import {
  flattenConnection,
  Image,
  Link,
  Money,
  useMoney,
} from '@shopify/hydrogen';
import clsx from 'clsx';

import {Text} from '~/components';
import {getProductPlaceholder} from '~/lib/placeholders';
import {isDiscounted, isNewArrival} from '~/lib/utils';

export function ProductCard({product, label, className, loading, onClick}) {
  let cardLabel;

  const cardData = product?.variants ? product : getProductPlaceholder();

  const {image, priceV2: price, compareAtPriceV2: compareAtPrice} =
    flattenConnection(cardData?.variants)[0] || {};

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const styles = clsx('grid gap-2', className);

  return (
    <div className="text-md mb-4 relative transition-all duration-500 ease-in-out hover:scale-110 bg-white rounded-xl">
      <Link onClick={onClick} to={`/products/${product.handle}`}>
        <div className={styles}>
          <div className="card-image aspect-[4/5] bg-primary/5  max-w-xs ">
            <Text
              as="label"
              size="fine"
              className="absolute top-0 right-0 m-4 text-right text-notice z-50"
            >
              {cardLabel}
            </Text>
            {image && (
              <Image
                className="aspect-[4/5] w-full object-cover fadeIn"
                widths={[320]}
                sizes="320px"
                loaderOptions={{
                  crop: 'center',
                  scale: 2,
                  width: 320,
                  height: 400,
                }}
                // @ts-ignore Stock type has `src` as optional
                data={image}
                alt={image.altText || `Picture of ${product.title}`}
                loading={loading}
              />
            )}
          </div>
          <div className="grid gap-1">
            <Text
              className=" whitespace-pre-wrap text-center w-full justify-center text-rylesblue font-bold bg-white rounded-t-xl max-w-xs"
              as="h3"
            >
              {product.title}
            </Text>
            <div className="flex gap-4 w-full justify-center bg-white rounded-b-xl text-center max-w-xs">
              <Text className="flex  w-full gap-4 text-center text-rylesblue justify-center max-w-xs font-bold">
                <Money withoutTrailingZeros data={price} />
                {isDiscounted(price, compareAtPrice) && (
                  <CompareAtPrice
                    className={'opacity-50 text-center'}
                    data={compareAtPrice}
                  />
                )}
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} = useMoney(
    data,
  );

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}

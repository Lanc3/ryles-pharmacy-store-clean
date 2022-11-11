import {Link} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {Suspense} from 'react';
import {Layout} from '../components/index.server';

function BoxFallback() {
  return (
    <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 h-60"></div>
  );
}

export default function Shipping() {
  return (
    <Layout hero={<GradientBackground />}>
      <Suspense fallback={<BoxFallback />}>
        <div className="relative text-center w-full h-128 bg-shop bg-cover flex justify-center items-center">
          <div className="w-1/2 h-60 bg-white rounded-xl border-4 border-[#84754E] space-y-4 pt-6 px-">
            <p className="text-xl">Shipping policy</p>
            <p>Brows our great deals now in our</p>
            <p>new online store</p>
            <Link
              to={`/collections/frontpage`}
              className="inline-block bg-[#84754E] text-white text-lg font-medium rounded-xl py-1 px-8 uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}
function GradientBackground() {
  return (
    <div className="fixed top-0 w-full h-full overflow-hidden bg-blue-wave">
      <div className="absolute w-full h-full from-gray-50 z-10" />
    </div>
  );
}
const QUERY = gql`
  query welcomeContent {
    shop {
      name
    }
    products(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 250) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

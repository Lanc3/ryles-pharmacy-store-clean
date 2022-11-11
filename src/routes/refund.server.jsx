import {Suspense} from 'react';
import {Layout} from '../components/index.server';

function BoxFallback() {
  return (
    <div className="bg-white p-12 shadow-xl rounded-xl text-gray-900 h-60"></div>
  );
}
function GradientBackground() {
  return (
    <div className="fixed top-0 w-full h-full overflow-hidden bg-blue-wave">
      <div className="absolute w-full h-full from-gray-50 z-10" />
    </div>
  );
}

export default function Refund() {
  return (
    <Layout hero={<GradientBackground />}>
      <Suspense fallback={null}>
        <div className="text-center w-full h-auto mt-10 flex justify-center justify-items-start z-99 relative">
          <div className="w-1/2 h-auto bg-white rounded-xl border-4 border-[#84754E] space-y-4 pt-6 px-">
            <h1 className="font-bold text-rylesgold">RETURN POLICY</h1>
            <p className="text-rylesblue">Last updated November 10, 2022</p>
            <p className="text-rylesblue">
              Thank you for your purchase. We hope you are happy with your
              purchase. However, if you are not completely satisfied with your
              purchase for any reason, You may return it to us for a full refund
              or an exchange. Please see below for more information on our
              return policy
            </p>
            <h2 className="font-bold text-rylesgold">RETURNS</h2>
            <p className="text-rylesblue">
              All returns must be postmarked within twenty eight(28) days of
              purchase date. All returned items must be in a new unused
              conditio, with all original tags and labels attached.
            </p>
            <h2 className="font-bold text-rylesgold">REFUNDS</h2>
            <p className="text-rylesblue">
              After recieving your return and inspecting the condition of your
              item, we will process your return or exchange. Please allow at
              least seven(7) days from the reciept of your item to process your
              return or exchange. We will notify you by email when your return
              has benn processed.
            </p>
            <h2 className="font-bold text-rylesgold">EXCEPTIONS</h2>
            <p className="text-rylesblue">
              For defective or damaged products, Please contact us at the
              details below to arrange a refund or exchange.
            </p>
            <h2 className="font-bold text-rylesgold">QUESTIONS</h2>
            <p className="text-rylesblue">(066) 712 4706</p>
            <p className="text-rylesblue">RylesPharmacy@gmail.com</p>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

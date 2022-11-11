import {Image} from '@shopify/hydrogen';

import Grainne from '../assets/Grainne.jpg';
import KatJane from '../assets/Jane_Kat.jpg';
import Mike from '../assets/MikeRyles.jpg';
import Team from '../assets/Team.jpg';
import Vera from '../assets/Vera2.jpg';
import {Layout} from '../components/index.server';
function GradientBackground() {
  return (
    <div className="fixed top-0 w-full h-full overflow-hidden bg-blue-wave">
      <div className="absolute w-full h-full from-gray-50 z-10" />
    </div>
  );
}

export default function About() {
  return (
    <Layout hero={<GradientBackground />}>
      <div className="flex ">
        <div className="w-full z-99 relative grid grid-cols-2   m-10">
          <div className="">
            <div className="text-ryles-blue text-2xl font-bold w-10/12 bg-white rounded-xl border-4 border-[#84754E] space-y-4 pt-6 pl-6 pr-6 pb-4">
              <div className="text-ryles-blue text-2xl text-center">
                About Ryles Pharmacy
              </div>
              <p className="text-lg text-rylesblue font-bold">
                Meet Grainne and Mike Ryles, two well known local pharmacists.
                They teamed up with local accountant Bryan Daly to began this
                journy together
              </p>
              <p className="text-lg text-rylesblue font-bold">
                With these three all having experience working in local
                businesses over the past ten years, it should be no surprise
                that Ryle's pharmacy was their next step.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Grainne and Mike are known for their friendly and caring
                attitudes to all customers. Their aim to bring a welcoming
                pharmacy, bursting with positivity and kindness, has most
                definitely been achieved.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Just pop on in to see for yourself!.
              </p>
              <p className="text-ryles-blue text-2xl pt-2 text-center">
                The people behind the smiles{' '}
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Of course all this wouldn't be possible without the amazing
                staff on board at Ryle's. Keeping the team local, Meet Jane,
                Katleen and Vera.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Jane is the wonderful pharmacy manager in store and no wonder,
                with all the experience she has behind her.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Jane is wll known throughout Tralee as she maintains close
                relationships with many locals and treat's all she meets with
                nothing but kindness.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Next we have our wonderful dispensary technician Vera, Vera has
                experience in multiple pharmacies troughout the town. Her
                outgoing and friendly manner means she is wel known to locals.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Her extensive OTC knowledge and her kind and welcoming
                personality makes her an excellent fit in Ryle's pharmacy.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Finally we have our last member, Katleen. Kat will be known to
                many for working in the pharmacy sector for over ten years.
                You'll find her in the front of shop with a smile on her face
                and advice to offer on any questions or issues you may have.
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Kat's naturally caring nature and excellent custoner service is
                rare to find and we are incredibly happy to have her as part of
                the team'
              </p>
              <p className="text-lg text-rylesblue font-bold">
                Please come say hi and get to know our staff in store anytime
              </p>
              <Image src={Team} width="600" height="200" alt="team" />
            </div>
          </div>
          <div className="">
            <div className="text-ryles-blue text-2xl font-bold w-10/12 bg-white rounded-xl border-4 border-[#84754E] space-y-4 pt-6 pl-2 pr-2">
              <section className="flex flex-col justify-center antialiased bg-white text-ryles-blue">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a className="relative block group" href="">
                      <div
                        className="absolute inset-0 bg-ryles-blue hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <Image
                          src={Mike}
                          width="340"
                          height="343"
                          alt="title"
                          className="flex w-full bg-cover"
                        />
                      </figure>
                    </a>
                    <div>
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                CEO
                              </a>
                            </li>
                            <li className="m-1">
                              <a
                                className="inline-flex text-center bg-blue-600 text-gray-100 py-1 px-3 rounded-full bg-ryles-blue hover:bg-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Owner
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a
                            className="hover:text-gray-100 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Mike Ryles
                          </a>
                        </h3>
                      </header>
                      <p className="text-lg text-rylesblue flex-grow"></p>
                    </div>
                  </article>
                </div>
              </section>
              <section className="flex flex-col justify-center antialiased bg-white text-ryles-blue">
                <div className="max-w-6xl mx-auto p-4 sm:px-6">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a className="relative block group" href="">
                      <div
                        className="absolute inset-0 bg-ryles-blue hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <Image
                          src={Grainne}
                          width="340"
                          height="343"
                          alt="title"
                          className="flex w-full bg-cover"
                        />
                      </figure>
                    </a>
                    <div>
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Owner
                              </a>
                            </li>
                            <li className="m-1">
                              <a
                                className="inline-flex text-center bg-blue-600 text-gray-100 py-1 px-3 rounded-full bg-ryles-blue hover:bg-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Manager
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a
                            className="hover:text-gray-100 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Grainne Ryles
                          </a>
                        </h3>
                      </header>
                      <p className="text-lg text-rylesblue flex-grow"></p>
                    </div>
                  </article>
                </div>
              </section>
              <section className="flex flex-col justify-center antialiased bg-white text-ryles-blue">
                <div className="max-w-6xl mx-auto p-4 sm:px-6">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a className="relative block group" href="">
                      <div
                        className="absolute inset-0 bg-ryles-blue hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <Image
                          src={KatJane}
                          width="340"
                          height="343"
                          alt="title"
                          className="flex w-full bg-cover"
                        />
                      </figure>
                    </a>
                    <div>
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Manager
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a
                            className="hover:text-gray-100 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Jane
                          </a>
                        </h3>
                      </header>
                      <p className="text-lg text-rylesblue flex-grow"></p>
                    </div>
                  </article>
                </div>
              </section>
              <section className="flex flex-col justify-center antialiased bg-white text-ryles-blue">
                <div className="max-w-6xl mx-auto p-4 sm:px-6">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a className="relative block group">
                      <div
                        className="absolute inset-0 bg-ryles-blue hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <Image
                          src={KatJane}
                          width="340"
                          height="343"
                          alt="title"
                          className="flex w-full bg-cover"
                        />
                      </figure>
                    </a>
                    <div>
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Front Desk
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a
                            className="hover:text-gray-100 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Kathleen
                          </a>
                        </h3>
                      </header>
                      <p className="text-lg text-rylesblue flex-grow"></p>
                    </div>
                  </article>
                </div>
              </section>
              <section className="flex flex-col justify-center antialiased bg-white text-ryles-blue">
                <div className="max-w-6xl mx-auto p-4 sm:px-6">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a className="relative block group" href="">
                      <div
                        className="absolute inset-0 bg-ryles-blue hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <Image
                          src={Vera}
                          width="340"
                          height="343"
                          alt="title"
                          className="flex w-full bg-cover"
                        />
                      </figure>
                    </a>
                    <div>
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Technician
                              </a>
                            </li>
                            <li className="m-1">
                              <a
                                className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-ryles-blue hover:bg-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                Manager
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a
                            className="hover:text-gray-100 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Vera
                          </a>
                        </h3>
                      </header>
                      <p className="text-lg text-rylesblue flex-grow"></p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

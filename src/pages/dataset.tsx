/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

const Dataset: React.FC = () => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
            <div className='mx-auto place-self-center px-6 py-2 lg:col-span-9 xl:px-0'>
              <h1 className='relative pb-4 text-4xl font-black sm:text-5xl'>
                Lorem ipsum
              </h1>

              <p className='relative pb-5 text-xl font-normal sm:text-2xl'>
                Lacus imperdiet duis urna gravida tellus massa cras placerat
                habitant. Nascetur dolor nostra bibendum mollis facilisi pretium
                nisi lobortis.
              </p>

              <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
                <ButtonLink href='/comingsoon' variant='primary'>
                  Amet augue varius
                </ButtonLink>
                <ButtonLink
                  href='/comingsoon'
                  variant='outline'
                  // className='bg-stone-100'
                >
                  Vivamus placerat a
                </ButtonLink>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 pb-16 pt-4'>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg p-4 text-center'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Sapien auctor quis
                </h1>
              </div>

              {/* <Viz /> */}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;

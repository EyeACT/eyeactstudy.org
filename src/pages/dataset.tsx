import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// Dynamically import Lottie to disable SSR
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const Dataset: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the animation JSON to avoid issues with SSR
    import('public/lotties/construction.json').then((data) => {
      setAnimationData(data);
    });
  }, []);

  if (!animationData) return <div>Loading animation...</div>;

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main className='bg-gradient-to-t from-sky-100 to-white'>
          <SkipNavContent />

          <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
            <div className='mx-auto place-self-center px-6 py-2 lg:col-span-9 xl:px-0'>
              <h1 className='relative pb-4 text-4xl font-black sm:text-5xl'>
                Dataset
              </h1>

              <p className='relative pb-5 text-xl font-normal sm:text-2xl'>
                We are developing a platform called the Envision Portal for
                sharing the Eye ACT data. This is a work in progress so keep
                checking here for updates!
              </p>
            </div>
          </section>

          <section className='pb-16 pt-4'>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg p-4 text-center'>
                <Lottie
                  loop
                  animationData={animationData}
                  play
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;

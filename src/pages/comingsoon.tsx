import { SkipNavLink } from '@chakra-ui/skip-nav';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Comingsoon: React.FC = () => {
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
        <Seo templateTitle='Coming Soon' />
        <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20'></div>
          <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>
          <div className='mx-auto max-w-2xl lg:max-w-4xl'>
            <motion.h1
              variants={fadeInVariants}
              initial='hidden'
              animate='visible'
              custom={0}
              className='transit text-center text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl'
            >
              Coming Soon
            </motion.h1>
            <figure className='mt-10'>
              <motion.div
                className='mx-auto mb-8'
                variants={fadeInVariants}
                initial='hidden'
                animate='visible'
                custom={1}
              >
                <Lottie
                  loop
                  animationData={animationData}
                  play
                  style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
              <motion.blockquote
                className='text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9'
                variants={fadeInVariants}
                initial='hidden'
                animate='visible'
                custom={1}
              >
                <p>
                  We are working hard to bring you the best experience. Stay
                  tuned!
                </p>
              </motion.blockquote>
              <motion.figcaption
                className='mt-10'
                variants={fadeInVariants}
                initial='hidden'
                animate='visible'
                custom={2}
              >
                {/* <Image
                  className='mx-auto size-10 rounded-full'
                  width={40}
                  height={40}
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                /> */}
                <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                  <button
                    onClick={() => window.history.back()}
                    className='text-lg font-semibold text-gray-900 hover:text-blue-800'
                  >
                    <span className='mr-1' aria-hidden='true'>
                      &larr;
                    </span>
                    Go Back
                  </button>
                  {/* <svg
                    viewBox='0 0 2 2'
                    width='3'
                    height='3'
                    aria-hidden='true'
                    className='fill-gray-900'
                  >
                    <circle cx='1' cy='1' r='1' />
                  </svg>
                  <div className='text-gray-600'>CEO of Workcation</div> */}
                </div>
              </motion.figcaption>
            </figure>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Comingsoon;

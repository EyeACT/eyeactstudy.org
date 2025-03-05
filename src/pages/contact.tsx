import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const ContactUs: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import('public/lotties/web.json').then((data) => {
      setAnimationData(data);
    });
  }, []);

  if (!animationData) return <div>Loading animation...</div>;
  return (
    <>
      <Head>
        <script async src='https://tally.so/widgets/embed.js'></script>
      </Head>

      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Contact Us' />

        <main>
          <SkipNavContent />

          <section className='bg-gradient-to-t from-sky-100 to-white'>
            <div className='mx-auto max-w-screen-md px-4 py-8 lg:pb-0 lg:pt-16'>
              <h1 className='mb-1 text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Contact Us
              </h1>

              {/* <p className='mb-3 text-center text-xl font-normal text-slate-600'>
                Have a question about our project? Want to provide feedback
                about our dataset or anything else? Need help using our data?
                Let us know!
              </p> */}

              <p className='text-center text-xl font-normal text-slate-600'>
                We are not taking any queries at the moment. Please check again
                later!
              </p>

              {/* <p className='mb-7 text-center text-sm font-normal text-slate-400'>
                Note that we are mostly looking for feedback at this moment but
                will try our best to answer questions. Please use an
                institutional email for faster response and preventing your
                query from being flagged as a spam.
              </p> */}

              <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: '100%', height: 'auto' }}
              />
              {/* <iframe
                data-tally-src='https://tally.so/embed/wdY71y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
                loading='lazy'
                width='100%'
                height='276'
                title='Eye ACT Contact Form'
              ></iframe> */}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ContactUs;

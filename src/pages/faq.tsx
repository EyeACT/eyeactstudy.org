import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function ContactUs() {
  return (
    <>
      <Head>
        <script async src='https://tally.so/widgets/embed.js'></script>
      </Head>

      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Frequently Asked Questions' />

        <main>
          <SkipNavContent />

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 lg:py-16'>
              <h1 className='mb-1 text-left text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Frequently Asked Questions
              </h1>

              <p className='mb-7 text-left text-xl font-normal text-slate-600'>
                Have a different question and can't find the answer you're
                looking for?
                <br />
                <UnderlineLink
                  href='https://eyeact.org/contact'
                  className='text-sky-600'
                >
                  Contact us
                </UnderlineLink>{' '}
                and we'll get back to you as soon as we can.
              </p>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  Aute qui et ex anim.
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    Sit Lorem incididunt commodo esse ad consequat duis est ad
                    proident eu consectetur incididunt elit. Do nostrud veniam
                    voluptate proident deserunt irure velit minim esse minim
                    aute nostrud. Quis et duis Lorem labore exercitation veniam
                    ex aliqua commodo incididunt ea veniam ipsum dolor.
                  </p>
                </dd>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

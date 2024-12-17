import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='404' />

      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-indigo-600'>404</p>
          <h1 className='mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
            Page not found
          </h1>
          <p className='mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-6 space-x-4'>
            <Link
              href='/'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Go back home
            </Link>
            <Link
              href='/contact'
              className='text-sm font-semibold text-gray-900'
            >
              Contact support <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

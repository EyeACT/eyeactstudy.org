import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div className='bg-gradient-to-t from-sky-100 to-white pt-[61px]'>
        {children}
      </div>
      <Footer />
    </>
  );
}

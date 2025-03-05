/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Popover } from '@headlessui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const regularLinks = [
  {
    href: '/team',
    title: 'Team',
  },
  {
    href: '/publications',
    title: 'Publications',
  },
  {
    href: '/dataset',
    title: 'Dataset',
  },
  {
    href: '/events',
    title: 'Events',
  },
  {
    href: '/contact',
    title: 'Contact Us',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 z-10 w-full border-b border-black bg-black'>
      <nav
        className='max-w-screen mx-auto flex items-center justify-between px-6 py-4 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center lg:flex-1'>
          <Image
            src='/images/logo-white-letter.png'
            alt='Eye ACT Logo'
            width={40}
            height={40}
            className='h-10 w-10'
          />
          <UnstyledLink
            href='/'
            className='pl-3 text-lg font-bold text-white transition-all hover:text-sky-200'
          >
            Eye ACT
          </UnstyledLink>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Icon icon='ic:round-menu' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          {regularLinks.map((link, index) => (
            <UnstyledLink
              key={index}
              href={link.href}
              className='font-semibold text-gray-800 transition-all hover:text-blue-400 md:text-white'
            >
              {link.title}
            </UnstyledLink>
          ))}
        </Popover.Group>
      </nav>

      {/* Mobile Menu */}

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <UnstyledLink
              href='/'
              className='-m-1.5 p-1.5 text-lg font-bold transition-all hover:text-sky-500'
            >
              Eye ACT
            </UnstyledLink>

            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <Icon icon='ic:round-close' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {regularLinks.map((link, index) => (
                  <UnstyledLink
                    key={index}
                    href={link.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {link.title}
                  </UnstyledLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

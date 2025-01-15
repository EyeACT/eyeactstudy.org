/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const footerLinks = [
  {
    title: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        href: '/privacy',
      },

      {
        title: 'Cookie Policy',
        href: '/cookies',
      },
    ],
  },

  {
    title: 'Resources',
    links: [
      {
        title: 'Team',
        href: '/team',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/EyeACT',
      },
      // {
      //   title: 'Components',
      //   href: '/components',
      // },
      {
        title: 'Contact Us',
        href: '/contact',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-gradient-to-t from-white to-sky-100'>
      <div className='mx-auto max-w-screen-xl p-4 sm:p-6'>
        <hr className='mb-8 border-slate-300 sm:mx-auto' />
        <div className='md:flex md:justify-between md:space-x-12'>
          <div className='mb-6 flex flex-col md:mb-0 md:max-w-md lg:max-w-xl'>
            <a href='https://fairdataihub.org/' className='flex items-center'>
              <img
                className='mr-3 h-14'
                src='/images/logo-regular.png'
                alt='temp logo'
              />
              <span className='self-center whitespace-nowrap text-5xl font-bold text-sky-700'>
                EyeACT
              </span>
            </a>
            <span className='pb-2 pt-3 text-lg font-semibold text-sky-700'>
              Seeing the Future of Brain Health Through the Eyes
            </span>

            <Divider orientation='horizontal' />

            <div className='flex flex-col pt-6'>
              <div className='flex flex-col justify-start'>
                <p className='pt-2 text-sm font-medium text-sky-900'>
                  EyeACT bridges the connection between eye health and brain
                  function, pioneering research to uncover early indicators of
                  Alzheimer’s disease. Our mission is to transform how we detect
                  and prevent neurodegenerative disorders.
                </p>
              </div>
            </div>

            <Divider orientation='horizontal' className='py-4 md:hidden' />
          </div>

          <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-12'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title} className='w-auto'>
                <h3 className='mb-3 text-xl font-semibold text-slate-800'>
                  {footerLink.title}
                </h3>
                <ul className='mt-2 space-y-2'>
                  {footerLink.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} passHref>
                        <span className='text-base font-medium text-sky-700 transition-all hover:text-sky-900 hover:underline'>
                          {link.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className='my-6 border-slate-300 sm:mx-auto lg:my-8' />

        <div className='flex items-center justify-between'>
          <span className='text-base font-medium text-slate-800 sm:text-center'>
            © {new Date().getFullYear()} {` `}
            <a href='https://github.com/EyeACT' className='hover:underline'>
              EyeACT™
            </a>
            . All Rights Reserved.
          </span>

          <div className='mt-0 flex justify-center space-x-6'>
            <a
              href='https://github.com/EyeACT'
              className='text-sky-700 hover:text-sky-900'
            >
              <AiFillGithub size={30} />
              <span className='sr-only'>GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

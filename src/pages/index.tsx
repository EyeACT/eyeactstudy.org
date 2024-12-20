/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import ImageWithCredit from '@/components/images/ImageWithCredit';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

/**
 * SVGR Supportgray
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const HomePage: React.FC<EventItem> = ({ slug, frontMatter }) => {
  const {
    title,
    startDateTime,
    endDateTime,
    location,
    subtitle,
    heroImage,
    timezone,
    type,
  } = frontMatter;

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const cardData = [
    {
      id: 1,
      title: 'Vitae a ante hac volutpat',
      items: [
        'Lacus suspendisse hac massa',
        'Laoreet himenaeos',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
      ],
      imgSrc:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Montes orci',
      items: [
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
      ],
      imgSrc:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Vivamus id',
      items: [
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
        'Laoreet himenaeos ridiculus dapibus',
      ],
      imgSrc:
        'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const checkData = [
    {
      id: 1,
      title: 'Dolor maecenas inceptos',
      description:
        'Nisl metus per posuere auctor tellus. Sapien hac dolor lobortis, senectus himenaeos lobortis tempus. Porttitor dolor mattis a eget pulvinar eleifend ultricies.',
    },
    {
      id: 2,
      title: 'Vestibulum curabitur',
      description:
        'Tellus platea tellus nisi morbi gravida. Est platea augue a primis nullam, ac vehicula tincidunt.',
    },
    {
      id: 3,
      title: 'Urna molestie vestibulum',
      description:
        'Dui metus sociosqu sem amet quisque sagittis ex. Nostra tristique finibus nunc mattis ultrices vulputate suspendisse. Porta dignissim sodales conubia, iaculis odio vitae varius. Aliquet metus facilisis luctus fusce luctus porttitor.',
    },
  ];

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className="relative flex h-[60vh] min-h-[600px] w-full items-center justify-center text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[150px] after:w-full after:bg-gradient-to-t after:from-black after:to-transparent md:h-[100vh]">
            <div className='relative grid w-full grid-cols-12 items-center gap-8 px-6 py-16 lg:ml-16 lg:py-16 xl:gap-0'>
              {/* Left Text Section */}
              <div className='col-span-12 pr-0 md:col-span-6 md:pr-16'>
                <motion.h1
                  variants={fadeInVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  custom={1}
                  className='bg-[radial-gradient(circle_at_40%_0%,rgba(0,0,0,0.8),transparent)] text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </motion.h1>
                <motion.p
                  variants={fadeInVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  custom={2}
                  className='mt-4 bg-[radial-gradient(circle_at_40%_0%,rgba(0,0,0,0.8),transparent)] text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.{' '}
                  <Link href='/team' className='text-blue-400 underline'>
                    Dapibus in amet
                  </Link>{' '}
                  adipiscing varius vivamus fames. Tellus pellentesque justo
                  laoreet suscipit dolor porttitor.
                </motion.p>
                <motion.div
                  variants={fadeInVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  custom={2}
                  className='mt-6'
                >
                  <ButtonLink
                    href='/team'
                    variant='primary'
                    className='inline-block rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold transition sm:text-base'
                  >
                    Dapibus in amet
                  </ButtonLink>
                </motion.div>
              </div>
            </div>
          </section>

          {/* <section className='py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Lorem ipsum dolor sit amet
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Lorem ipsum dolor sit amet. Vel aspernatur vero est
                  praesentium reprehenderit est distinctio expedita non enim
                  animi. Non inventore quas aut assumenda quisquam sit
                  voluptates velit ea doloremque debitis. Ab vitae nihil et vero
                  accusantium sed corrupti perspiciatis qui laudantium dicta quo
                  nulla voluptas qui commodi dolor. Qui rerum nisi qui vitae
                  atque aut consequatur tempora ex error enim.
                </p>

                <div>
                  <ButtonLink href='/team' variant='outline'>
                    Lorem ipsum dolor sit amet.
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1727527412074-2a6ed61440c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='lorem ipsum'
                />
              </div>
            </div>
          </section> */}

          <section className='bg-gradient-to-t from-sky-100 to-white px-8 py-16'>
            <div className='mx-auto max-w-7xl text-center text-black'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='mb-6 text-4xl font-bold'
              >
                Risus interdum
              </motion.h2>
              <motion.p
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='mb-12 text-lg leading-relaxed'
              >
                Lectus eleifend malesuada ut orci nulla placerat ultrices
                volutpat lobortis. Posuere faucibus ligula pretium morbi
                ultrices, mus mus rhoncus conubia. Maecenas primis mattis nibh
                maecenas euismod tempus ante euismod. Consequat venenatis
                hendrerit purus nascetur primis efficitur. Facilisi sem
                convallis volutpat facilisis quam magna aptent
              </motion.p>

              <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {cardData.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    className='overflow-hidden rounded-lg bg-white text-left shadow-lg'
                    variants={fadeInVariants}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    custom={i}
                  >
                    <img
                      src={entry.imgSrc}
                      alt={entry.title}
                      className='h-48 w-full object-cover'
                    />
                    <div className='p-6'>
                      <h3 className='mb-4 text-xl font-bold text-black'>
                        {`0${entry.id}`}
                        <br />
                        {entry.title}
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ButtonLink href='/team' variant='outline'>
                        Learn More
                        <span className='ml-2'>&rarr;</span>
                      </ButtonLink>
                      {/* <ul className='list-disc pl-5 text-gray-700'>
                        {entry.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className='bg-gradient-to-t from-white to-sky-100 py-16'>
            <motion.div
              variants={fadeInVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={0}
              className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'
            >
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Sed quidem sapiente cum sint saepe non doloremque velit qui
                  veniam praesentium aut repudiandae laboriosam id autem
                  facilis. Ut quidem facere id maxime ipsum 33 maiores natus et
                  commodi eveniet qui beatae ipsam et nostrum optio sit voluptas
                  voluptatem. Aut esse dolorem cum suscipit voluptate et
                  deserunt obcaecati qui fugiat veniam 33 enim veniam qui
                  galisum perferendis. Et dolores magnam hic provident quae ea
                  voluptates sint ut earum internos ut facere quidem.
                </p>

                <div>
                  <ButtonLink href='/team' variant='primary' className=''>
                    Lorem ipsum dolor sit amet
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1726344603918-156e119eb6d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='lorem ipsum'
                />
              </div>
            </motion.div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white py-16'>
            <motion.div
              variants={fadeInVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={0}
              className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'
            >
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Est molestiae recusandae et dolore cupiditate aut
                  necessitatibus neque ut quod dolor sed voluptatibus esse vel
                  nobis rerum. Qui praesentium quam non esse voluptatem aut
                  accusantium porro et sunt voluptate aut quaerat asperiores et
                  voluptas libero est autem ipsam. Non sunt consequuntur non
                  autem numquam qui accusamus saepe et rerum mollitia rem
                  recusandae assumenda.
                </p>

                <div>
                  <ButtonLink href='/team' variant='outline'>
                    Lorem ipsum dolor sit amet
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <ImageWithCredit
                  src='https://images.unsplash.com/photo-1727705744337-5da00ac764a6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  author='lorem ipsum'
                />
              </div>
            </motion.div>
          </section>

          <section className='bg-gradient-to-t from-white to-sky-100 py-24'>
            <motion.div
              variants={fadeInVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={0}
              className='mx-auto max-w-screen-xl rounded-md bg-[url("/images/polygon-card.svg")] shadow-lg'
            >
              <div className='mx-auto flex max-w-7xl flex-col items-center md:flex-row'>
                <div className='relative flex-shrink-0 md:w-1/2'>
                  <motion.div
                    variants={fadeInVariants}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    custom={0}
                    className='absolute inset-0 flex items-center justify-center'
                  >
                    <Image
                      src='https://images.unsplash.com/photo-1615552440985-d652ebf4c199?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      width={500}
                      height={500}
                      alt='lorem ipsum'
                      className='rounded-full shadow-md'
                    />
                  </motion.div>
                </div>

                <div className='my-10 flex flex-col md:w-1/2 md:pl-10'>
                  <motion.div
                    variants={fadeInVariants}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    custom={1}
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white'>
                        1
                      </div>
                      <h3 className='text-xl font-semibold text-sky-500'>
                        Duis aute irure
                      </h3>
                    </div>
                    <ul className='mt-4 list-disc space-y-2 pl-10 text-gray-700'>
                      <li>Consectetur adipiscing</li>
                      <li>Sed do eiusmod</li>
                      <li>Laboris nisi</li>
                      <li>Laboris nisi </li>
                    </ul>
                  </motion.div>

                  {/* Connector */}
                  {/* <div className='mx-auto h-20 w-1 bg-blue-500'></div> */}

                  {/* Step 2: Data Exchange */}
                  <motion.div
                    variants={fadeInVariants}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    custom={2}
                    className='ml-64'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white'>
                        2
                      </div>
                      <h3 className='text-xl font-semibold text-sky-500'>
                        Duis aute irure
                      </h3>
                    </div>
                    <ul className='mt-4 list-disc space-y-2 pl-10 text-gray-700'>
                      <li>Dolor sit amet</li>
                      <li>Dolor sit amet</li>
                      <li>Dolor sit amet</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white py-20'>
            <div className='mx-auto max-w-screen-xl px-8 text-center'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='border-b-2 border-gray-300 pb-4 text-3xl font-bold text-gray-800'
              >
                Lorem ipsum odor amet
              </motion.h2>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {checkData.map((trust) => (
                  <motion.div
                    variants={fadeInVariants}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    custom={trust.id}
                    key={trust.id}
                    className='p-4 text-left'
                  >
                    <div className='mb-2 flex justify-between pr-4'>
                      <span className='flex items-center justify-center text-xl font-bold text-sky-500'>
                        Iaculis scelerisque
                      </span>
                      <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500'>
                        ✓
                      </span>
                    </div>
                    <h3 className='text-md mb-2 font-bold text-gray-800'>
                      {trust.title}
                    </h3>
                    <p className='text-gray-600'>{trust.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Get the events from the `events` directory
  const files = fs.readdirSync(`./events`);

  const eventList = files.map((fileName) => {
    // Remove the .md extension and use the file name as the slug
    const slug = fileName.replace(`.md`, ``);

    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`events/${fileName}`, `utf-8`);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
    };
  });

  // Get the next upcoming event
  let closestUpcomingEvent = eventList
    .filter((event) => dayjs(event.frontMatter.startDateTime).isAfter(dayjs()))
    .sort(
      (a, b) =>
        dayjs(a.frontMatter.startDateTime).valueOf() -
        dayjs(b.frontMatter.startDateTime).valueOf(),
    )[0];

  if (!closestUpcomingEvent) {
    // If there are no upcoming events, get the most recent event
    closestUpcomingEvent = eventList.sort(
      (a, b) =>
        dayjs(b.frontMatter.startDateTime).valueOf() -
        dayjs(a.frontMatter.startDateTime).valueOf(),
    )[0];
  }

  // Return the posts data to the page as props
  return {
    props: {
      slug: closestUpcomingEvent.slug || '',
      frontMatter: closestUpcomingEvent.frontMatter || {},
    },
  };
}

export default HomePage;

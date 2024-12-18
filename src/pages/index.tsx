/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';

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

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className="relative flex h-[60vh] min-h-[600px] w-full items-center justify-center text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.3] before:content-[''] md:h-[40vh]">
            <div className='mx-auto grid max-w-screen-xl flex-col px-6 py-16 md:grid-cols-12 md:gap-8 lg:py-16 xl:gap-0'>
              <div className='col-span-12 mr-auto place-self-center md:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black text-white sm:text-5xl'>
                  Sed quidem sapiente cum sint saepe non doloremque velit qui
                  veniam praesentium aut repudiandae laboriosam id autem
                  facilis.
                </h1>

                <p className='relative pb-5 text-xl font-medium text-white sm:text-2xl'>
                  Non sunt consequuntur non autem numquam qui accusamus saepe et
                  rerum mollitia rem recusandae assumenda
                </p>
              </div>

              <div className='col-span-12'>
                <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
                  <ButtonLink
                    href='https://github.com/EyeAct'
                    variant='primary'
                  >
                    Non sunt consequuntur non autem numquam
                  </ButtonLink>
                  <ButtonLink
                    href='https://github.com/EyeAct'
                    variant='outline'
                    className='bg-stone-100'
                  >
                    Rerum mollitia rem recusandae assumenda
                  </ButtonLink>

                  <ButtonLink
                    href='/team'
                    variant='dark'
                    className='hidden bg-slate-100'
                  >
                    Qui accusamus saepe
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='py-16'>
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
          </section>

          <section className='bg-sky-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
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
                  <ButtonLink href='/team' variant='outline'>
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
            </div>
          </section>

          <section className='bg-slate-50/50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
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

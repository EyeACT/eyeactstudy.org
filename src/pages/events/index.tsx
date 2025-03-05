import { SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import EventsLayout from '@/components/events/EventsLayout';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// The Events Page Content

const Events: React.FC<EventsLayoutProps> = ({ eventList }) => {
  const pastEvents = eventList.filter((event) =>
    dayjs(event.frontMatter.startDateTime).isBefore(dayjs()),
  );

  const upcomingEvents = eventList.filter((event) =>
    dayjs(event.frontMatter.startDateTime).isAfter(dayjs()),
  );

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Events' />

        <section className='bg-gradient-to-t from-sky-100 via-white to-white'>
          <div
            className='relative flex h-[27rem] items-center justify-center text-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black opacity-50'></div>
            {/* Text Content */}
            <div className='relative'>
              <h1 className='text-4xl font-bold text-white'>EVENTS</h1>
              <h2 className='text-left text-xl text-white'>
                A record of all past, present and future events and workshops
                from the Eye ACT team are listed here.
              </h2>
            </div>
          </div>

          <div className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-8 lg:px-6'>
            <div className='my-10 rounded-lg bg-gradient-to-t from-white to-sky-100'>
              <div className="flex items-center justify-center rounded-lg border bg-[url('/images/polygon-card.svg')] py-8 shadow-lg">
                <h2 className='text-4xl font-bold text-sky-700'>
                  UPCOMING EVENTS
                </h2>
              </div>
            </div>

            <EventsLayout eventList={upcomingEvents} />

            <div className='my-10 rounded-lg bg-gradient-to-t from-white to-sky-100'>
              <div className="flex items-center justify-center rounded-lg border bg-[url('/images/polygon-card.svg')] py-8 shadow-lg">
                <h2 className='text-4xl font-bold text-sky-700'>PAST EVENTS</h2>
              </div>
            </div>

            <EventsLayout eventList={pastEvents} />
          </div>
        </section>
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

    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
      timeToRead,
    };
  });

  // sort the posts by date in descending order
  eventList.sort((a, b) => {
    const a_date = dayjs(
      a.frontMatter.startDateTime,
      `YYYY-MM-DD`,
    ) as unknown as number;

    const b_date = dayjs(
      b.frontMatter.startDateTime,
      `YYYY-MM-DD`,
    ) as unknown as number;

    return b_date - a_date;
  });

  // Return the posts data to the page as props
  return {
    props: {
      eventList,
    },
  };
}

export default Events;

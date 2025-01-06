import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import EventDates from '@/components/events/EventDates';

const EventsLayout: React.FC<EventsLayoutProps> = ({ eventList }) => {
  return (
    <>
      <hr className='mx-6 my-1 border-dashed border-slate-300' />

      <div className='flex flex-wrap gap-6 px-8'>
        {eventList.map((event) => (
          <div
            key={event.slug}
            className='group relative flex flex-row rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl'
          >
            <div className='relative w-full max-w-[40%] overflow-hidden rounded-l-lg'>
              <Image
                src={event.frontMatter.heroImage}
                alt={event.frontMatter.title}
                layout='responsive'
                width={16} // Aspect ratio width
                height={9} // Aspect ratio height
                className='object-centern object-cover transition-transform duration-300 hover:scale-105'
              />
              {dayjs(event.frontMatter.startDateTime).isAfter(dayjs()) && (
                <span className='absolute left-4 top-4 rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white'>
                  Upcoming
                </span>
              )}
            </div>
            <div className='flex flex-1 flex-col p-5'>
              <Link href={`/events/${event.slug}`} passHref>
                <h3 className='text-lg font-bold text-gray-800 transition duration-300 group-hover:text-blue-500'>
                  {event.frontMatter.title}
                </h3>
              </Link>
              <p className='mt-2 text-sm text-gray-600'>
                {event.frontMatter.subtitle}
              </p>
              <div className='mt-4 border-t pt-4 text-sm text-gray-500'>
                <EventDates
                  startDateTime={event.frontMatter.startDateTime}
                  endDateTime={event.frontMatter.endDateTime}
                />
                <p className='mt-1'>{event.timeToRead} min read</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventsLayout;

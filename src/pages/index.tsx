/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import {
  FadeFramerItem,
  WidthFramerContainer,
  WidthFramerItem,
} from '@/utils/framer';

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
      title: 'How Eye Conditions Provide Early Warning Signs',
      description:
        'Explore the link between glaucoma, macular degeneration, and diabetic retinopathy with Alzheimer’s disease risk. Our research sheds light on the underlying mechanisms.',
      linkText: 'Learn More',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'ACT Study Contributions to Eye-Brain Research',
      description:
        'With over 5,400 participants, the Adult Changes in Thought study provides unique insights into dementia-free aging and the role of eye health in neurodegeneration',
      linkText: 'Learn About Our Study',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Transforming Early Detection Through Research',
      description:
        'Discover how monitoring ophthalmic conditions may lead to earlier interventions for Alzheimer’s disease and related dementias.',
      linkText: 'Find Out How',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const checkData = [
    {
      id: 1,
      title: 'Detailed Data Collection',
      subtitle: 'Expanding the Understanding of Alzheimer’s Risk Factors',
      description:
        'Our study collects data beyond eye health, including genetic factors like APOE genotypes, medical history, and cognitive evaluations, providing a holistic understanding of Alzheimer’s risk.',
    },
    {
      id: 2,
      title: 'Long-Term Follow-Up',
      subtitle: 'Decades of Data for Deeper Understanding',
      description:
        'With over 31,142 person-years of follow-up, the ACT study offers insights into how ophthalmic conditions evolve and their impact on brain health.',
    },
    {
      id: 3,
      title: 'Rigorous Analytical Methods',
      subtitle: 'Precision in Research and Analysis',
      description:
        'Advanced statistical models ensure robust results, examining recent and established ophthalmic conditions and their interplay with genetic and lifestyle factors.',
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
                  className='bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),transparent)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'
                >
                  Seeing the Future of Brain Health Through the Eyes
                </motion.h1>
                <motion.p
                  variants={fadeInVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  custom={2}
                  className='mt-4 bg-[radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.8),transparent)] text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl'
                >
                  The Eye ACT study aims sheds light on how ophthalmic
                  conditions such as glaucoma and diabetic retinopathy can
                  provide early clues to Alzheimer’s disease. By understanding
                  the connection between the eyes and brain, we aim to drive
                  advancements in early detection and prevention of
                  neurodegenerative diseases.
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
                    href='/dataset'
                    variant='primary'
                    className='inline-block rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold transition sm:text-base'
                  >
                    Discover Our Research
                  </ButtonLink>
                </motion.div>
              </div>
            </div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white pb-0 pt-16'>
            <div className='mx-auto max-w-screen-xl text-center'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='border-b-2 border-gray-300 pb-4 text-4xl font-bold text-gray-800'
              >
                How the ACT Study Stands Out
              </motion.h2>
              <div className='mt-4 grid grid-cols-1 gap-8 md:grid-cols-3'>
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
                        {trust.title}
                      </span>
                      <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500'>
                        ✓
                      </span>
                    </div>
                    <h3 className='text-md mb-2 font-bold text-gray-800'>
                      {trust.subtitle}
                    </h3>
                    <p className='text-gray-600'>{trust.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='mx-auto my-10 max-w-screen-xl px-8'>
              <motion.div
                variants={WidthFramerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 1 }}
                className='relative h-[40px] w-full'
              >
                <div className='h-full rounded-full border border-blue-100 bg-white shadow-[inset_0_0_8px_rgba(0,0,0,0.3)]'>
                  <span className='absolute bottom-[45px] right-2 text-base font-medium'>
                    4000 participants
                  </span>
                </div>

                <motion.div
                  variants={WidthFramerItem}
                  className='absolute inset-0 max-w-[78%] rounded-full bg-blue-300'
                />

                <motion.div
                  variants={FadeFramerItem}
                  className='completed-consent-text'
                >
                  <span className='block text-xl font-bold'>3,140+</span>
                  <span className='text-[16px] font-normal'>
                    participants have completed the consent process
                  </span>
                </motion.div>

                <motion.div
                  variants={WidthFramerItem}
                  className='absolute inset-0 max-w-[40%] rounded-full bg-blue-600'
                />

                <motion.div
                  variants={FadeFramerItem}
                  className='completed-study-text'
                >
                  <span className='block text-xl font-bold'>1590+</span>
                  <span className='text-[16px] font-normal'>
                    participants have completed in-person study visit
                  </span>
                </motion.div>
              </motion.div>
            </div>
            <div className='mx-auto max-w-screen-xl border-b-2 border-gray-300 pt-32 lg:pt-24'></div>
          </section>

          <section className='bg-gradient-to-t from-white to-sky-100 px-8 py-24'>
            <div className='mx-auto max-w-7xl text-center text-black'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='mb-6 text-4xl font-bold'
              >
                Advancing Research at the Intersection of Eye Health and
                Alzheimer’s Disease
              </motion.h2>
              <motion.p
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='mb-12 text-lg leading-relaxed'
              >
                Our groundbreaking studies explore how ophthalmic conditions,
                such as glaucoma, age-related macular degeneration (AMD), and
                diabetic retinopathy (DR), can serve as early indicators of
                Alzheimer’s disease, paving the way for better detection and
                prevention.
              </motion.p>

              <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {cardData.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    className='flex h-full flex-col overflow-hidden rounded-lg bg-white text-left shadow-lg'
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
                    <div className='flex flex-grow flex-col p-6'>
                      <h3 className='mb-2 text-xl font-bold text-black'>
                        {entry.title}
                      </h3>
                      <p className='mb-4 flex-grow text-gray-700'>
                        {entry.description}
                      </p>
                      <ButtonLink
                        href={entry.linkUrl}
                        variant='outline'
                        className='mt-auto w-fit rounded-md border border-black px-4 py-2 text-black hover:bg-gray-100'
                      >
                        {entry.linkText}
                        <span className='ml-2'>&rarr;</span>
                      </ButtonLink>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white'>
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
                  Shaping the Future of Alzheimer’s Detection and Care
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Our study analyzes data from over 3,877 participants aged 65
                  and older, enrolled through Kaiser Permanente Washington. With
                  31,142 person-years of follow-up, we assessed cognitive
                  decline and Alzheimer's risk in relation to eye conditions.
                </p>

                <div>
                  <ButtonLink href='/publications' variant='primary'>
                    View Our Methods and Results
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  src='https://images.unsplash.com/photo-1518152006812-edab29b069ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='rounded-lg'
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
              className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'
            >
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Revolutionizing Alzheimer’s Research Through Ophthalmology
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Our research shows how changes in the retina mirror
                  neurodegenerative processes, providing an accessible window
                  into brain health. By identifying retinal biomarkers, we’re
                  creating tools for non-invasive Alzheimer’s risk assessment.
                </p>

                <div>
                  <ButtonLink href='/dataset' variant='primary' className=''>
                    Learn More About Our Study
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1711409664431-4e7914ac2370?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='lorem ipsum'
                />
              </div>
            </motion.div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white py-14'>
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
                    className='absolute inset-0 flex flex-col items-center justify-center'
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
                    <h2 className='mb-4 text-2xl font-semibold text-black'>
                      Connecting Eye Health to Brain Function
                    </h2>
                    <div className='flex items-center space-x-4'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white'>
                        1
                      </div>
                      <h3 className='text-xl font-semibold text-sky-500'>
                        Shared Mechanisms
                      </h3>
                    </div>
                    <ul className='mt-4 list-disc space-y-2 pl-10 text-gray-700'>
                      <li>Progressive neurodegeneration</li>
                      <li>Microvascular damage</li>
                      <li>Amyloid β deposits</li>
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
                        Early Detection Potential
                      </h3>
                    </div>
                    <ul className='mt-4 list-disc space-y-2 pl-10 text-gray-700'>
                      <li>
                        Changes in retinal health could indicate brain health
                        risks
                      </li>
                      <li>
                        Regular eye exams may help identify Alzheimer’s risk
                        factors early
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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

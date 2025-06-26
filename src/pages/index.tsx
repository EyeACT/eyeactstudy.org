/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowNarrowRight } from 'react-icons/tb';

import StatsText from '@/components/content/StatsText';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { WidthFramerContainer } from '@/utils/framer';

/**
 * SVGR Supportgray
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Missing items will be added to the events list
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
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const cardData = [
    {
      id: 1,
      title: 'Revolutionizing Retinal Imaging',
      description:
        'Our research utilizes advanced imaging techniques such as OCT and OCTA to detect early retinal changes. These insights provide a clearer understanding of the relationship between retinal health and Alzheimer’s disease progression.',
      linkText: 'Learn more',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Innovative Detection Strategies',
      description:
        'By identifying key retinal biomarkers, Eye ACT is pioneering tools that predict Alzheimer’s risk years before clinical symptoms emerge, offering a unique approach to early detection.',
      linkText: 'Discover our approach',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Transforming Patient Care',
      description:
        'Eye ACT integrates eye and brain research to inform targeted interventions for Alzheimer’s. These breakthroughs are shaping personalized treatments to improve patient outcomes.',
      linkText: 'Find out how',
      linkUrl: '',
      imgSrc:
        'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const checkData = [
    {
      id: 1,
      title: 'Detailed Data Collection',
      subtitle: 'Integrating Eye and Brain Health Insights',
      description:
        'Eye ACT combines advanced imaging, genetic data, and clinical evaluations to uncover the connection between retinal changes and neurodegenerative processes. By analyzing ophthalmic data with Alzheimer’s risk factors, the study offers actionable insights for early intervention.',
    },
    {
      id: 2,
      title: 'Long-Term Follow-Up',
      subtitle: 'Revealing Retinal Health Trends Over Time',
      description:
        'With ongoing monitoring, Eye ACT tracks how retinal biomarkers evolve alongside cognitive decline. This long-term approach offers unique insights into how eye health may predict brain health changes, advancing Alzheimer’s detection strategies.',
    },
    {
      id: 3,
      title: 'Rigorous Analytical Methods',
      subtitle: 'Innovative Non-Invasive Diagnostic Tools',
      description:
        'Using imaging technologies and statistical analysis, Eye ACT identifies retinal biomarkers that align with Alzheimer’s risk. These non-invasive methods are transforming early detection and paving the way for personalized care.',
    },
  ];

  const MembersLogosList = [
    {
      image:
        'https://fairdataihub.org/_next/image?url=%2Fimages%2Fcollaborators%2Fcalmi-logo.png&w=256&q=75',
      imageHeight: 'h-16',
      href: 'https://calmi2.org/',
      caption: 'California Medical Innovations Institute',
    },
    {
      image: '/images/member-orgs/kaiser.png',
      imageHeight: 'h-13',
      href: 'https://www.kpwashingtonresearch.org/',
      caption: 'Kaiser Permanente Washington',
    },
    {
      image: '/images/member-orgs/uw.png',
      imageHeight: 'h-14',
      href: 'https://www.washington.edu/',
      caption: 'University of Washington',
    },
  ];
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='About Eye ACT' />

        <main>
          <SkipNavContent />

          {/* Hero Section */}
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
                  className='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl'
                >
                  Seeing the Future of Brain Health Through the Eyes
                </motion.h1>

                <motion.p
                  variants={fadeInVariants}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                  custom={2}
                  className='mt-4 bg-[radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.8),transparent)] text-base font-medium leading-relaxed text-gray-200 sm:text-lg md:text-2xl'
                >
                  The Eye ACT study aims to provide insights on how ophthalmic
                  conditions such as macular degeneration and diabetic
                  retinopathy can provide early clues to Alzheimer’s disease. By
                  understanding the connection between the eyes and brain, we
                  aim to drive advancements in early detection and prevention of
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
                    className='inline-block rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold transition sm:text-xl'
                  >
                    Discover Our Research
                  </ButtonLink>
                </motion.div>
              </div>
            </div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 to-white pb-8 pt-16'>
            <div className='mx-auto max-w-screen-xl text-center'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='border-b-2 border-gray-300 pb-4 text-4xl font-bold text-gray-800'
              >
                How the Eye ACT Study Stands Out
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
                    <div className='mb-2 flex justify-start gap-4'>
                      <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500'>
                        ✓
                      </span>

                      <span className='flex items-center justify-center text-xl font-bold text-sky-500'>
                        {trust.title}
                      </span>
                    </div>

                    <h3 className='mb-2 text-base font-bold text-gray-800'>
                      {trust.subtitle}
                    </h3>

                    <p className='text-base font-medium text-gray-600'>
                      {trust.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='mx-auto max-w-screen-xl px-8 py-10'>
              <motion.div
                variants={WidthFramerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 1 }}
                className='relative w-full space-y-6 p-4'
              >
                <StatsText />
              </motion.div>
            </div>

            <div className='mx-auto max-w-screen-xl border-b-2 border-gray-300 pt-32 lg:pt-2'></div>
          </section>

          <section className='bg-gradient-to-t from-white to-sky-100 px-8 py-12'>
            <div className='mx-auto max-w-7xl text-center text-black'>
              <motion.h2
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                custom={0}
                className='mx-auto mb-6 max-w-6xl text-4xl font-bold'
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
                className='mx-auto mb-12 max-w-5xl text-lg font-normal'
              >
                Eye ACT leverages advances in retinal imaging and data analysis
                to bridge the gap between eye health and Alzheimer’s research.
                Our focus is on translating these findings into actionable tools
                for early detection and treatment, paving the way for
                personalized care.
              </motion.p>

              <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {cardData.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    className='flex h-full flex-col overflow-hidden rounded-lg border bg-white text-left shadow-lg'
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

          <section className='bg-gradient-to-t from-sky-100 to-white py-12'>
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
                    View our methods and results
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

          <section className='bg-gradient-to-t from-white to-sky-100 py-12'>
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
                  neurodegenerative processes provide an accessible window into
                  brain health. By identifying retinal biomarkers, we’re
                  creating tools for non-invasive Alzheimer’s risk assessment.
                </p>

                <div>
                  <ButtonLink href='/dataset' variant='primary' className=''>
                    Learn more about our study
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

          {/* Members Section */}
          <section className='bg-gradient-to-t from-sky-100 to-white py-16'>
            <motion.div
              variants={fadeInVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='mx-auto max-w-screen-xl px-4 lg:px-6'
            >
              <motion.div
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="mx-auto max-w-7xl rounded-xl border border-gray-200 bg-[url('/images/curve-line-card.svg')] p-10 shadow-lg"
              >
                <div className='text-center'>
                  <h1 className='mb-3 text-3xl font-bold tracking-tight sm:text-4xl'>
                    Eye ACT Members
                  </h1>

                  <p className='mb-4 text-xl font-medium text-slate-600'>
                    The following organizations are part of the Eye ACT project
                  </p>

                  <div className='relative mb-8 flex justify-center'>
                    <Link
                      href='/team'
                      passHref
                      className='flex w-max items-center space-x-1 text-xl font-semibold text-sky-500 transition-all hover:text-sky-700'
                    >
                      <span>Meet our team</span>
                      <TbArrowNarrowRight size={20} />
                    </Link>
                  </div>
                </div>

                {/* Organization Logos */}
                <div className='flex flex-wrap justify-center gap-6'>
                  {MembersLogosList.map((logo, index) => (
                    <UnstyledLink href={logo.href} key={index}>
                      <div className='group relative flex h-[140px] w-[320px] items-center justify-center rounded-lg bg-slate-50 p-4 shadow-md transition-all hover:border hover:bg-slate-100'>
                        <img
                          src={logo.image}
                          alt=''
                          className={logo.imageHeight}
                        />
                        <span className='pointer-events-none absolute bottom-[-5px] text-sm font-medium text-slate-600 opacity-0 transition-all group-hover:bottom-1 group-hover:opacity-100 lg:text-xs'>
                          {logo.caption}
                        </span>
                      </div>
                    </UnstyledLink>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section className='bg-gradient-to-t from-sky-100 via-white to-sky-100 py-12'>
            <motion.div
              variants={fadeInVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              custom={0}
              className='mx-auto max-w-screen-xl px-4 lg:px-6'
            >
              <motion.div
                variants={fadeInVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="mx-auto max-w-7xl rounded-xl border border-gray-200 bg-[url('/images/polygon-card.svg')] p-10 shadow-lg"
              >
                <div className='mx-auto flex max-w-7xl flex-col items-center md:flex-row'>
                  <div className='relative flex-shrink-0 md:w-1/2'>
                    <motion.div
                      variants={fadeInVariants}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                      className='flex flex-col items-center justify-center'
                    >
                      <Image
                        src='https://images.unsplash.com/photo-1615552440985-d652ebf4c199?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        width={500}
                        height={500}
                        alt='Retinal Imaging'
                        className='aspect-auto rounded-full shadow-md'
                      />
                    </motion.div>
                  </div>

                  <div className='my-10 flex flex-col md:w-1/2 md:pl-10'>
                    <motion.div
                      variants={fadeInVariants}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                      className='pr-4'
                    >
                      <h2 className='pb-4 text-2xl font-semibold text-black'>
                        Exploring Retinal Changes for Brain Health Insights
                      </h2>

                      <p className='pb-6 text-base text-gray-800'>
                        The Eye ACT study goes beyond traditional approaches by
                        exploring how subtle retinal changes can provide a
                        dynamic view of brain health over time. These insights
                        are shaping how we detect and understand
                        neurodegenerative conditions.
                      </p>

                      <h3 className='pt-6 text-xl font-semibold text-sky-500'>
                        Bridging Retinal and Cognitive Health
                      </h3>

                      <p className='pt-4 text-gray-800'>
                        Eye ACT uniquely correlates retinal imaging findings
                        with cognitive decline, providing a clearer picture of
                        Alzheimer’s progression and opening avenues for targeted
                        intervention strategies.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
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

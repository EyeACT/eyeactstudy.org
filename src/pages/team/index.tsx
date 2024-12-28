/* eslint-disable @next/next/no-img-element */
import {
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tag,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { useState } from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoSchoolSharp } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineBadge } from 'react-icons/md';
import { PiUserListBold } from 'react-icons/pi';
import { RiAwardFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { FramerContainer } from '@/utils/framer';

import TEAM_JSON from '~/data/team.json';

interface Member {
  id: string;
  name: string;
  image: string;
  organization: string;
  blurDataURL: string;
  moduleImageParams: string;
  education: { degree: string; institution: string }[];
  expertise?: string[];
  about: string;
  pronoun?: string;
  roles?: string[];
  location?: string;
  social: {
    linkedin?: string;
    resume?: string;
    medprofile?: string;
    website?: string[];
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

const MembersGrid: React.FC<{
  members: Member[];
  openModal: (scholarId: string) => void;
}> = ({ members, openModal }) => {
  return (
    <motion.div
      variants={FramerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='align-center mx-auto grid max-w-screen-xl gap-8 px-4 pb-8 pt-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-16 lg:pt-8'
    >
      {members.map((scholar) => (
        <motion.div
          className='transform items-center justify-between transition-transform hover:scale-105 hover:shadow-2xl'
          key={scholar.id + Math.random()}
          id={scholar.id}
          onClick={() => openModal(scholar.id)}
        >
          <div className='relative mx-auto min-h-[350px] w-full sm:min-h-[400px]'>
            <Image
              src={`${scholar.image}${
                scholar.moduleImageParams !== ''
                  ? scholar.moduleImageParams
                  : ''
              }`}
              alt={scholar.name + ' image'}
              fill
              placeholder='blur'
              blurDataURL={scholar.blurDataURL}
              className='h-full w-full rounded-lg object-cover object-center'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            {/* Text overlay */}
            <div className='absolute bottom-0 left-0 w-full rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-4'>
              <h3 className='text-left text-2xl font-extrabold text-white'>
                {scholar.name}
              </h3>
              <div className='mt-2 flex items-center'>
                <IoSchoolSharp size={20} style={{ color: 'white' }} />
                <p className='ml-2 text-sm font-semibold text-white'>
                  {scholar.education[0].degree}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ScholarsPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ AllMembers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedScholar, setSelectedScholar] = useState<Member | null>(null);

  const openModal = (scholarid: string) => {
    const scholar = AllMembers.find((scholar) => scholar.id === scholarid);

    if (!scholar) {
      return;
    }

    setSelectedScholar(scholar);

    onOpen();
  };

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Scholars' />

        <main className='bg-gradient-to-t from-sky-100 to-white'>
          <SkipNavContent />

          <h2 className='pt-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:pt-16'>
            Meet the Team
          </h2>

          <MembersGrid members={AllMembers} openModal={openModal} />

          <Modal isOpen={isOpen} onClose={onClose} isCentered size='6xl'>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Grid
                  templateColumns={{ base: '1fr', lg: 'repeat(10, 1fr)' }}
                  gap={6}
                  className='px-4 py-6'
                >
                  {/* Left Section */}
                  <GridItem colSpan={{ base: 1, lg: 4 }}>
                    <VStack spacing={4} align='stretch' className='h-full'>
                      <img
                        src={selectedScholar?.image}
                        alt={selectedScholar?.name}
                        className='h-full max-h-[40rem] w-full rounded-lg object-cover object-center shadow-md'
                      />
                      {/* Social Icons */}
                      <Grid templateColumns='repeat(6, 1fr)' gap={4} rowGap={2}>
                        {'linkedin' in (selectedScholar?.social || {}) && (
                          <GridItem>
                            <UnstyledLink
                              href={selectedScholar?.social.linkedin || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 hover:text-blue-800'
                            >
                              <FaLinkedin size={22} />
                            </UnstyledLink>
                          </GridItem>
                        )}
                        {'resume' in (selectedScholar?.social || {}) && (
                          <GridItem>
                            <UnstyledLink
                              href={selectedScholar?.social.resume || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-[#F9C801] hover:text-[#d0b442]'
                            >
                              <RiAwardFill size={22} />
                            </UnstyledLink>
                          </GridItem>
                        )}
                        {'twitter' in (selectedScholar?.social || {}) && (
                          <GridItem>
                            <UnstyledLink
                              href={selectedScholar?.social.twitter || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-[#26a7de] hover:text-[#1b95d6]'
                            >
                              <FaTwitter size={22} />
                            </UnstyledLink>
                          </GridItem>
                        )}
                        {'instagram' in (selectedScholar?.social || {}) && (
                          <GridItem>
                            <UnstyledLink
                              href={selectedScholar?.social.instagram || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-[#e4405f] hover:text-[#ae374d]'
                            >
                              <FaInstagram size={22} />
                            </UnstyledLink>
                          </GridItem>
                        )}
                        {'github' in (selectedScholar?.social || {}) && (
                          <GridItem>
                            <UnstyledLink
                              href={selectedScholar?.social.github || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-gray-700 hover:text-gray-900'
                            >
                              <FaGithub size={22} />
                            </UnstyledLink>
                          </GridItem>
                        )}
                        {'website' in (selectedScholar?.social || {}) &&
                          selectedScholar?.social.website?.map(
                            (site, index) => (
                              <GridItem key={index}>
                                <UnstyledLink
                                  href={site}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-gray-600 hover:text-gray-900'
                                >
                                  <FaGlobe size={22} />
                                </UnstyledLink>
                              </GridItem>
                            ),
                          )}
                      </Grid>
                    </VStack>
                  </GridItem>

                  {/* Right Section */}
                  <GridItem colSpan={{ base: 1, lg: 6 }}>
                    <VStack align='stretch'>
                      <div className='flex flex-col items-center border-b-2 pb-2 align-middle'>
                        <h2 className='text-center text-3xl font-extrabold text-slate-900 lg:text-4xl'>
                          {selectedScholar?.name}
                          <p className='text-lg text-slate-700'>
                            ({selectedScholar?.pronoun})
                          </p>
                        </h2>
                        {/* Location */}
                        <div className='mt-2 flex flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0'>
                          <div className='flex items-center text-slate-700'>
                            <IoLocationOutline size={22} />
                            <p className='ml-2'>{selectedScholar?.location}</p>
                          </div>
                          <div className='flex items-center text-slate-700'>
                            <FaRegBuilding size={22} />
                            <p className='ml-2'>
                              {selectedScholar?.organization}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className='mt-4 flex flex-wrap items-center justify-center gap-2'>
                        <PiUserListBold size={26} />
                        {selectedScholar?.roles?.map((role, index) => (
                          <Tag
                            key={index}
                            colorScheme='green'
                            size='lg'
                            className='rounded-full px-3 py-1 shadow-sm'
                          >
                            {role}
                          </Tag>
                        ))}
                      </div>

                      {/* Education */}
                      <div className='mt-4'>
                        <h3 className='flex items-center text-xl font-bold text-slate-800'>
                          <IoSchoolSharp size={22} className='mr-3' />
                          Education
                        </h3>
                        <ul className='mt-2 space-y-1 text-center lg:text-left'>
                          {selectedScholar?.education.map((edu, index) => (
                            <li key={index} className='text-lg text-slate-700'>
                              {edu.degree}{' '}
                              {edu.institution && (
                                <span className='text-slate-600'>
                                  ({edu.institution})
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expertise */}
                      <div className='mt-4'>
                        <h3 className='flex items-center text-xl font-bold text-slate-800'>
                          <MdOutlineBadge size={22} className='mr-3' />
                          Expertise
                        </h3>
                        <div className='mt-2 flex flex-wrap justify-center gap-2 lg:justify-start'>
                          {selectedScholar?.expertise?.map(
                            (expertise, index) => (
                              <Tag
                                key={index}
                                colorScheme='blue'
                                size='lg'
                                className='rounded-full px-3 py-1 shadow-sm'
                              >
                                {expertise}
                              </Tag>
                            ),
                          )}
                        </div>
                      </div>

                      {/* About Me */}
                      <div className='mt-6'>
                        <h3 className='flex items-center text-xl font-bold text-slate-800'>
                          <FaCircleInfo size={22} className='mr-3' />
                          About Me
                        </h3>
                        <p className='mt-2 text-center text-lg leading-relaxed text-slate-700 lg:text-left'>
                          {selectedScholar?.about}
                        </p>
                      </div>
                    </VStack>
                  </GridItem>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const AllMembers = await Promise.all(
    TEAM_JSON.map(async (member) => {
      const {
        base64,
        // eslint-disable-next-line unused-imports/no-unused-vars
        img: { width, height, ...img },
      } = await getPlaiceholder(member.image);

      return {
        ...img,
        alt: `${member.name} profile picture`,
        ...member,
        blurDataURL: base64,
      };
    }),
  ).then((values) => values);

  // sort by name
  AllMembers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });

  return {
    props: {
      AllMembers,
    },
  };
};

export default ScholarsPage;

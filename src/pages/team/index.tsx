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
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlineBadge } from 'react-icons/md';
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
  blurDataURL: string;
  moduleImageParams: string;
  education: { degree: string; institution: string }[];
  expertise: string[];
  about: string;
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
      className='align-center mx-auto grid max-w-screen-xl gap-8 px-4 pb-8 pt-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:px-6 lg:pb-16 lg:pt-8'
    >
      {members.map((scholar) => (
        <motion.div
          className='transform items-center justify-between transition-transform hover:translate-y-[0px] hover:scale-105 hover:shadow-2xl'
          key={scholar.id + Math.random()}
          id={scholar.id}
          onClick={() => openModal(scholar.id)}
        >
          {/* {scholar.tag.length > 0 ? (
              <Wrap>
                {scholar.tag.map((tag) => (
                  <WrapItem key={tag}>
                    <Badge
                      className='mb-2'
                      colorScheme={tag === '#OpenToWork' ? 'teal' : 'cyan'}
                      fontSize='0.7em'
                      variant='outline'
                    >
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>
            ) : (
              <div className='mb-2 h-[18px]'></div>
            )} */}
          <div className='relative mx-auto min-h-[350px] w-full sm:min-h-[500px]'>
            <Image
              src={`${scholar.image}${
                scholar.moduleImageParams != '' ? scholar.moduleImageParams : ''
              }`}
              alt={scholar.name + ' image'}
              fill
              placeholder='blur'
              blurDataURL={scholar.blurDataURL}
              className='child h-full w-full rounded-lg object-cover object-center'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className='relative left-[-6px] top-[431px] px-2'>
              <h3 className='relative bg-[radial-gradient(circle_at_40%_0%,rgba(0,0,0,0.8),transparent)] pb-1 pl-4 text-left text-2xl font-extrabold text-white'>
                {scholar.name}
              </h3>

              <Grid
                templateColumns='repeat(10, 1fr)'
                className='relative bg-[radial-gradient(circle_at_40%_0%,rgba(0,0,0,0.8),transparent)] pl-4'
              >
                <GridItem>
                  <IoSchoolSharp size={20} style={{ color: 'white' }} />
                </GridItem>

                <GridItem colSpan={9}>
                  <p className='mb-2 text-left font-semibold text-white'>
                    {scholar.education[0].degree}
                  </p>
                </GridItem>

                {/* <GridItem>
                <RiAwardFill size={20} />
              </GridItem> */}

                {/* <GridItem colSpan={9}>
                <Wrap>
                  {scholar.expertise.map((expertise, index) => (
                    <WrapItem key={index}>
                      <Tag colorScheme='blue' size='sm'>
                        {expertise}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </GridItem> */}
              </Grid>
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

        <main>
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
                  templateColumns='repeat(10, 1fr)'
                  gap={6}
                  className='px-4 py-6'
                >
                  {/* Left Section */}
                  <GridItem colSpan={4}>
                    <VStack spacing={4} align='stretch'>
                      <img
                        src={selectedScholar?.image}
                        alt={selectedScholar?.name}
                        className='h-full w-full rounded-lg object-cover object-center shadow-md'
                      />
                      <Grid templateColumns='repeat(10, 1fr)' rowGap={4}>
                        {'linkedin' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem>
                              <div className='flex items-center'>
                                <UnstyledLink
                                  href={selectedScholar?.social.linkedin || ''}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='ml-2 text-left font-semibold text-blue-600 hover:text-blue-800'
                                >
                                  <FaLinkedin size={22} />
                                </UnstyledLink>
                              </div>
                            </GridItem>
                          </>
                        )}
                        {'resume' in (selectedScholar?.social || {}) && (
                          <>
                            {/* <GridItem></GridItem> */}
                            <GridItem colSpan={1}>
                              <div className='flex items-center'>
                                <UnstyledLink
                                  href={selectedScholar?.social.resume || ''}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='ml-2 text-left font-semibold text-[#F9C801] hover:text-[#d0b442]'
                                >
                                  <RiAwardFill size={22} />
                                </UnstyledLink>
                              </div>
                            </GridItem>
                          </>
                        )}

                        {'twitter' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem colSpan={1}>
                              <div className='flex items-center'>
                                <UnstyledLink
                                  href={selectedScholar?.social.twitter || ''}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='ml-2 text-left font-semibold text-[#26a7de] hover:text-[#1b95d6]'
                                >
                                  <FaTwitter size={22} />
                                </UnstyledLink>
                              </div>
                            </GridItem>
                          </>
                        )}

                        {'instagram' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem colSpan={1}>
                              <div className='flex items-center'>
                                <UnstyledLink
                                  href={selectedScholar?.social.instagram || ''}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='ml-2 text-left font-semibold text-[#e4405f] hover:text-[#ae374d]'
                                >
                                  <FaInstagram size={22} />
                                </UnstyledLink>
                              </div>
                            </GridItem>
                          </>
                        )}

                        {'github' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem colSpan={1}>
                              <div className='flex items-center'>
                                <UnstyledLink
                                  href={selectedScholar?.social.github || ''}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='ml-2 text-left font-semibold text-gray-700 hover:text-gray-900'
                                >
                                  <FaGithub size={22} />
                                </UnstyledLink>
                              </div>
                            </GridItem>
                          </>
                        )}
                        {'website' in (selectedScholar?.social || {}) && (
                          <>
                            {selectedScholar?.social.website?.map(
                              (site, index) => (
                                <GridItem colSpan={1} key={index}>
                                  <div className='flex items-center'>
                                    <UnstyledLink
                                      href={site}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='ml-2 text-left font-semibold text-gray-600 hover:text-gray-900'
                                    >
                                      <FaGlobe size={22} />
                                    </UnstyledLink>
                                  </div>
                                </GridItem>
                              ),
                            )}
                          </>
                        )}
                      </Grid>
                    </VStack>
                  </GridItem>

                  {/* Right Section */}
                  <GridItem colSpan={6}>
                    <VStack align='stretch'>
                      <h2 className='text-4xl font-extrabold text-slate-900'>
                        {selectedScholar?.name}
                      </h2>

                      {/* Education */}
                      <div className='mt-4 flex items-center'>
                        <IoSchoolSharp
                          size={22}
                          className='mr-3 text-slate-700'
                        />
                        <h3 className='text-xl font-bold text-slate-800'>
                          Education
                        </h3>
                      </div>
                      <ul className='mt-2 space-y-1'>
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

                      {/* Expertise */}
                      <div className='mt-6 flex items-center'>
                        <MdOutlineBadge
                          size={22}
                          className='mr-3 text-slate-700'
                        />
                        <h3 className='text-xl font-bold text-slate-800'>
                          Expertise
                        </h3>
                      </div>
                      <div className='mt-2 flex flex-wrap gap-2'>
                        {selectedScholar?.expertise.map((expertise, index) => (
                          <Tag
                            key={index}
                            colorScheme='blue'
                            size='lg'
                            className='rounded-full px-3 py-1 shadow-sm'
                          >
                            {expertise}
                          </Tag>
                        ))}
                      </div>

                      {/* About Me */}
                      <div className='mt-6 flex items-center'>
                        <FaCircleInfo
                          size={22}
                          className='mr-3 text-slate-700'
                        />
                        <h3 className='text-xl font-bold text-slate-800'>
                          About Me
                        </h3>
                      </div>
                      <p className='mt-2 text-lg leading-relaxed text-slate-700'>
                        {selectedScholar?.about}
                      </p>
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

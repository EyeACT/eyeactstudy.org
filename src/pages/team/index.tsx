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
  Wrap,
  WrapItem,
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
  education: { degree: string; institution?: string }[];
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
  openModal: (memberid: string) => void;
}> = ({ members, openModal }) => {
  return (
    <motion.div
      variants={FramerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='align-center mx-auto grid max-w-screen-xl gap-8 px-4 pb-8 pt-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-16 lg:pt-8'
    >
      {members.map((member) => (
        <motion.div
          className='transform items-center justify-between transition-transform hover:scale-105 hover:shadow-2xl'
          key={member.id + Math.random()}
          id={member.id}
          onClick={() => openModal(member.id)}
        >
          <div className='relative mx-auto min-h-[350px] w-full sm:min-h-[400px]'>
            <Image
              src={`${member.image}${
                member.moduleImageParams !== '' ? member.moduleImageParams : ''
              }`}
              alt={member.name + ' image'}
              fill
              placeholder='blur'
              blurDataURL={member.blurDataURL}
              className='h-full w-full rounded-lg object-cover object-center'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            {/* Text overlay */}
            <div className='absolute bottom-0 left-0 w-full rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-4'>
              <h3 className='text-left text-2xl font-extrabold text-white'>
                {member.name}
              </h3>
              {member.education.length > 0 && (
                <div className='mt-2 flex items-center'>
                  <IoSchoolSharp size={20} style={{ color: 'white' }} />
                  <p className='ml-2 text-sm font-semibold text-white'>
                    {member.education[0].degree}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const TeamPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  AllMembers,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTeamMember, setSelectedTeamMember] = useState<Member | null>(
    null,
  );

  const openModal = (memberid: string) => {
    const member = AllMembers.find((member) => member.id === memberid);

    if (!member) {
      return;
    }

    setSelectedTeamMember(member);

    onOpen();
  };

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='About the Team' />

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
                  templateColumns={{ base: '1fr', lg: 'repeat(10, 1fr)' }}
                  gap={10}
                  className='px-4 py-6'
                >
                  {/* Left Section */}
                  <GridItem colSpan={{ base: 1, lg: 4 }}>
                    <VStack spacing={4} align='stretch' className='h-full'>
                      <div className='relative h-full max-h-[40rem] w-full rounded-lg shadow-md sm:min-h-[30rem]'>
                        <Image
                          src={selectedTeamMember?.image || ''}
                          alt={selectedTeamMember?.name + ' image'}
                          fill
                          objectFit='cover'
                          placeholder='blur'
                          blurDataURL={selectedTeamMember?.blurDataURL}
                          className='rounded-lg'
                        />
                      </div>

                      {/* Social Icons */}
                      <Wrap spacing='20px'>
                        {'linkedin' in (selectedTeamMember?.social || {}) && (
                          <WrapItem>
                            <UnstyledLink
                              href={selectedTeamMember?.social.linkedin || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-slate-500 transition-all hover:text-blue-800'
                            >
                              <FaLinkedin size={22} />
                            </UnstyledLink>
                          </WrapItem>
                        )}

                        {'twitter' in (selectedTeamMember?.social || {}) && (
                          <WrapItem>
                            <UnstyledLink
                              href={selectedTeamMember?.social.twitter || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-slate-500 transition-all hover:text-[#1b95d6]'
                            >
                              <FaTwitter size={22} />
                            </UnstyledLink>
                          </WrapItem>
                        )}

                        {'instagram' in (selectedTeamMember?.social || {}) && (
                          <WrapItem>
                            <UnstyledLink
                              href={selectedTeamMember?.social.instagram || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-slate-500 transition-all hover:text-[#ae374d]'
                            >
                              <FaInstagram size={22} />
                            </UnstyledLink>
                          </WrapItem>
                        )}

                        {'github' in (selectedTeamMember?.social || {}) && (
                          <WrapItem>
                            <UnstyledLink
                              href={selectedTeamMember?.social.github || ''}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-slate-500 transition-all hover:text-gray-900'
                            >
                              <FaGithub size={22} />
                            </UnstyledLink>
                          </WrapItem>
                        )}

                        {'website' in (selectedTeamMember?.social || {}) &&
                          selectedTeamMember?.social.website?.map(
                            (site, index) => (
                              <WrapItem key={index}>
                                <UnstyledLink
                                  href={site}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-slate-500 transition-all hover:text-gray-900'
                                >
                                  <FaGlobe size={22} />
                                </UnstyledLink>
                              </WrapItem>
                            ),
                          )}
                      </Wrap>
                    </VStack>
                  </GridItem>

                  {/* Right Section */}
                  <GridItem colSpan={{ base: 1, lg: 6 }}>
                    <VStack align='stretch'>
                      <div className='flex flex-col items-start border-b-2 pb-2 align-middle'>
                        <h2 className='text-center text-2xl font-extrabold text-slate-900 lg:text-3xl'>
                          {selectedTeamMember?.name}{' '}
                          {selectedTeamMember?.pronoun && (
                            <span className='text-lg text-slate-700'>
                              ({selectedTeamMember?.pronoun})
                            </span>
                          )}
                        </h2>

                        {/* Location */}
                        <div className='mt-2 flex flex-wrap items-start gap-5'>
                          <div className='flex items-center text-slate-700'>
                            <IoLocationOutline size={18} />

                            <p className='ml-1'>
                              {selectedTeamMember?.location}
                            </p>
                          </div>

                          <div className='flex items-center text-slate-700'>
                            <FaRegBuilding size={18} />

                            <p className='ml-1'>
                              {selectedTeamMember?.organization}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className='mt-4 flex flex-wrap items-center justify-start gap-2'>
                        <PiUserListBold size={26} />

                        {selectedTeamMember?.roles?.map((role, index) => (
                          <Tag
                            key={index}
                            colorScheme='green'
                            size='md'
                            className='rounded-full px-3 py-1 shadow-sm'
                          >
                            {role}
                          </Tag>
                        ))}
                      </div>

                      {/* Education */}
                      {selectedTeamMember?.education &&
                        selectedTeamMember?.education.length > 0 && (
                          <div className='mt-4'>
                            <h3 className='flex items-center text-xl font-bold text-slate-800'>
                              <IoSchoolSharp size={22} className='mr-3' />
                              Education
                            </h3>

                            <ul className='mt-2 list-inside list-disc'>
                              {selectedTeamMember?.education.map(
                                (edu, index) => (
                                  <li
                                    key={index}
                                    className='text-lg text-slate-700'
                                  >
                                    <span className='text-slate-800'>
                                      {edu.degree}
                                    </span>{' '}
                                    {edu.institution && (
                                      <span className='text-base text-slate-600'>
                                        ({edu.institution})
                                      </span>
                                    )}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                      {/* Expertise */}
                      {selectedTeamMember?.expertise &&
                        selectedTeamMember?.expertise.length > 0 && (
                          <div className='mt-4'>
                            <h3 className='flex items-center text-xl font-bold text-slate-800'>
                              <MdOutlineBadge size={22} className='mr-3' />
                              Expertise
                            </h3>

                            <div className='mt-2'>
                              {selectedTeamMember?.expertise?.map(
                                (expertise, index) => (
                                  <Tag
                                    key={index}
                                    colorScheme='blue'
                                    size='lg'
                                    className='my-1 mr-1 rounded-full px-3 py-1 shadow-sm'
                                  >
                                    {expertise}
                                  </Tag>
                                ),
                              )}
                            </div>
                          </div>
                        )}

                      {/* About Me */}
                      <div className='mt-6'>
                        <h3 className='flex items-center text-xl font-bold text-slate-800'>
                          <FaCircleInfo size={22} className='mr-3' />
                          About Me
                        </h3>

                        <p className='mt-2 text-center text-lg leading-relaxed text-slate-700 lg:text-left'>
                          {selectedTeamMember?.about}
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

export default TeamPage;

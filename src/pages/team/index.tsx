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
import { FaLinkedin } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
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

          <Modal isOpen={isOpen} onClose={onClose} isCentered size='4xl'>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Grid
                  templateColumns='repeat(10, 1fr)'
                  gap={6}
                  className='px-2 py-3'
                >
                  <GridItem colSpan={4}>
                    <VStack spacing={4} align='stretch'>
                      <img
                        src={selectedScholar?.image}
                        alt={selectedScholar?.name}
                        className='h-full w-full rounded-lg object-cover object-center'
                      />

                      <Grid templateColumns='repeat(10, 1fr)' rowGap={3}>
                        {'linkedin' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem>
                              <div className='my-auto flex items-center'>
                                <FaLinkedin size={20} />
                              </div>
                            </GridItem>

                            <GridItem colSpan={9}>
                              <UnstyledLink
                                href={selectedScholar?.social.linkedin || ''}
                                className='ml-2 text-left font-semibold text-slate-600'
                              >
                                LinkedIn Profile
                              </UnstyledLink>
                            </GridItem>
                          </>
                        )}

                        {'resume' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem>
                              <RiAwardFill size={20} />
                            </GridItem>

                            <GridItem colSpan={9}>
                              <UnstyledLink
                                href={selectedScholar?.social.resume || ''}
                                className='ml-2 text-left font-semibold text-slate-600'
                              >
                                Resume
                              </UnstyledLink>
                            </GridItem>
                          </>
                        )}
                      </Grid>
                    </VStack>
                  </GridItem>

                  <GridItem colSpan={6}>
                    <VStack align='stretch'>
                      <h2 className='text-2xl font-bold text-slate-800'>
                        {selectedScholar?.name}
                      </h2>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        Education
                      </h3>

                      <ul>
                        {selectedScholar?.education.map((edu, index) => (
                          <li key={index} className='text-base font-normal'>
                            {edu.degree}{' '}
                            {edu.institution && <>({edu.institution})</>}
                          </li>
                        ))}
                      </ul>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        Expertise
                      </h3>

                      <p>
                        {selectedScholar?.expertise.map((expertise, index) => (
                          <Tag
                            key={index}
                            colorScheme='blue'
                            size='sm'
                            className='mr-2'
                          >
                            {expertise}
                          </Tag>
                        ))}
                      </p>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        About Me
                      </h3>

                      <p className='text-base font-normal text-slate-600'>
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

import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import publicationsData from '@/assets/data/publications.json';

// Sort publicationsData alphabetically by category and most recent year to oldest
publicationsData.publications.sort((a, b) => {
  if (a.category < b.category) {
    return -1;
  }
  if (a.category > b.category) {
    return 1;
  }
  if (a.year < b.year) {
    return 1;
  }
  if (a.year > b.year) {
    return -1;
  }
  return 0;
});

const publicationCategories = Array.from(
  new Set(publicationsData.publications.map((pub) => pub.category)),
).sort();

/**
 * Helper component that converts markdown into HTML using your custom renderer.
 * Also helps prevent XSS attacks by sanitizing the HTML output
 */
const MarkdownContent: React.FC<{
  markdown: string;
  card?: boolean;
  highlight?: string;
}> = ({ markdown, card = false, highlight = '' }) => {
  const [html, setHtml] = useState('');
  useEffect(() => {
    // sourcery skip: avoid-function-declarations-in-blocks
    async function processMarkdown() {
      const result = await markdownToHtml(markdown, card, highlight);
      setHtml(result);
    }
    processMarkdown();
  }, [markdown, card, highlight]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const PublicationsPage: React.FC = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Multi-select filter state for categories and years
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  // Toggle category selection
  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      // Remove the category from the selected list
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      // Add the category to the selected list
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  // Toggle year selection
  const toggleYear = (year: number) => {
    if (selectedYears.includes(year)) {
      // Remove the year from the selected list
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      // Add the year to the selected list
      setSelectedYears([...selectedYears, year]);
    }
  };

  // Compute available years from the JSON data (sorted descending)
  const availableYears = useMemo(() => {
    const yearsSet = new Set<number>();
    publicationsData.publications.forEach((pub) => {
      if (pub.year) {
        yearsSet.add(pub.year);
      }
    });
    return Array.from(yearsSet).sort((a, b) => b - a);
  }, []);

  // Filter publications based on search term, selected categories, and years
  const filteredPublications = useMemo(() => {
    return publicationsData.publications.filter((pub) => {
      const matchesSearch = pub.content
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(pub.category);
      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(pub.year);
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchTerm, selectedCategories, selectedYears]);

  // Group the filtered publications by category
  const groupedPublications = useMemo(() => {
    return filteredPublications.reduce(
      (acc, pub) => {
        if (!acc[pub.category]) {
          acc[pub.category] = [];
        }
        acc[pub.category].push(pub);
        return acc;
      },
      {} as Record<string, typeof publicationsData.publications>,
    );
  }, [filteredPublications]);

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Layout>
        <Seo templateTitle='Publications' />
        <main className='bg-gradient-to-t from-sky-100 to-white'>
          <div className='bg relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-5 py-5 sm:px-10 sm:pb-20'>
            <SkipNavContent />
            <div className='mb-4 mt-8 text-start'>
              <h1 className='text-5xl font-bold'>Publications</h1>
              <p className='text-lg'>
                We provide below a list of publications and other outcomes from
                the Eye ACT project. You can also find our publications on
                PubMed{' '}
                <Link
                  href='https://pubmed.ncbi.nlm.nih.gov/?term=%22Eye+ACT%22+or+%22Eye+Adult+Changes+in+Thought%22+OR+R01AG060942&size=200'
                  passHref
                  target='_blank'
                  className='text-sky-500 transition-all hover:text-sky-700'
                >
                  <span>here</span>
                </Link>
                .
              </p>
            </div>

            {/* Filtering & Search UI */}
            <div className='mt-4'>
              <Flex justify='space-between' align='center' className='mb-4'>
                <Input
                  placeholder='Search publications...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size='md'
                  className='mr-4'
                />
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button}>
                    <div className='flex items-center'>
                      <span className='pr-2'>Filters</span>
                      <Icon
                        icon='fluent:filter-12-filled'
                        style={{ fontSize: '25px' }}
                      />{' '}
                    </div>
                  </MenuButton>
                  <MenuList minWidth='300px'>
                    {/* Categories Multi-select */}
                    <MenuGroup title='Categories'>
                      {publicationCategories.map((cat) => (
                        <MenuItem
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          icon={
                            selectedCategories.includes(cat) ? (
                              <CheckIcon boxSize={4} />
                            ) : undefined
                          }
                        >
                          {cat}
                        </MenuItem>
                      ))}
                    </MenuGroup>
                    {/* Year Submenu */}
                    <MenuGroup title='Year'>
                      <MenuItem as={Box} closeOnSelect={false}>
                        {/* Nested Menu for Year */}
                        <Menu closeOnSelect={false}>
                          <MenuButton
                            as={Button}
                            className='!pl-2 !text-base !font-normal'
                            variant='ghost'
                            width='100%'
                            textAlign='left'
                          >
                            Select
                          </MenuButton>
                          <MenuList>
                            {availableYears.map((year) => (
                              <MenuItem
                                key={year}
                                onClick={() => toggleYear(year)}
                                icon={
                                  selectedYears.includes(year) ? (
                                    <CheckIcon boxSize={4} />
                                  ) : undefined
                                }
                              >
                                {year}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Flex>
              {/* Active Filter Tags */}
              <Flex wrap='wrap' gap={2} mb={4}>
                {selectedCategories.map((cat) => (
                  <Tag
                    key={cat}
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='blue'
                  >
                    <TagLabel>{cat}</TagLabel>
                    <TagCloseButton onClick={() => toggleCategory(cat)} />
                  </Tag>
                ))}
                {selectedYears.map((year) => (
                  <Tag
                    key={year}
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='blue'
                  >
                    <TagLabel>{year}</TagLabel>
                    <TagCloseButton onClick={() => toggleYear(year)} />
                  </Tag>
                ))}
              </Flex>
            </div>

            {/* Render the publications */}
            <div className='prose prose-slate !mt-0 max-w-none !pt-0 lg:prose-base'>
              {Object.keys(groupedPublications).map((category) => (
                <div
                  key={category}
                  className='mb-6 rounded-lg border-[1px] border-gray-200 bg-white px-6 pb-4 pt-1 shadow-lg'
                >
                  <h2 className='!mt-6 border-b-2 !pb-3 !pt-0'>{category}</h2>
                  <ul>
                    {groupedPublications[category].map((pub) => (
                      <li key={pub.id} className='mb-2'>
                        <MarkdownContent
                          markdown={pub.content}
                          card={false}
                          highlight={searchTerm}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PublicationsPage;

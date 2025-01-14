import { Stack, StackDivider } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useEffect, useRef, useState } from 'react';

const StatsList = [
  {
    heading: 1000,
    text: 'Participants in the study',
  },
  {
    heading: 4000,
    text: 'Patient visits',
  },
  {
    heading: 300,
    text: `Data collected`,
  },
];

export default function StatsText() {
  // Create refs for each countUp animation
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Clean up observer
  }, []);

  useEffect(() => {
    if (visibleIndexes.length > 0) {
      initCountUps(visibleIndexes);
    }
  }, [visibleIndexes]);

  async function initCountUps(indexes: number[]) {
    const countUpModule = await import('countup.js');
    indexes.forEach((index) => {
      const ref = refs.current[index];
      if (ref) {
        const countUpAnim = new countUpModule.CountUp(
          ref,
          StatsList[index].heading,
          {
            duration: 2,
            separator: ',',
          },
        );
        if (!countUpAnim.error) {
          countUpAnim.start();
        } else {
          console.error(countUpAnim.error);
        }
      }
    });
  }

  return (
    <section className='pt-4'>
      <div className='px-8'>
        <div className='border[1px] m-2 mx-auto max-w-screen-xl rounded-lg border-gray-200 bg-[url(/images/polygon-card-v2.svg)] p-8 text-center shadow-lg'>
          <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            Snapshot of the Eye ACT project
          </h1>

          <p className='mb-12 text-xl font-medium text-slate-600'>
            Some key numbers from the project
          </p>

          <div className='flex justify-center'>
            <Stack
              direction={['column', 'column', 'column', 'row']}
              spacing='70px'
              divider={<StackDivider borderColor='gray.200' />}
            >
              {StatsList.map((stat, index) => (
                <div
                  key={stat.heading}
                  className='flex flex-col items-center justify-start space-y-3 p-3 text-center'
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                >
                  <div className='flex items-center justify-center space-x-1'>
                    <dt
                      className='text-5xl font-bold text-sky-500'
                      style={{
                        minWidth: '120px',
                        textAlign: 'center',
                      }}
                    >
                      0
                    </dt>
                    {stat.heading > 500 && (
                      <span className='text-5xl font-bold text-sky-500'>+</span>
                    )}
                  </div>

                  <dd className='text-lg font-medium text-gray-700'>
                    {parse(stat.text)}
                  </dd>
                </div>
              ))}
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
}

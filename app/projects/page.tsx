"use client";
import { useState, useMemo, useCallback } from 'react';
import { Box, Title } from '@mantine/core';

const projectData = [
  {
    title: 'RemoteAxle',
    description: 'A cutting-edge platform utilizing React and Node.js for real-time data visualization.',
    link: '#',
  },
  {
    title: 'Everest Educators',
    description: 'An e-commerce solution built with Next.js and Stripe integration for seamless checkout.',
    link: '#',
  },
  {
    title: 'Remotely Learn',
    description: 'A mobile-first application focused on social networking and community building.',
    link: '#',
  },
  {
    title: 'Project Delta',
    description: 'An AI-powered recommendation engine developed with Python and a custom ML model.',
    link: '#',
  },
  {
    title: 'Project Epsilon',
    description: 'A portfolio site generator that offers customizable themes and rapid deployment.',
    link: '#',
  },
  {
    title: 'Project Zeta',
    description: 'A cloud-based infrastructure manager using AWS CDK and TypeScript.',
    link: '#',
  },
  {
    title: 'Project Eta',
    description: 'A lightweight task management tool with offline capabilities.',
    link: '#',
  },
];

const ChevronLeft = (props:any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRight = (props:any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const ExternalLink = (props:any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <path d="M15 3h6v6"/>
        <path d="M10 14 21 3"/>
    </svg>
);

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getProjectIndex = (offset:any) => {
    const totalProjects = projectData.length;
    return (
      ((activeIndex + offset) % totalProjects) +
      (activeIndex + offset < 0 ? totalProjects : 0)
    );
  };

  const offsets = [-3, -2, -1, 0, 1, 2, 3];

const carouselItems = useMemo(() => {
    return offsets.map((offset) => {
      const projectIndex = getProjectIndex(offset);
      const project = projectData[projectIndex];
      let classes = '';
      const baseClasses =
        'absolute transition-all duration-500 ease-in-out bg-white border-2 rounded-xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-gray-400';

      switch (offset) {
        case 0:
          classes =
            'w-[350px] h-[450px] opacity-100 scale-[1.05] z-30 shadow-2xl border-blue-500';
          break;
        case -1:
        case 1:
          classes =
            'w-[350px] h-[550px] opacity-100 scale-[1.0] z-20 border-gray-200';
          break;
        case -2:
        case 2:
          classes =
            'w-[350px] h-[650px] opacity-50 z-10 border-gray-200';
          break;
        case -3:
        case 3:
          classes =
            'w-[350px] h-[650px] opacity-0 blur-lg z-0 pointer-events-none border-gray-200';
          break;
        default:
          classes = 'hidden border-gray-200';
      }

      const transformX = `${offset * 380}px`;

      return {
        ...project,
        key: `project-${projectIndex}`,
        style: { transform: `translateX(${transformX})` },
        // The base class is now composed of shared styles, and the specific border is in 'classes'
        className: `${baseClasses.replace('border-2 border-gray-200', 'border-2')} ${classes}`,
      };
    });
  }, [activeIndex]);

  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? projectData.length - 1 : newIndex;
    });
  }, []);

  return (
    <Box className="flex flex-col gap-6 py-6">
      <Box className="flex justify-center">
        <Title unstyled className="text-6xl md:text-[72px] font-extrabold text-gray-800">
          Projects
        </Title>
      </Box>

      <Box className="relative w-full h-[650px] flex justify-center items-center overflow-hidden">
        <Box className="relative w-full max-w-7xl h-full flex justify-center items-center">
          {carouselItems.map((item) => (
            <Box
              key={item.key}
              style={item.style}
              className={item.className}
              onClick={() => {
                if (item.key === carouselItems[2].key) { 
                    goToPrev();
                } else if (item.key === carouselItems[4].key) { 
                    goToNext();
                }
              }}
            >
              <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 pt-2">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 mt-4"
                onClick={(e) => e.stopPropagation()}
              >
                View Project <ExternalLink size={16} className="w-4 h-4" />
              </a>
            </Box>
          ))}
        </Box>

        <button
          onClick={goToPrev}
          className="absolute left-4 md:left-10 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-10 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next Project"
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </button>
      </Box>
    </Box>
  );
}
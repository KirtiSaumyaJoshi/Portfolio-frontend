"use client";
import { IconChevronLeft, IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import React, { useState, useCallback, useRef } from 'react';

const projectData = [
  {
    title: 'RemoteAxle',
    description: 'An e-learning platform designed to facilitate self-paced online education. The website features a user-friendly interface for browsing courses, tracking student progress through personalized dashboards, and issuing digital certificates upon completion. It supports various learning formats including video lessons, quizzes, and workshops.',
    link: 'https://remoteaxle.com/',
  },
  {
    title: 'Everest Educators',
    description: 'A professional educational website for a tutoring and enrichment center focused on children. The platform showcases services such as coding classes and subject-specific tutoring. It includes features for parent engagement, such as success stories, reviews, and a direct appointment booking system to streamline enrollment.',
    link: 'https://everesteduacademy.ca/',
  },
  {
    title: 'Remotely Learn',
    description: 'An educational platform and coding bootcamp designed to guide students in becoming software engineers. The website emphasizes a practical curriculum with project-based learning and live online classes. It includes features for prospective students to browse and apply for bootcamps, as well as a recruitment portal for companies to hire graduates.',
    link: 'https://remotelylearn.com/',
  },
  {
    title: 'JobAxle',
    description: 'A specialized job portal tailored for the IT, engineering, and management sectors. The platform connects job seekers with employers through advanced search functionality, allowing users to filter by job title, type, and level. It features a robust listing system for "Premium Jobs" and provides tools for employers to post and manage job openings.',
    link: 'https://jobaxle.com/',
  },
  {
    title: 'eBooking Nepal',
    description: 'A comprehensive travel and accommodation booking engine focused on the Nepalese tourism market. The platform allows users to search, compare, and reserve various accommodations (hotels, resorts, homestays) and vehicle rentals. It features a dynamic search interface with filters for dates, guests, and property types to simplify travel planning.',
    link: 'https://ebookingnepal.com/',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);
  const swipeThreshold = 50;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    touchStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const touchEndX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > swipeThreshold) {
      goToNext();
    } else if (distance < -swipeThreshold) {
      goToPrev();
    }
    touchStartX.current = 0;
  };

  const getOffset = (index: number) => {
    const total = projectData.length;
    let offset = (index - activeIndex) % total;
    if (offset < 0) offset += total;
    if (offset > total / 2) {
      offset -= total;
    }
    return offset;
  };

  return (
    <div className="flex flex-col gap-6 py-6 w-full overflow-hidden h-screen">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 tracking-tight">
          My Projects
        </h1>
      </div>

      <div
        className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {projectData.map((project, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);

            const isVisible = absOffset <= 2;

            const isActive = offset === 0;
            const heightClass = isActive ? 'h-[380px] md:h-[450px]' : 'h-[350px] md:h-[400px]';

            const translateX = `translateX(${offset * (absOffset === 1 ? 80 : 160)}%)`;
            

            const scale = isActive ? 'scale-100' : (absOffset === 1 ? 'scale-90' : 'scale-75');
            

            const opacity = isActive ? 1 : (absOffset === 1 ? 0.7 : 0);
            

            const zIndex = 50 - absOffset * 10;
            
            const blur = isActive ? 'blur-0' : (absOffset === 1 ? 'blur-[1px]' : 'blur-md');

            const handleClick = (e: React.MouseEvent) => {
              if (isActive) return;
              e.stopPropagation();
              if (offset > 0) goToNext();
              else goToPrev();
            };

            return (
              <div
                key={`project-${index}`}
                onClick={handleClick}
                className={`
                  absolute top-1/2 left-1/2
                  w-[280px] md:w-[350px]
                  ${heightClass}
                  bg-white rounded-2xl p-6 flex flex-col justify-between 
                  shadow-2xl border
                  transition-all duration-500 ease-out
                  ${scale} ${blur}
                  ${!isVisible ? 'pointer-events-none' : 'cursor-pointer'}
                  ${isActive ? 'border-blue-500 border-2' : 'border-gray-200 border-2'}
                `}
                style={{
                    transform: `translate(-50%, -50%) ${translateX}`,
                    opacity: opacity,
                    zIndex: zIndex,
                    visibility: opacity === 0 ? 'hidden' : 'visible',
                }}
              >
                <div>
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'} line-clamp-2`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 pt-4 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    font-semibold flex items-center gap-2 mt-4 transition-all duration-300
                    ${isActive ? 'text-blue-600 hover:text-blue-800 translate-y-0' : 'text-transparent translate-y-4'}
                  `}
                  onClick={(e) => {
                      if (!isActive) e.preventDefault();
                      e.stopPropagation();
                  }}
                  tabIndex={isActive ? 0 : -1}
                >
                      <>
                        View Project <IconExternalLink size={18} />
                      </>
                </a>
              </div>
            );
          })}
          
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          className="absolute hidden md:flex items-center justify-center left-4 md:left-12 z-60 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:scale-110 transition-all border border-gray-100 group text-gray-700 hover:text-blue-600"
          aria-label="Previous Project"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute hidden md:flex items-center justify-center right-4 md:right-12 z-60 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:scale-110 transition-all border border-gray-100 group text-gray-700 hover:text-blue-600"
          aria-label="Next Project"
        >
          <IconChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { Experience, Education, TimelineItem } from '@/types';
import { ExperienceCard } from '@/components/ExperienceCard';
import { EducationCard } from '@/components/EducationCard';

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  // Sort items by start date (descending)
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

      {sortedItems.map((item, index) => (
        <div key={item.id} className="mb-8 relative pl-8 md:pl-16"> {/* Content starts after line/dot */}
          {/* Dot */}
          <div className="absolute left-4 md:left-8 top-2 -ml-2 w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground z-10"></div> {/* -ml-2 to center dot on line */}

          <div className="relative"> {/* Wrapper for card */}
            {'company' in item ? (
              <ExperienceCard experience={item} />
            ) : (
              <EducationCard education={item} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

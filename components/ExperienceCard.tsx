import React from 'react';
import { Experience } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="w-full max-w-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {experience.company} &bull; {experience.location} &bull; {experience.startDate} - {experience.endDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-0.5 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import React from 'react';
import { Education } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="w-full max-w-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{education.degree}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {education.institution} &bull; {education.location} &bull; {education.startDate} - {education.endDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {education.gpa && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">GPA: {education.gpa}</p>
        )}
        {education.description && education.description.length > 0 && (
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {education.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

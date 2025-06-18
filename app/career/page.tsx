import { Metadata } from 'next';
import { Timeline } from '@/components/ui/timeline';
import { Experience, Education, TimelineItem } from '@/types';

export const metadata: Metadata = {
  title: 'Career - Your Name',
  description: 'Explore my professional experience and educational background.',
};

// Mock Data
const mockExperiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Led the development of scalable backend services using Node.js and TypeScript, improving system performance by 30%.',
      'Mentored junior engineers and conducted code reviews, fostering a culture of high-quality code and best practices.',
      'Collaborated with product teams to define requirements and deliver features on time within an Agile environment.',
    ],
    technologies: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: 'exp2',
    title: 'Software Engineer',
    company: 'Innovate Corp.',
    location: 'New York, NY',
    startDate: 'Jul 2019',
    endDate: 'Dec 2021',
    description: [
      'Developed and maintained front-end applications using React and Redux, enhancing user experience and responsiveness.',
      'Implemented RESTful APIs and integrated third-party services.',
      'Contributed to CI/CD pipeline improvements, reducing deployment time by 15%.',
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'Python', 'Django', 'MongoDB', 'Git'],
  },
];

const mockEducations: Education[] = [
  {
    id: 'edu1',
    degree: 'Master of Science in Computer Science',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    startDate: 'Sep 2017',
    endDate: 'May 2019',
    gpa: '3.9/4.0',
    description: [
      'Specialized in Distributed Systems and Machine Learning.',
      'Thesis: "Optimizing Data Consistency in Distributed Databases".',
    ],
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Seoul National University',
    location: 'Seoul, South Korea',
    startDate: 'Mar 2013',
    endDate: 'Feb 2017',
    gpa: '4.3/4.5',
    description: [
      'Graduated Summa Cum Laude.',
      'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems.',
    ],
  },
];

const allTimelineItems: TimelineItem[] = [...mockExperiences, ...mockEducations];

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight sm:text-5xl lg:text-6xl">
        Career & Education
      </h1>

      <section className="max-w-4xl mx-auto">
        <Timeline items={allTimelineItems} />
      </section>
    </div>
  );
}

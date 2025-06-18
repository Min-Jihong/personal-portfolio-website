export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string; // "Present" or date
  description: string[]; // Array of bullet points
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string[]; // e.g., relevant coursework, honors
}

export type TimelineItem = Experience | Education;

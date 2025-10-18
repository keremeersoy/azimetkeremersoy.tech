import CustomizedLink from '@/components/customized-link';
import TypingAnimation from '@/components/magicui/typing-animation';
import ProjectCard from '@/components/project-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons, projects_data } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';
import defaultMetadata from '../metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projects',
  description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Projects | Azimet Kerem Ersoy',
    description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Projects | Azimet Kerem Ersoy',
    description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <TypingAnimation className="text-2xl font-bold text-black dark:text-white mb-4" text="Projects" />
      <div className="flex flex-col gap-4">
        {projects_data.map((project, index) => (
          <ProjectCard key={`project_${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

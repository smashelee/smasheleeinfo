import React from 'react';

export interface Project {
  id: number;
  title: string;
  version: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
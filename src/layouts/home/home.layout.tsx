import React from 'react';
import { Navbar } from '@/components/common';
import { HeroSection } from './sections/hero-section';

export const HomeLayout = () => (
  <>
    <Navbar />
    <HeroSection />
    <section className="h-screen bg-blue-300" />
    <section className="h-screen bg-red-300" />
  </>
);

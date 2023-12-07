import { Footer, Navbar } from '@/components/common';
import {
  BoostSection, HeroSection, LinkSection, StaticSection,
} from './sections';

export const HomeLayout = () => (
  <>
    <Navbar />
    <HeroSection />
    <LinkSection />
    <StaticSection />
    <BoostSection />
    <Footer />
  </>
);

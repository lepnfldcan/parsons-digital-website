import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import MobileHero from '@/components/sections/MobileHero';
import Services from '@/components/sections/Services';
import WhyMe from '@/components/sections/WhyMe';
import HowItWorks from '@/components/sections/HowItWorks';
import CaseStudy from '@/components/sections/CaseStudy';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Parsons Digital — Web Design for Small Business',
  description:
    'I build clean, fast websites for local businesses — from a single landing page to a fully custom build with booking, payments, or a chatbot.',
};

function Divider() {
  return <div className="w-full max-w-[1200px] mx-auto h-px bg-[rgba(244,243,240,0.08)]" />;
}

export default function Home() {
  return (
    <main className="bg-[#1e2530]">
      <div className="md:hidden">
        <MobileHero />
      </div>
      <Hero />
      <Services />
      <Divider />
      <WhyMe />
      <Divider />
      <HowItWorks />
      <Divider />
      <CaseStudy />
      <Divider />
      <Contact />
    </main>
  );
}

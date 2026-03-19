import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { ProblemSection } from '../components/ProblemSection';
import { ServicesSection } from '../components/ServicesSection';
import { AudienceSection } from '../components/AudienceSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { ContentSection } from '../components/ContentSection';
import { AboutSection } from '../components/AboutSection';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSection />
      <ServicesSection />
      <AudienceSection />
      <DifferentialsSection />
      <ProjectsSection />
      <ProcessSection />
      <TechnologiesSection />
      <ContentSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </>
  );
}

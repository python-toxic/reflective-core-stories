
import HeroSection from '@/components/landing/HeroSection';
import PromiseSection from '@/components/landing/PromiseSection';
import ExperienceSection from '@/components/landing/ExperienceSection';
import AISection from '@/components/landing/AISection';
import InvitationSection from '@/components/landing/InvitationSection';

const Index = () => {
  return (
    <div className="bg-brand-beige">
      <main className="scroll-container">
        <HeroSection />
        <PromiseSection />
        <ExperienceSection />
        <AISection />
        <InvitationSection />
      </main>
    </div>
  );
};

export default Index;

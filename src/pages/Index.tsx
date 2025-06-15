
import HeroSection from '@/components/landing/HeroSection';
import PromiseSection from '@/components/landing/PromiseSection';
import ExperienceSection from '@/components/landing/ExperienceSection';
import AISection from '@/components/landing/AISection';
import InvitationSection from '@/components/landing/InvitationSection';
import Navbar from '@/components/layout/Navbar';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const { ref: invitationSectionRef, inView: isInvitationInView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className="bg-brand-beige relative">
      <Navbar onDarkSection={isInvitationInView} />
      <main className="scroll-container">
        <HeroSection />
        <PromiseSection />
        <ExperienceSection />
        <AISection />
        <InvitationSection ref={invitationSectionRef} inView={isInvitationInView} />
      </main>
    </div>
  );
};

export default Index;

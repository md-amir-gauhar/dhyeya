import { Hero } from '@/components/sections/Hero';
import { BrandReveal } from '@/components/sections/BrandReveal';
import { MorningStory } from '@/components/sections/MorningStory';
import { SacrificeStory } from '@/components/sections/SacrificeStory';
import { LonelinessStory } from '@/components/sections/LonelinessStory';
import { DoubtStory } from '@/components/sections/DoubtStory';
import { WhyStory } from '@/components/sections/WhyStory';
import { PurposeStory } from '@/components/sections/PurposeStory';
import { ProblemStory } from '@/components/sections/ProblemStory';
import { DhyeyaReveal } from '@/components/sections/DhyeyaReveal';
import { TutorSection } from '@/components/sections/TutorSection';
import { PersonalizationSection } from '@/components/sections/PersonalizationSection';
import { LearnSection } from '@/components/sections/LearnSection';
import { PracticeSection } from '@/components/sections/PracticeSection';
import { AnalysisSection } from '@/components/sections/AnalysisSection';
import { RevisionSection } from '@/components/sections/RevisionSection';
import { PlanningSection } from '@/components/sections/PlanningSection';
import { VoiceSection } from '@/components/sections/VoiceSection';
import { VisualLearningSection } from '@/components/sections/VisualLearningSection';
import { FamilyStory } from '@/components/sections/FamilyStory';
import { TimeStory } from '@/components/sections/TimeStory';
import { ResultStory } from '@/components/sections/ResultStory';
import { ResponsibilityStory } from '@/components/sections/ResponsibilityStory';
import { DhyeyaPromise } from '@/components/sections/DhyeyaPromise';
import { FeatureSummary } from '@/components/sections/FeatureSummary';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      {/* Act I — the aspirant */}
      <Hero />
      <BrandReveal />
      <MorningStory />
      <SacrificeStory />
      <LonelinessStory />
      <DoubtStory />
      <WhyStory />
      <PurposeStory />

      {/* Act II — the companion */}
      <ProblemStory />
      <DhyeyaReveal />
      <TutorSection />
      <PersonalizationSection />
      <LearnSection />
      <PracticeSection />
      <AnalysisSection />
      <RevisionSection />
      <PlanningSection />
      <VoiceSection />
      <VisualLearningSection />

      {/* Act III — the destination */}
      <FamilyStory />
      <TimeStory />
      <ResultStory />
      <ResponsibilityStory />
      <DhyeyaPromise />
      <FeatureSummary />
      <FinalCta />
      <Footer />
    </main>
  );
}

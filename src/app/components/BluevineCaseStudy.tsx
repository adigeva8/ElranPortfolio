import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBluevineContent from '@/imports/CaseStudyBluevineContent';

interface BluevineCaseStudyProps {
  onNavigateHome: () => void;
  onNextStudy: () => void;
}

export function BluevineCaseStudy({ onNavigateHome, onNextStudy }: BluevineCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStudyBluevineContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}

import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBitContent from '@/imports/CaseStudyBitContent';

interface BitCaseStudyProps {
  onNavigateHome: () => void;
  onNextStudy: () => void;
}

export function BitCaseStudy({ onNavigateHome, onNextStudy }: BitCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStudyBitContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}

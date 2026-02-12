import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyMondayContent from '@/imports/CaseStudyMondayContent';

interface MondayCaseStudyProps {
  onNavigateHome: () => void;
  onNextStudy: () => void;
}

export function MondayCaseStudy({ onNavigateHome, onNextStudy }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStudyMondayContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}

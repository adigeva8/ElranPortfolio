import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyXreamioContent from '@/imports/CaseStudyXreamioContent';

interface XtreamIOCaseStudyProps {
  onNavigateHome: () => void;
  onNextStudy: () => void;
}

export function XtreamIOCaseStudy({ onNavigateHome, onNextStudy }: XtreamIOCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStudyXreamioContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}

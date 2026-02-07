import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStutyXreamioContent from '@/imports/CaseStutyXreamioContent';

interface XtreamIOCaseStudyProps {
  onNavigateHome: () => void;
}

export function XtreamIOCaseStudy({ onNavigateHome }: XtreamIOCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStutyXreamioContent />
    </CaseStudyLayout>
  );
}

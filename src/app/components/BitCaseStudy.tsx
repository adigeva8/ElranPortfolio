import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStutyBitContent from '@/imports/CaseStutyBitContent';

interface BitCaseStudyProps {
  onNavigateHome: () => void;
}

export function BitCaseStudy({ onNavigateHome }: BitCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStutyBitContent />
    </CaseStudyLayout>
  );
}

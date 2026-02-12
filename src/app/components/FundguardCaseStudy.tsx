import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardContent from '@/imports/CaseStudyFundguardContent';

interface FundguardCaseStudyProps {
  onNavigateHome: () => void;
  onNextStudy: () => void;
}

export function FundguardCaseStudy({ onNavigateHome, onNextStudy }: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStudyFundguardContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}

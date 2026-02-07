import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStutyFundguardContent from '@/imports/CaseStutyFundguardContent';

interface FundguardCaseStudyProps {
  onNavigateHome: () => void;
}

export function FundguardCaseStudy({ onNavigateHome }: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStutyFundguardContent />
    </CaseStudyLayout>
  );
}

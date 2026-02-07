import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStutyBluevineConent from '@/imports/CaseStutyBluevineConent';

interface BluevineCaseStudyProps {
  onNavigateHome: () => void;
}

export function BluevineCaseStudy({ onNavigateHome }: BluevineCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStutyBluevineConent />
    </CaseStudyLayout>
  );
}

import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStutyMondayConent from '@/imports/CaseStutyMondayConent';

interface MondayCaseStudyProps {
  onNavigateHome: () => void;
}

export function MondayCaseStudy({ onNavigateHome }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout onNavigateHome={onNavigateHome}>
      <CaseStutyMondayConent />
    </CaseStudyLayout>
  );
}

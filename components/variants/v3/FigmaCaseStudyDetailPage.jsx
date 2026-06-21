"use client";

import FigmaFooter from "./FigmaFooter";
import {
  CaseStudyDetailBody,
  CaseStudyDetailHero,
  RelatedCaseStudiesSection,
} from "./FigmaCaseStudySections";
import SiteHeader from "./SiteHeader";
import { caseStudiesCertificationBadges } from "./caseStudiesContent";
import { asset } from "./figmaContent";

export default function FigmaCaseStudyDetailPage({ study, relatedStudies }) {
  return (
    <div className="figma-site figma-case-study-detail-page">
      <SiteHeader />
      <CaseStudyDetailHero study={study} />
      <CaseStudyDetailBody study={study} />
      <RelatedCaseStudiesSection relatedStudies={relatedStudies} />
      <FigmaFooter
        asset={asset}
        certificationBadges={caseStudiesCertificationBadges}
        showDescription={false}
      />
    </div>
  );
}

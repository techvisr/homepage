"use client";

import FigmaFooter from "./FigmaFooter";
import {
  BusinessMetricsSection,
  CaseStudiesFinalCta,
  CaseStudiesHeroSection,
  FeaturedCaseStudiesSection,
  useCaseReveal,
} from "./FigmaCaseStudySections";
import SiteHeader from "./SiteHeader";
import {
  caseStudies,
  caseStudiesCertificationBadges,
  caseStudiesHeroVideo,
  caseStudyMetrics,
} from "./caseStudiesContent";
import { asset } from "./figmaContent";

export default function FigmaCaseStudiesPage() {
  useCaseReveal();

  return (
    <div className="figma-site figma-case-studies-page">
      <SiteHeader />

      <main className="!bg-white">
        <CaseStudiesHeroSection heroVideo={caseStudiesHeroVideo} />
        <BusinessMetricsSection metrics={caseStudyMetrics} />
        <FeaturedCaseStudiesSection studies={caseStudies} />
        <CaseStudiesFinalCta heroVideo={caseStudiesHeroVideo} />
      </main>

      <FigmaFooter
        asset={asset}
        certificationBadges={caseStudiesCertificationBadges}
        showDescription={false}
      />
    </div>
  );
}

import { notFound } from "next/navigation";
import "../../v3/v3.css";
import FigmaCaseStudyDetailPage from "../../../components/variants/v3/FigmaCaseStudyDetailPage";
import {
  caseStudies,
  getCaseStudy,
  getRelatedCaseStudies,
} from "../../../components/variants/v3/caseStudiesContent";
import { asset } from "../../../components/variants/v3/figmaContent";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: study.href,
    },
    openGraph: {
      title: `${study.title} | Techvisr`,
      description: study.summary,
      url: study.href,
      type: "article",
      images: [
        {
          url: asset(study.image),
          alt: study.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Techvisr`,
      description: study.summary,
      images: [asset(study.image)],
    },
  };
}

export default async function CaseStudyDetailRoute({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(study);
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    image: `https://techvisr.com${asset(study.image)}`,
    author: {
      "@type": "Organization",
      name: "Techvisr",
    },
    publisher: {
      "@type": "Organization",
      name: "Techvisr",
      logo: {
        "@type": "ImageObject",
        url: "https://techvisr.com/images/logo.png",
      },
    },
    mainEntityOfPage: `https://techvisr.com${study.href}`,
  };

  return (
    <>
      <FigmaCaseStudyDetailPage study={study} relatedStudies={relatedStudies} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
    </>
  );
}

import { notFound } from "next/navigation";
import "../../v3/v3.css";
import FigmaBlogArticlePage from "../../../components/variants/v3/FigmaBlogArticlePage";
import { blogPosts, getBlogPost, getRelatedPosts } from "../../../components/variants/v3/blogContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Techvisr`,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.published,
      section: post.category,
      tags: post.tags,
      authors: ["Techvisr"],
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Techvisr`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticleRoute({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.published,
    dateModified: post.published,
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
    mainEntityOfPage: `https://techvisr.com/blogs/${post.slug}`,
  };

  return (
    <>
      <FigmaBlogArticlePage post={post} relatedPosts={relatedPosts} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}

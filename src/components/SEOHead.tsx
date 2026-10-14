import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = `${title} | Thenam Software Solutions`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Thenam Software Solutions`);
    }

    // Update OG description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const fullCanonical = canonical || `https://www.thenamsoftwaresolutions.com${location.pathname}`;
    if (canonicalTag) {
      canonicalTag.setAttribute('href', fullCanonical);
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonical, location.pathname]);

  return null;
};

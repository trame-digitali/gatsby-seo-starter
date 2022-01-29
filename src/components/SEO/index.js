import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';

const SEO = ({
  title,
  description,
  keywords,
  image,
  lang,
  titleTemplate,
  author,
  article,
  meta,
  location,
}) => {
  // non funziona con l'Hook use location
  // const { pathname } = useLocation();
  const { pathname } = location;
  const { site } = useStaticQuery(querySeo);

  const {
    defaultLang,
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    siteUrl,
    defaultKeywords,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    titleTemplate: titleTemplate || defaultTitleTemplate,
    image: `${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    lang: lang || defaultLang,
    keywords: [...keywords, ...defaultKeywords],
    metas: [...meta],
    post: (article && article.post) || false,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      htmlAttributes={{
        lang: seo.lang,
      }}>
      <meta name="keywords" content={seo.keywords.join(`, `)} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta name="title" property="og:title" content={seo.title} />}
      {seo.description && (
        <meta name="description" property="og:description" content={seo.description} />
      )}
      {seo.image && <meta name="image" property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {seo.metas.map(m => (
        <meta key={m.name} name={m.name} content={m.content} />
      ))}

      {(seo.post ? true : null) && <meta property="og:type" content="article" />}
      {seo.post && (
        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "${siteUrl}${seo.post?.category?.slug}/${seo.post?.slug}/"
                  },
                  "headline": "${seo.post?.subtitle?.subtitle}",
                  "image": [
                    "${getSrc(seo.post?.image?.gatsbyImageData)}"
                  ],
                  "datePublished": "${seo.post?.createdAt}",
                  "author": {
                    "@type": "Person",
                    "name": "${seo.post?.author?.name}",
                    "url": "${siteUrl}/consulente/${seo.post?.author?.slug}/"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Trame Digitali | Web Agency",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "${siteUrl}/logo-full.png"
                    }
                  }
                }
            `}
        </script>
      )}

      <script type="application/ld+json">
        {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "address":"Via Frà Bartolomeo 82/A, Prato (PO)",
                "location":"Via Frà Bartolomeo 82/A, Prato (PO)",
                "telephone":"+39 0574 020861",
                "email":"info@trame-digitali.it",
                "url": "${siteUrl}",
                "logo": "${siteUrl}/logo-full.png"
              }
          `}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
};

SEO.defaultProps = {
  lang: 'it',
  title: null,
  titleTemplate: null,
  description: null,
  image: null,
  author: null,
  keywords: [],
  meta: [],
};

export default SEO;

const querySeo = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate: titleTemplate
        defaultDescription: description
        defaultKeywords: keywords
        defaultLang: lang
        author
        defaultImage: image
        twitterUsername
        siteUrl
      }
    }
  }
`;

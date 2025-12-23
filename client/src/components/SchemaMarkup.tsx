import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
    type?: "home" | "retreat" | "article" | "faq" | "about";
    data?: any;
}

export default function SchemaMarkup({ type = "home", data }: SchemaMarkupProps) {
    const baseUrl = "https://7point83.club";

    // Organization Schema (appears on all pages)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "7point83 Club",
        "alternateName": "7.83 Club",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
        "description": "Small-group, eco-friendly wellness retreats across India. Mindful movement, nature immersion, and qualified therapies to reset body and mind at 7.83Hz - the Schumann Resonance.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Karnataka",
            "addressLocality": "Bengaluru"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "7point83club@gmail.com",
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            "https://facebook.com/7point83club",
            "https://instagram.com/7point83club",
            "https://twitter.com/7point83club"
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "7point83 Club",
        "url": baseUrl,
        "description": "Wellness retreats aligned with Earth's natural frequency",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/retreats?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "7point83 Club",
        "image": `${baseUrl}/images/hero-forest.webp`,
        "description": "Curated wellness retreats across India focusing on nervous system reset and natural healing",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Karnataka",
            "addressLocality": "Bengaluru"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9716",
            "longitude": "77.5946"
        },
        "url": baseUrl,
        "email": "7point83club@gmail.com",
        "priceRange": "₹₹₹",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        }
    };

    // Service Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Wellness Retreat",
        "provider": {
            "@type": "Organization",
            "name": "7point83 Club"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wellness Retreats",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Weekend Reset Retreats",
                        "description": "3-day intensive nervous system reset"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Week-Long Immersion",
                        "description": "7-day deep transformation retreat"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "14-Day Lifestyle Reset",
                        "description": "Complete lifestyle transformation program"
                    }
                }
            ]
        }
    };

    // FAQ Schema (for FAQ page)
    const faqSchema = data?.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Article Schema (for blog posts)
    const articleSchema = data?.article ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.article.title,
        "description": data.article.excerpt,
        "image": `${baseUrl}${data.article.image}`,
        "datePublished": data.article.date,
        "author": {
            "@type": "Organization",
            "name": "7point83 Club"
        },
        "publisher": {
            "@type": "Organization",
            "name": "7point83 Club",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/logo.png`
            }
        }
    } : null;

    // Retreat/Event Schema
    const retreatSchema = data?.retreat ? {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": data.retreat.title,
        "description": data.retreat.description,
        "image": `${baseUrl}${data.retreat.image}`,
        "location": {
            "@type": "Place",
            "name": data.retreat.location,
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "offers": {
            "@type": "Offer",
            "price": data.retreat.price.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/retreats/${data.retreat.id}`
        },
        "organizer": {
            "@type": "Organization",
            "name": "7point83 Club",
            "url": baseUrl
        }
    } : null;

    // Breadcrumb Schema
    const breadcrumbSchema = data?.breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.breadcrumbs.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
        }))
    } : null;

    // Combine schemas based on page type
    const schemas: any[] = [organizationSchema, websiteSchema];

    if (type === "home") {
        schemas.push(localBusinessSchema, serviceSchema);
    }

    if (type === "faq" && faqSchema) {
        schemas.push(faqSchema);
    }

    if (type === "article" && articleSchema) {
        schemas.push(articleSchema);
    }

    if (type === "retreat" && retreatSchema) {
        schemas.push(retreatSchema);
    }

    if (breadcrumbSchema) {
        schemas.push(breadcrumbSchema);
    }

    return (
        <Helmet>
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}

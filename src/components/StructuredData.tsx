export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keystoneworkforcebridge.vercel.app'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Keystone Workforce Bridge',
    alternateName: ['Keystone Education Consultancy', 'Keystone Workforce'],
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.jpg`,
      width: 1320,
      height: 820,
    },
    image: `${siteUrl}/images/logo.jpg`,
    description:
      'Bangladesh–Malaysia B2B workforce documentation, compliance reporting, employer liaison, and post-arrival welfare-data support. Serving licensed agencies, Malaysian employers, HRO partners, and ESG teams.',
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      name: 'Dhaka, Bangladesh',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BD',
      addressLocality: 'Dhaka',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Business Enquiries',
        email: 'munimhasibul10@gmail.com',
        telephone: '+8801941646278',
        availableLanguage: ['English', 'Bengali'],
        areaServed: ['BD', 'MY'],
      },
    ],
    sameAs: ['https://www.facebook.com/share/1CoLWmohp7/'],
    knowsAbout: [
      'Bangladesh Malaysia labour corridor',
      'Workforce documentation compliance',
      'Recruitment fee documentation',
      'WRO risk assessment',
      'ESG social compliance',
      'Migrant worker welfare data',
      'Post-arrival welfare support',
      'Employer compliance reporting',
      'Labour corridor intelligence',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Keystone Workforce Bridge Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Agency Documentation BPO',
          description:
            'Batch documentation organisation, receipt and ledger formatting, employer communication drafts, compliance file preparation, and report-ready documentation support for licensed agencies.',
          category: 'B2B Documentation Services',
        },
        {
          '@type': 'Offer',
          name: 'Employer Compliance Dashboard',
          description:
            'Lightweight batch visibility, documentation status, risk notes, ESG-ready summaries, and procurement support for Malaysian HR and compliance teams.',
          category: 'Compliance Reporting',
        },
        {
          '@type': 'Offer',
          name: 'WRO / ESG Risk Scan',
          description:
            'Employer intake, documentation review, red/amber/green risk banding, and remediation checklist for recruitment-fee and labour-compliance exposure.',
          category: 'Risk Assessment',
        },
        {
          '@type': 'Offer',
          name: 'Post-Arrival Welfare Data Support',
          description:
            'Consent-based Bangla welfare check-ins after worker arrival, issue categorisation, and aggregate reporting for employers and ESG partners.',
          category: 'Welfare Data',
        },
        {
          '@type': 'Offer',
          name: 'Corridor Intelligence Brief',
          description:
            'Private updates on Bangladesh–Malaysia labour corridor risk, documentation trends, compliance changes, and procurement signals.',
          category: 'Intelligence & Research',
        },
      ],
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Keystone Workforce Bridge',
    description:
      'Bangladesh–Malaysia Workforce Documentation & Compliance Support — B2B services for licensed agencies, employers, HRO partners, and ESG teams.',
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Keystone Workforce Bridge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keystone Workforce Bridge is a Bangladesh-based B2B company providing documentation workflow support, compliance reporting, employer liaison, and post-arrival welfare-data services for the Bangladesh–Malaysia labour corridor. It is NOT a recruitment agency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Keystone Workforce Bridge recruit workers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Keystone Workforce Bridge is strictly a B2B documentation and compliance support vendor. It does not recruit workers, source candidates, collect worker fees, hold passports, or act as any form of migration intermediary.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a WRO Exposure Check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A WRO Exposure Check is a preliminary business-risk screening tool for companies using Bangladeshi migrant workers. It assesses exposure to Withhold Release Orders (WRO) and ESG/labour compliance risk based on sector, export markets, documentation quality, and grievance channels. It is not legal advice or audit certification.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can use Keystone Workforce Bridge services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keystone serves only B2B clients: licensed Bangladeshi recruitment agencies, Malaysian employers, HRO partners, ESG consultants, and compliance teams. Services are not available to individual workers or job seekers.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact Keystone Workforce Bridge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact via email at munimhasibul10@gmail.com or WhatsApp at +8801941646278. Business hours are standard Dhaka business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What compliance frameworks does Keystone cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Keystone covers documentation and compliance support relevant to the US UFLPA (Uyghur Forced Labor Prevention Act), UK Modern Slavery Act, EU CSDDD, ILO Core Labour Standards, Responsible Business Alliance (RBA) Code of Conduct, and Sedex SMETA audit preparation for the Bangladesh–Malaysia labour corridor.',
        },
      },
    ],
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Munim Hasibul',
    jobTitle: 'Founder',
    worksFor: { '@id': `${siteUrl}/#organization` },
    knowsAbout: [
      'Workforce documentation',
      'Labour corridor compliance',
      'Bangladesh Malaysia migration',
      'ESG social compliance',
      'Documentation workflow automation',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  )
}

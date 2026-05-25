import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keystoneworkforcebridge.vercel.app'

  return {
    rules: [
      // Allow all standard search engine crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google — main search + Gemini AI feeds from Google index
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Google AI (Gemini uses this for training + grounding)
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Bing — Microsoft Copilot / Bing Chat feeds from Bing index
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // ChatGPT / OpenAI crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // ChatGPT browsing plugin
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Perplexity AI crawler
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Claude / Anthropic crawler
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Common Crawl (used by many AI training pipelines)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Meta AI crawler
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Apple Applebot (Siri / Spotlight)
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // DuckDuckBot
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      // Yandex (used in Russia/Central Asia)
      {
        userAgent: 'YandexBot',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

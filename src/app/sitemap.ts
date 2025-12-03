import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ffcworkingsite1.org'
  const now = new Date()
  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

import type { MetadataRoute } from 'next';
import { locales, routes, href } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
 return locales.flatMap(lang=>routes.map(route=>({url:`https://akemis.com${href(lang,route)}`,changeFrequency:'monthly' as const,priority:route===''?1:0.7,alternates:{languages:Object.fromEntries(locales.map(l=>[l,`https://akemis.com${href(l,route)}`]))}})));
}

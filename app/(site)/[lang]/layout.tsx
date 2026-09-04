import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { isLocale, locales } from '@/lib/content';
import '../../globals.css';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const dynamicParams = false;
export function generateStaticParams() { return locales.map(lang=>({lang})); }
export default async function Layout({children,params}: {children:React.ReactNode;params:Promise<{lang:string}>}) {
 const {lang}=await params;if(!isLocale(lang))notFound();
 return <html lang={lang}><body className={inter.className}>{children}</body></html>;
}

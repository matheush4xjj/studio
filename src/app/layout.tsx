import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TributoHub - A nova cara da advocacia tributária',
  description:
    'Transforme dados fiscais em propostas de valor inquestionável. Apresente seu trabalho como nunca antes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn('dark', inter.variable)} suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased bg-gradient-to-b from-[#0F172A] to-[#020617] min-h-screen'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

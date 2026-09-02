import type { Metadata } from 'next';
import { cv } from '@/content/cv';
import './globals.css';

export const metadata: Metadata = {
  title: `${cv.header.name} — CV`,
  description: `${cv.header.name} — ${cv.header.title}. ${cv.header.location}.`,
  authors: [{ name: cv.header.name }],
  openGraph: {
    title: `${cv.header.name} — CV`,
    description: cv.header.title,
    type: 'profile',
  },
};

// Blocking script to set the theme before hydration to avoid a flash.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'dark'); // default dark
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import Navbar from "./components/Navbar";
import { Bebas_Neue } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable}`}>
      <body>
        <MantineProvider
          theme={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
          }}
        >
          <ModalsProvider>
            <Notifications />
            <Navbar />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

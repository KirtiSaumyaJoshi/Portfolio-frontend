import "./globals.css";
import Navbar from "./components/Navbar";
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import "./globals.css";
import '@mantine/core/styles.css';
import { myTheme } from "@/theme/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={myTheme}
        >
          <ModalsProvider >
            <Notifications />
            <Navbar />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

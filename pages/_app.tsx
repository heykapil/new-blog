import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
         <NextUIProvider>
          <Component {...pageProps} />
          </NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

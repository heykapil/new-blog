import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import DarkTheme from './themes/DarkTheme';
import { SessionProvider } from 'next-auth/react';
import { createTheme, NextUIProvider, theme as NextUITheme } from "@nextui-org/react"

const lightTheme = createTheme({
  type: 'light',
  theme: { ...NextUITheme }

})

const darkTheme = createTheme({
  type: 'dark',
  theme: { ...DarkTheme }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
         <NextUIProvider>
          <Component {...pageProps} />
          </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}

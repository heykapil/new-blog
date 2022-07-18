import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import useSound from 'use-sound';  
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  // const [playpageChange] = useSound("/media/page-change.mp3");
  // const [playMenuon] = useSound("/media/switch-on.mp3");
  
  return (
    <NextLink href={href}>
      <a 
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:no-underline hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:border hover:border-primary-500'          
        )}
        onClick={() => {
          // playpageChange()
        }}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // const [playpageSwitch] = useSound("/media/page-switch.mp3");

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Kapil Chaudhary - Researcher',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="top-0 sticky z-10 backdrop-blur supports-backdrop-blur:bg-gray-50/80 supports-backdrop-blur:dark:bg-gray-900/80 flex flex-col px-8 justify-between">
        <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-5 pb-2 sm:pb-6">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
        <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300"
            onClick={() =>{
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              // playpageSwitch()
            }
          }
          >

          {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex mt-8 flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}

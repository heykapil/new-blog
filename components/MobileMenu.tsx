import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';
import useSound from "use-sound";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );
  const [playpageChange] = useSound("/media/page-change.mp3");
  const [playMenuon] = useSound("/media/switch-on.mp3");
  const [playpageSwitch] = useSound("/media/page-switch.mp3");
  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={() => {
          toggleMenu()
          // playMenuon()
        }}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute list-inside space-x-0 overflow-x-none bg-gray-100 dark:bg-gray-900 opacity-90 z-50 transition-transform transform ease-in-out duration-300',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}

          >
            <Link href="/">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/guestbook">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Guestbook</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/dashboard">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Dashboard</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/snippets">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Snippets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '300ms' }}
          >
            <Link href="/newsletter">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Newsletter</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '325ms' }}
          >
            <Link  href="/tweets">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Tweets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: '350ms' }}
          >
            <Link href="/uses">
              <a onClick={() => {
          playpageChange()
        }} className="flex w-auto pb-4">Uses</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
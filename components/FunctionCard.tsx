import Link from 'next/link';
import Image from 'next/image';

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-200 dark:border-gray-800  text-gray-900 dark:text-gray-100 dark:hover:text-gray-900 rounded p-4 w-full bg-white dark:bg-gray-900 dark:hover:border dark:hover:border-primary-400  hover:bg-gradient-to-t  hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to hover:border hover:border-primary-600 transform hover:scale-[1.025] transition-all"
        {...rest}
      >
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2">
          {title}
        </h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </a>
    </Link>
  );
}

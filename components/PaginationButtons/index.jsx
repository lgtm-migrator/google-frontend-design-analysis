import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-between text-blue-700 mb-10 max-w-lg">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
          passHref
        >
          <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        passHref
      >
        <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

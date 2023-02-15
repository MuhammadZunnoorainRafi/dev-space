import Link from 'next/link';
import React from 'react';

const BackButton = ({ url }) => {
  return (
    <div className="pt-6 pb-3">
      <Link href={url} className="btn btn-primary w-28 btn-md">
        Back
      </Link>
    </div>
  );
};

export default BackButton;

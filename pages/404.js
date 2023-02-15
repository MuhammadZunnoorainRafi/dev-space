import Layout from '@/components/Layout';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Layout title="Not Found">
      <div className="flex items-center justify-center h-[83vh]">
        <div className="space-y-3 ">
          <h3 className=" font-extrabold text-6xl font-mono tracking-wider text-red-500">
            ⚠️404
          </h3>
          <p className="text-2xl font-semibold  text-slate-700">
            Oops! Page Not Found
          </p>
          <div className="text-center">
            <Link className="btn btn-primary" href="/">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

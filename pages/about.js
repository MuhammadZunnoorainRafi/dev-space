import BackButton from '@/components/BackButton';
import Layout from '@/components/Layout';
import Link from 'next/link';

const about = () => {
  return (
    <Layout title="About">
     
      <div className="flex items-center justify-center h-[83vh]">
        <div
          className="  rounded-xl space-y-3 bg-slate-200 shadow-2xl py-3
 px-6    "
        >
          <h1 className="font-bold text-3xl">About</h1>
          <p className="text-xl text-slate-700 ">
            This is an Blog Website which is made using Next.js and Tailwind CSS
          </p>
          <p className="text-slate-700 ">Version : 1.0.0</p>
          <Link className='btn btn-primary' href='/'>Back To Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default about;

import { getGithubRepoData } from '@/utils/data';
import Image from 'next/image';

export default async function Home() {
  return (
    <main className='w-full py-12 md:py-24 lg:py-32 font-sans bg-gray-800 space-y-6'>
      <div className='container px-4 md:px-6 text-center mx-auto'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
          OpenPlaceholder powered by evarioo
        </h1>
        <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4'>
          Use it for free. Now.
        </p>
        <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4'>
          Original from <a href="https://github.com/akshitkrnagpal/open-placeholder">akshitkrnagpal</a>
        </p>
      </div>
      <Image
        priority
        className='mx-auto'
        unoptimized
        src='/600x400'
        width={600}
        height={400}
        alt=''
      />
    </main>
  );
}

import { getGithubRepoData } from '@/utils/data';
import Image from 'next/image';

export default async function Home() {
  return (
    <main className='w-full py-12 md:py-24 lg:py-32 space-y-6'>
      <div className='container px-4 md:px-6 text-center mx-auto'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
          OpenPlaceholder
        </h1>
        <p className='mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4'>
          Powered by evarioo. Use it for free. Now.
        </p>
        <p className='mx-auto max-w-[700px] text-gray-300 md:text-lg'>
          Original from <a href="https://github.com/akshitkrnagpal/open-placeholder">akshitkrnagpal</a>
        </p>
      </div>

      <div className='container px-4 md:px-6 text-center mx-auto'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
          Examples
        </h1>
        <div className='mt-4'>
          <Image
        priority
        className='mx-auto'
        unoptimized
        src='/600x400'
        width={600}
        height={400}
        alt=''
        />
        </div>
        <div className='mt-4 bg-gray-300 mx-auto max-w-[240px] rounded-md py-3 px-2'>
         <p>Test</p>
        </div>
      </div>
    </main>
  );
}

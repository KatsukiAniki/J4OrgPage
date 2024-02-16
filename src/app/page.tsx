'use client'

import { useEffect } from 'react';
import MotionPage from "./lib/motion";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <MotionPage>
      <div className="w-full h-[calc(100vh-64px)] overflow-auto flex">
      <div className='flex flex-col h-full w-3/5 pt-[5%]'>
            <h1 className='text-3xl text-center'>HOME</h1>
        </div>
        <div className="flex flex-col h-full w-2/5 pt-[5%]">
          <a className="twitter-timeline" href="https://twitter.com/j4esports?ref_src=twsrc%5Etfw">Tweets by j4esports</a>
        </div>
      </div>
    </MotionPage>
  );
}

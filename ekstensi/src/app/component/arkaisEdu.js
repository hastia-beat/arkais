'use client'

import { Caveat_Brush } from 'next/font/google';
import SearchInput from './searchInput';

const caveatBrush = Caveat_Brush({
  subsets: ['latin'],
  weight: '400',
});

const ArkaisEdu = () => {
  return (
    <div className={`h-screen flex flex-col justify-center items-center relative overflow-hidden ${caveatBrush.className}`}>
      <h1 className="text-8xl relative text-color-primary" style={{ top: '-15%' }}>ARKAIS EDU</h1>

      <div className="absolute w-full flex justify-center" style={{ top: '40%' }}>
        <SearchInput />
      </div>

      <div className="absolute text-center w-1/5" style={{ top: '62%' }}>
        <p className="text-3xl text-color-primary hover:text-color-accent hover:opacity-80">move your cursor here!</p>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
        </div>
      </div>

      <div className="w-1/2 h-2/5 rounded-[50%_/_50%] border-4 border-color-primary bg-transparent absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="absolute bottom-10 right-20 hover:opacity-80">
        <a href="" className={`group ${caveatBrush.className} text-color-primary text-3xl relative pb-1 hover:text-color-accent hover:opacity-80`}>
          go to website
          <span className="block w-40 h-[4px] bg-color-primary absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] group-hover:bg-color-accent transition-all"></span>
        </a>
      </div>
    </div>
  );
};

export default ArkaisEdu;

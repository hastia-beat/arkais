'use client'

import { Caveat_Brush } from 'next/font/google';
import Image from 'next/image';
import SearchInput from './searchInput';
import icon from '../../../public/ArkaisEdu.png';

const caveatBrush = Caveat_Brush({
  subsets: ['latin'],
  weight: '400',
});

const ArkaisEdu = () => {
  return (
    <div className={`h-screen flex flex-col justify-center items-center relative overflow-hidden ${caveatBrush.className} bg-black`}>
      
      <div className="absolute top-4 left-4 m-4 p-2 rounded-full border-4 border-color-primary shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
        <a href="/" className="block">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white">
            <Image src={icon} alt="Arkais Edu Icon" layout="fill" objectFit="cover" />
          </div>
        </a>
      </div>

      <h1 className="text-8xl relative text-color-primary drop-shadow-lg" style={{ top: '-15%' }}>ARKAIS EDU</h1>

      <div className="absolute w-full flex justify-center" style={{ top: '40%' }}>
        <SearchInput />
      </div>

      <div className="absolute text-center w-1/5" style={{ top: '62%' }}>
        <p className="text-3xl text-color-primary hover:text-color-accent hover:opacity-80 transition-colors duration-300">
          move your cursor here!
        </p>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
          <span className="text-6xl text-color-primary transform font-bold">{'↓'}</span>
        </div>
      </div>

      <div className="w-2/5 h-2/5 rounded-[50%_/_50%] border-4 border-color-primary bg-transparent absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 shadow-xl"></div>

      <div className="absolute bottom-10 right-20 hover:opacity-80">
        <a href="" className={`group ${caveatBrush.className} text-color-primary text-3xl relative pb-1 hover:text-color-accent transition-all duration-300`}>
          go to website
          <span className="block w-40 h-[4px] bg-color-primary absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] group-hover:bg-color-accent transition-all"></span>
        </a>
      </div>
    </div>
  );
};

export default ArkaisEdu;

'use client'

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

async function fetchWords(limit) {
  const response = await fetch(`${process.env["BACKEND"] || "http://localhost:3333"}/words/random?limit=${limit}`);
  return await response.json();
}

function WordList() {
  const [words, setWords] = useState([]);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [shouldFetchWords, setShouldFetchWords] = useState(true);
  const contentRef = useRef(null); 

  useEffect(() => {
    async function fetchWordsEffect() {
      if (shouldFetchWords) {
        try {
          const data = await fetchWords(6);
          setWords(data);
          setShouldFetchWords(false); 
        } catch (error) {
          console.error('Error fetching words:', error);
        }
      }
    }
    fetchWordsEffect();
  }, [shouldFetchWords]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const threshold = window.innerHeight * 0.84; 

      if (e.clientY > threshold && !isLocked) {
        if (isBoxVisible) {
          gsap.to(contentRef.current, { y: '100%', duration: 0.15 });
        } else {
          gsap.to(contentRef.current, { y: '0%', duration: 0.15 });
        }
        setIsBoxVisible(!isBoxVisible);
        setIsLocked(true); 
        if (isBoxVisible) {
          setShouldFetchWords(true); 
        }
      } else if (e.clientY < threshold && isLocked) {
        setIsLocked(false); 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isBoxVisible, isLocked]);

  return (
    <div className="min-h-screen bg-color-dark flex flex-col items-center justify-end">
      <h1 className=" bg-single-hatch text-5xl font-extrabold mb-8 px-12 py-4 relative text-clip-hatch clip-text border-4 border-color-gray text-color-dark">
        A R K A I S
      </h1>
      <div
        ref={contentRef}
        className="grid grid-cols-3 gap-4 bg-color-secondary w-full max-w-6xl rounded-lg shadow-lg p-6"
        style={{ position: 'fixed', bottom: '0', left: '50%', transform: 'translateX(-50%) translateY(100%)' }}
      >
        {words.map((word, index) => (
          <div key={index} className="text-xl font-semibold text-color-primary m-4 px-6">
            <p className='text-lg font-bold text-color-accent'>{word.kata}</p>
            <p className="text-color-primary">{word.makna}</p>
            <p className="text-sm text-color-accent">{word.jenisKata}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordList;

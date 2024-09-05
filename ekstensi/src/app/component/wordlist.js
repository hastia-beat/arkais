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
      const verticalThreshold = window.innerHeight * 0.84; // 84% from the top
      const horizontalThresholdStart = window.innerWidth * 0.35; // 30% from the left
      const horizontalThresholdEnd = window.innerWidth * 0.65; // 70% from the left

      if (
        e.clientY > verticalThreshold && 
        e.clientX > horizontalThresholdStart && 
        e.clientX < horizontalThresholdEnd && 
        !isLocked
      ) {
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
      } else if ((e.clientY < verticalThreshold || e.clientX < horizontalThresholdStart || e.clientX > horizontalThresholdEnd) && isLocked) {
        setIsLocked(false); 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isBoxVisible, isLocked]);

  return (
    <div className="flex flex-col items-center justify-end">
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

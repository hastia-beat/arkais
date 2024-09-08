// Search Input Handler
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && this.value.trim() !== "") {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.value)}`;
    window.open(searchUrl, '_blank');
  }
});

// Fetch words from backend
async function fetchWords(limit = 6) {
  const response = await fetch(`https://arkaisedu.vercel.app/words/random?limit=${limit}`); // Updated API URL
  if (!response.ok) {
    console.error('Error fetching words:', response.statusText);
    return [];
  }
  return await response.json();
}

// Display words in word list
function displayWords(words) {
  const wordListContainer = document.querySelector('#wordList .grid');
  wordListContainer.innerHTML = '';  // Clear previous words

  words.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.className = 'text-xl font-semibold text-color-primary m-4 px-6';
    wordElement.innerHTML = `
      <p class='text-lg font-bold text-color-accent'>${word.kata}</p>
      <p class="text-color-primary">${word.makna}</p>
      <p class="text-sm text-color-accent">${word.jenisKata}</p>
    `;
    wordListContainer.appendChild(wordElement);
  });
}

// Show and hide word list with GSAP animation
let isBoxVisible = false;
let isLocked = false;

document.addEventListener('mousemove', (e) => {
  const verticalThreshold = window.innerHeight * 0.84; // 84% from the top
  const horizontalThresholdStart = window.innerWidth * 0.35; // 35% from the left
  const horizontalThresholdEnd = window.innerWidth * 0.65; // 65% from the left

  if (e.clientY > verticalThreshold && e.clientX > horizontalThresholdStart && e.clientX < horizontalThresholdEnd && !isLocked) {
    toggleWordList();
    isLocked = true; // Lock the hover trigger
  } else if ((e.clientY < verticalThreshold || e.clientX < horizontalThresholdStart || e.clientX > horizontalThresholdEnd) && isLocked) {
    isLocked = false; // Unlock when outside the area
  }
});

function toggleWordList() {
  const wordList = document.querySelector('#wordList .grid');
  
  if (isBoxVisible) {
    gsap.to(wordList, { y: '100%', duration: 0.3, });  // Hide the box using GSAP
  } else {
    gsap.to(wordList, { y: '0%', duration: 0.3, });  // Show the box using GSAP
    fetchWords().then(displayWords);  // Fetch and display words when shown
  }
  
  isBoxVisible = !isBoxVisible;
}

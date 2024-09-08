chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchWords') {
      // Lakukan permintaan fetch ke API eksternal
      fetch(`https://arkaisedu.vercel.app/words/random?limit=${request.limit}`)
        .then(response => response.json())
        .then(data => {
          sendResponse({ words: data });
        })
        .catch(error => {
          console.error('Error fetching words:', error);
          sendResponse({ words: [] });
        });
      
      return true;  // Keep the message channel open for asynchronous response
    }
  });
  
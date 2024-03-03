const catApiKey = 'live_fCERHVzxuLOJeELzUxubuFRaGZaHd1iVOCJ0XEM90jeA2qRI0FNJMrwd2Vze4tm3';
const dogApiKey = 'live_XYKwJUWWhrqIlyR23LCtQe1Tt6vXr2DEP7szwYA92KpVqgUUh88AJImBI2BpeEoj';
const photoContainer = document.getElementById('photo-container');
let displayedImages = [];

function fetchCat() {
  // Reset when switching to cat photos
  displayedImages = [];
  
  setInterval(async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': catApiKey,
      },
    });
    const data = await response.json();
    displayImage(data[0].url);
  }, 15000); // New cat photo every 15 seconds
}

function fetchDog() {
  // Reset when switching to dog photos
  displayedImages = [];

  setInterval(async () => {
    const response = await fetch('https://api.thedogapi.com/v1/images/search', {
      headers: {
        'x-api-key': dogApiKey,
      },
    });
    const data = await response.json();
    displayImage(data[0].url);
  }, 15000); // New dog photo every 15 seconds
}

function displayImage(url) {
  if (!displayedImages.includes(url)) {
    displayedImages.push(url);
    const img = document.createElement('img');
    img.src = url;
    photoContainer.innerHTML = ''; // Clear previous image
    photoContainer.appendChild(img);
  } else {
    // Handle case when the image is a repeat - Remember no repeats!
    alert('No more new images! Try the other category.');
  }
}

// Initial load (to start showing images immediately)
fetchCat();

const themeButton = document.getElementById('themeButton');
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

if (localStorage.getItem('youtube-theme') === 'dark') {
  document.body.classList.add('dark-theme');
  if (themeButton) themeButton.textContent = '☀';
}

if (themeButton) {
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    const darkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('youtube-theme', darkMode ? 'dark' : 'light');
    themeButton.textContent = darkMode ? '☀' : '☾';
  });
}

if (menuButton) {
  menuButton.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-collapsed');
  });
}

const categoryButtons = document.querySelectorAll('.category-chip');
const videoCards = document.querySelectorAll('.video-preview[data-category]');
const noResults = document.getElementById('noResults');

categoryButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const category = button.dataset.category;
    let visibleCards = 0;

    categoryButtons.forEach(function (chip) {
      chip.classList.remove('selected');
    });
    button.classList.add('selected');

    videoCards.forEach(function (card) {
      const showCard = category === 'all' || card.dataset.category === category;
      card.hidden = !showCard;
      if (showCard) visibleCards++;
    });

    if (noResults) noResults.hidden = visibleCards !== 0;
  });
});

const searchParams = new URLSearchParams(window.location.search);
const searchTerm = searchParams.get('q');
const searchTermLabel = document.getElementById('searchTerm');
const searchInput = document.getElementById('searchInput');

if (searchTermLabel && searchTerm) searchTermLabel.textContent = 'for “' + searchTerm + '”';
if (searchInput && searchTerm) searchInput.value = searchTerm;

const searchResults = document.querySelectorAll('.search-result');
if (searchResults.length && searchTerm) {
  let matchingResults = 0;
  searchResults.forEach(function (result) {
    const matches = result.textContent.toLowerCase().includes(searchTerm.toLowerCase());
    result.hidden = !matches;
    if (matches) matchingResults++;
  });
  if (matchingResults === 0) {
    const message = document.createElement('p');
    message.className = 'no-results';
    message.textContent = 'No sample videos matched that search. Try another search.';
    document.querySelector('.search-results').appendChild(message);
  }
}

const videoDetails = {
  '1': ['Talking Tech and AI with Google CEO Sundar Pichai!', 'Marques Brownlee', '3.4M views · 6 months ago', 'thumbnail-1.webp', 'channel-1.jpeg'],
  '2': ['Try Not To Laugh Challenge #9', 'Markiplier', '19M views · 4 years ago', 'thumbnail-2.webp', 'channel-2.jpeg'],
  '3': ['Crazy TikToks Taken Moments Before DISASTER', 'SSSniperWolf', '12M views · 1 year ago', 'thumbnail-3.webp', 'channel-3.jpeg'],
  '4': ['The Simplest Math Problem No One Can Solve — Collatz Conjecture', 'Veritasium', '18M views · 4 months ago', 'thumbnail-4.webp', 'channel-4.jpeg'],
  '5': ["Kadane's Algorithm to Maximum Sum Subarray Problem", 'CS Dojo', '519K views · 5 years ago', 'thumbnail-5.webp', 'channel-5.jpeg'],
  '6': ["Try Anything You Can Fit In The Circle, I'll Pay For", 'MrBeast', '141M views · 1 year ago', 'thumbnail-6.webp', 'channel-6.jpeg'],
  '7': ["Why Planes Don't Fly Over Tibet", 'RealLifeLore', '6.6M views · 1 year ago', 'thumbnail-7.webp', 'channel-7.jpeg'],
  '8': ["Inside The World's Biggest Passenger Plane", 'Tech Vision', '3.7M views · 10 months ago', 'thumbnail-8.webp', 'channel-8.jpeg'],
  '9': ['The SECRET to Super Human STRENGTH', 'ThenX', '20M views · 3 years ago', 'thumbnail-9.webp', 'channel-9.jpeg'],
  '10': ["How The World's Largest Cruise Ship Makes 30,000 Meals Every...", 'Business Insider', '14M views · 1 year ago', 'thumbnail-10.webp', 'channel-10.jpeg'],
  '11': ["Dubai's Crazy Underwater Train and Other Things", 'Destination Tips', '3M views · 1 year ago', 'thumbnail-11.webp', 'channel-11.jpeg'],
  '12': ["What Would Happen If You Didn't Drink Water?", 'TED-Ed', '12M views · 5 years ago', 'thumbnail-12.webp', 'channel-12.jpeg']
};

const selectedVideo = videoDetails[searchParams.get('video') || '1'];
if (selectedVideo) {
  const title = document.getElementById('watchTitle');
  const channel = document.getElementById('watchChannel');
  const stats = document.getElementById('watchStats');
  const thumbnail = document.getElementById('watchThumbnail');
  const avatar = document.getElementById('watchAvatar');
  if (title) title.textContent = selectedVideo[0];
  if (channel) channel.textContent = selectedVideo[1];
  if (stats) stats.textContent = selectedVideo[2];
  if (thumbnail) thumbnail.src = 'assets/thumbnails/' + selectedVideo[3];
  if (avatar) avatar.src = 'assets/channels/' + selectedVideo[4];
}

const subscribeButton = document.querySelector('.subscribe-button');
if (subscribeButton) {
  subscribeButton.addEventListener('click', function () {
    const subscribed = subscribeButton.classList.toggle('subscribed');
    subscribeButton.textContent = subscribed ? 'Subscribed' : 'Subscribe';
  });
}

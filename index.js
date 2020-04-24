const welcomeSection = document.querySelector('.random-background');
const profileImage = document.querySelector('#profile-image');

// ==============================
// RANDOMIZING BACKGROUND
// ==============================

// RANDOM BACKGROUND ON LOAD
changeBackground();

// RANDOM BACKGROUND ON PROFILE IMAGE CLICK
profileImage.addEventListener('click', function () {
  changeBackground();
});

// RANDOMIZE BACKGROUND FUNCTION
function changeBackground() {
  let backgroundImages = [
    './images/beachverticalview.jpeg',
    './images/miami.jpg',
    './images/codebackground.jpeg',
    './images/heavycode.jpeg',
    './images/mountains.jpeg',
    './images/chesspieces.jpeg',
    './images/chessstrategy.jpegls',
  ];

  let random = Math.floor(Math.random() * backgroundImages.length);
  let randomizedBackground = backgroundImages[random];

  welcomeSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${randomizedBackground})`;
  welcomeSection.style.backgroundSize = 'cover';
}

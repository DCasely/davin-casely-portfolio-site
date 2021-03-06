// ===============================================
// RANDOMIZING BACKGROUND
// ===============================================

// MUST add random-background class in HTML for this to work.

const welcomeSection = document.querySelector('.random-background');
const profileImage = document.querySelector('#profile-image');

// RANDOM BACKGROUND ON LOAD
// changeBackground();

// RANDOM BACKGROUND ON PROFILE IMAGE CLICK
profileImage.addEventListener('click', function () {
  changeBackground();
});

// RANDOMIZE BACKGROUND FUNCTION
function changeBackground() {
  let backgroundImages = [
    './images/chesswhite.jpeg',
    './images/codebackground.jpeg',
    './images/chessstrategy.jpeg',
    './images/heavycode.jpeg',
  ];

  let random = Math.floor(Math.random() * backgroundImages.length);
  let randomizedBackground = backgroundImages[random];

  welcomeSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${randomizedBackground})`;
  welcomeSection.style.backgroundSize = 'cover';
}

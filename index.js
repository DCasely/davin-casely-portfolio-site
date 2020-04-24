const welcomeSection = document.querySelector('.random-background');
const profileImage = document.querySelector('#profile-image');

profileImage.addEventListener('click', function () {
  changeBackground();
});

// RANDOMIZE BACKGROUND
function changeBackground() {
  // LIST OF BACKGROUNDS IMAGES TO ITERATE THROUGH
  let backgroundImages = [
    './images/beachverticalview.jpeg',
    './images/miami.jpg',
    './images/codebackground.jpeg',
    './images/heavycode.jpeg',
    './images/mountains.jpeg',
  ];

  let random = Math.floor(Math.random() * backgroundImages.length);

  let randomizedBackground = backgroundImages[random];

  welcomeSection.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${randomizedBackground})`;
  welcomeSection.style.backgroundSize = 'cover';
}

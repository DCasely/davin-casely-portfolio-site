// ===============================================
// TOGGLING BACKGROUND
// ===============================================

const codeBackground = document.querySelector('.code-background');
const profileImage = document.querySelector('#profile-image');

// TOGGLE BACKGROUND ON PROFILE IMAGE CLICK
profileImage.addEventListener('click', toggleBackground);

// TOGGLE BACKGROUND FUNCTION
function toggleBackground() {
  codeBackground.classList.toggle('chess-background');
}

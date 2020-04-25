// ===============================================
// HIGHLIGHT NAVIGATION WITH CORRESPONDING PAGE
// ===============================================

// NAV LINKS
const welcomeLink = document.querySelector('.welcome-link');
const recommendationsLink = document.querySelector('.recommendations-link');
const educationLink = document.querySelector('.education-link');
const certificationLink = document.querySelector('.certification-link');
const experienceLink = document.querySelector('.experience-link');
const projectsLink = document.querySelector('.projects-link');

document.addEventListener('scroll', () => {
  let vertical = window.scrollY;

  // HOME
  vertical < 700
    ? welcomeLink.classList.add('current')
    : welcomeLink.classList.remove('current');

  // RECOMMENDATIONS
  if (vertical > 700 && vertical < 1240) {
    recommendationsLink.classList.add('current');
  } else if (vertical < 700 || vertical > 1240) {
    recommendationsLink.classList.remove('current');
  }

  // EDUCATION
  if (vertical > 1240 && vertical < 2120) {
    educationLink.classList.add('current');
  } else if (vertical < 1240 || vertical > 2140) {
    educationLink.classList.remove('current');
  }

  // CERTIFICATION
  if (vertical > 2140 && vertical < 2700) {
    certificationLink.classList.add('current');
  } else if (vertical < 2140 || vertical > 2700) {
    certificationLink.classList.remove('current');
  }

  // EXPERIENCE
  if (vertical > 2700 && vertical < 4250) {
    experienceLink.classList.add('current');
  } else if (vertical < 3080 || vertical > 4250) {
    experienceLink.classList.remove('current');
  }

  // PROJECTS
  vertical > 4250
    ? projectsLink.classList.add('current')
    : projectsLink.classList.remove('current');
});

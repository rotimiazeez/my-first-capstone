import data from './data.js';

const myFeatures = data.features;

const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav-links');
const closeMenuBtn = document.querySelector('.close-menu-btn button');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
});
menuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'flex';
  menuLinks.classList.add('menu-links');
});
closeMenuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'none';
  menuLinks.classList.remove('menu-links');
});

const speakerGrid = document.querySelector('.speaker-grid');

function implementFeature() {
  myFeatures.forEach((feature) => {
    speakerGrid.innerHTML += `<article class="feature-article">
    <div class="feature-image">
      <div class="grid-img"><img src="./assets/grid.jpg" alt="grid image"></div><img src=${feature.featureImage}
        alt="Feature Image">
    </div>
    <div class="arcticle-info">
      <h3 class="author-name">${feature.featureName}</h3><i class="author-word"> ${feature.featureDescription}</i>
      <p class="author-message"> ${feature.featureMessage}</p>
    </div>
  </article>`;
  });
}

implementFeature();
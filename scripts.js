document.addEventListener("DOMContentLoaded", () => {
  
  let startBut = document.getElementById('start');
  let storyImg = document.getElementById('story-img');
  let storyVideo = document.getElementById('story-video');

  document.addEventListener('click', () => {
    startBut.style.display = 'none';
    storyImg.style.display = 'none';
    storyVideo.style.display = 'block';
  });

  (function() {
    'use strict';
  
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('btn-to-top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('btn-to-top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    let goTopBtn = document.querySelector('.btn-to-top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

});
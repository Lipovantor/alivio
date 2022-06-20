document.addEventListener("DOMContentLoaded", () => {
  
  let startBut = document.getElementById('start');
  let storyImg = document.getElementById('story-img');
  let storyVideo = document.getElementById('story-video');

  document.addEventListener('click', () => {
    startBut.style.display = 'none';
    storyImg.style.display = 'none';
    storyVideo.style.display = 'block';
  });

});
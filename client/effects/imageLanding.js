const images = [
  'url(../../assets/landing3.jpg)',
  'url(../../assets/landing5.jpg)',
  'url(../../assets/landing6.jpg)',
]

let currentIndex = 0;

function changeBackgroundImage() {
  const container = document.querySelector('.container');
  container.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);
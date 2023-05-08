let currentImageIndex = 0;
const images = document.querySelectorAll('.container img');

function changeImage() {
  const activeImage = document.querySelector('.container img.active');
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];
  
  activeImage.classList.remove('active');
  nextImage.classList.add('active');
  
  // Update currentImageIndex and reset to 0 if it's at the last image
  currentImageIndex = nextImageIndex;
}

setInterval(changeImage, 3000);
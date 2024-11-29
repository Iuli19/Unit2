let currentIndex = 0;
let images = document.querySelectorAll('.images');
let slideshowContainer = document.getElementById('slideshow');

function toggleSlideshow() {
    if (slideshowContainer.classList.contains('active')) {
        clearInterval(slideshowInterval);
        slideshowContainer.classList.remove('active');
    } else {
        slideshowContainer.classList.add('active');
        startSlideshow();
    }
}

function startSlideshow() {
    images[currentIndex].style.display = 'inline-block';
    slideshowInterval = setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'inline-block';
    }, 3000); 
}

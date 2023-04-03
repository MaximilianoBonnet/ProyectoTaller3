const carousels = document.querySelectorAll('.nosotros-carousel');

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    let currentIndex = 0;

    const showImage = () => {
        images.forEach(image => {
            image.classList.remove('active');
        });
        images[currentIndex].classList.add('active');
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    };

    const prevImage = () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage();
    };

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    showImage();
});
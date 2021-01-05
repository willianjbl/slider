let slideItem = document.querySelectorAll('.slider-item');
let totalSlides = slideItem.length;
let sliderHeight = document.querySelector('.slider').clientHeight;
let slideWrap = document.querySelector('.slider-wrap');
let currentSlide = 0;

slideWrap.style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = `${sliderHeight}px`;

function goPrev() {
    currentSlide--;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateSlide();
}

function goNext() {
    currentSlide++;

    if (currentSlide > totalSlides - 1) {
        currentSlide = 0;
    }
    updateSlide();
}

function updateSlide() {
    let newMargin = currentSlide * slideItem[0].clientWidth;

    slideWrap.style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);

document.querySelector('.slider-control-prev').addEventListener('click', goPrev);
document.querySelector('.slider-control-next').addEventListener('click', goNext);

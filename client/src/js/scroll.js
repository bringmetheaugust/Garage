const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

// header background logo

const headerObserver = new IntersectionObserver(headerCallback, options);
headerObserver.observe(document.querySelector('header'));

function headerCallback(entries) {
    const header = entries[0];

    header.isIntersecting ?
        header.target.classList.remove('intersection') :
        header.target.classList.add('intersection');
}

// about us section

const aboutSectionObserver = new IntersectionObserver(aboutSectionCallback, options);
aboutSectionObserver.observe(document.getElementById('about-slider'));

function aboutSectionCallback(entries) {
    const slider = entries[0];

    slider.isIntersecting ?
        document.addEventListener('scroll', moveAboutSlider) :
        document.removeEventListener('scroll', moveAboutSlider);
}

function moveAboutSlider() {
    const scrollY = window.pageYOffset / 10;

    [...document.getElementById('about-sliders').children].forEach((slide, n) => {
        n%2 === 0 ?
            slide.style.transform = `translateX(${scrollY}px) translateY(${scrollY}px)` :
            slide.style.transform = `translateX(${-scrollY}px) translateY(${scrollY}px)` ;
    });
}

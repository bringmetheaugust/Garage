const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

// * about us section

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

// * header background logo

const backgroundLogo = document.getElementById('b-logo');

window.addEventListener('scroll', () => {
    backgroundLogo.style.opacity = 0.1 - window.pageYOffset * 0.000025;
});

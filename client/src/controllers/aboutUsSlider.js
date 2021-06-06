const aboutSectionObserver = new IntersectionObserver(
    aboutSectionCallback,
    {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
);

aboutSectionObserver.observe(document.getElementById('about-slider'));

function aboutSectionCallback(entries) {
    entries[0].isIntersecting ?
        document.addEventListener('scroll', moveAboutSlider) :
        document.removeEventListener('scroll', moveAboutSlider);
}

function moveAboutSlider() {
    const scrollY = window.pageYOffset / 10;

    [ ...document.getElementById('about-sliders').children ].forEach((slide, n) => {
        slide.style.transform = `translateX(${ n % 2 === 0 ? scrollY : -scrollY }px) translateY(${scrollY}px)` ;
    });
}

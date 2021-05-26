const observer = new IntersectionObserver(
    callback,
    {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
);

observer.observe(document.querySelector('header'));

function callback(entries) {
    const header = entries[0]; //header

    header.isIntersecting ?
        header.target.classList.remove('intersection') :
        header.target.classList.add('intersection');
}

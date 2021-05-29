const header = document.querySelector('header');
const { body } = document;
const HEADER_ACTIVE_CLASS = 'active';

document.getElementById('burger-menu').addEventListener('click', toggleHeader);
document.getElementById('mobile-curtain').addEventListener('click', toggleHeader);
[ ...document.querySelectorAll('header nav a')].forEach(href => {
    href.addEventListener('click', () => {
        header.classList.contains(HEADER_ACTIVE_CLASS) && toggleHeader();
    });
});

function toggleHeader() {
    header.classList.toggle(HEADER_ACTIVE_CLASS);
    body.classList.toggle('no-scroll');
}

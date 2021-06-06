const curtain = document.getElementById('curtain');
const header = document.querySelector('header');
const backgroundLogo = document.getElementById('b-logo');
export const consultationFixed = document.getElementById('consulstation-fixed');
export const ACTIVE_CLASS = 'active';

// * header background logo

window.addEventListener('scroll', () => backgroundLogo.style.opacity = 0.1 - window.pageYOffset * 0.000025 );

// * header

document.getElementById('burger-menu').addEventListener('click', toggleItem.bind(header));
[ ...document.querySelectorAll('header nav a') ].forEach(href => {
    href.addEventListener('click', () => {
        header.classList.contains(ACTIVE_CLASS) && toggleItem.call(header);
    });
});

// * fixed consultation

[ document.getElementById('consultation-call'), document.getElementById('consultation-close') ].forEach(i => {
    i.addEventListener('click', toggleItem.bind(consultationFixed));
});

// * curtain

curtain.addEventListener('click', toggleCurtain);

// * common

function toggleItem(isEvent) {
    if (typeof isEvent === 'boolean') return this.classList.remove(ACTIVE_CLASS);

    this.classList.toggle(ACTIVE_CLASS);
    toggleCurtain();
}

export function toggleCurtain(isEvent = false) {
    document.body.classList.toggle('no-scroll');
    curtain.classList.toggle(ACTIVE_CLASS);

    if (typeof isEvent === 'object') {
        toggleItem.call(header, false);
        toggleItem.call(consultationFixed, false);
    }
}

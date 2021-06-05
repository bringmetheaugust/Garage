const curtain = document.getElementById('curtain');
const header = document.querySelector('header');
const consultationFixed = document.getElementById('consulstation-fixed');
const ACTIVE_CLASS = 'active';

[ document.getElementById('burger-menu'), ...document.querySelectorAll('header nav a')].forEach(i => {
    i.addEventListener('click', toggleItem.bind(header));
});
document.getElementById('consultation-call').addEventListener('click', toggleItem.bind(consultationFixed));
curtain.addEventListener('click', toggleCurtain);

function toggleItem(isEvent) {
    if (typeof isEvent === 'boolean') return this.classList.remove(ACTIVE_CLASS);

    this.classList.toggle(ACTIVE_CLASS);
    toggleCurtain();
}

function toggleCurtain(isEvent = false) {
    document.body.classList.toggle('no-scroll');
    curtain.classList.toggle(ACTIVE_CLASS);

    if (typeof isEvent === 'object') {
        toggleItem.call(header, false);
        toggleItem.call(consultationFixed, false);
    }
}

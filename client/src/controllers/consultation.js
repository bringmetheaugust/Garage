import Notification from './notification.js';
import { consultationFixed, toggleCurtain, ACTIVE_CLASS } from './common';

[ ...document.querySelectorAll('.consultation-form') ].forEach(form => {
    form.addEventListener('submit', sendForm);
});

async function sendForm(e) {
    e.preventDefault();
    const { target } = e;
    
    try {
        const { ok, status } = await fetch('http://localhost:2101/api/callme', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                phone: document.getElementById('consultation-tel').value,
                name: document.getElementById('consultation-name').value
            })
        });

        if (!ok) throw new Error(status);

        target.classList.add('loading');

        new Notification(Notification.alertTypes.success, 'Ваш запрос отправлен');

        if (consultationFixed.classList.contains(ACTIVE_CLASS)) {
            consultationFixed.classList.remove(ACTIVE_CLASS);
            toggleCurtain();
        }
    } catch({ message }) {
        const { error } = Notification.alertTypes;

        switch(message) {
            case 400: return new Notification(error, 'Неверно указанные данные');
            case 403: return new Notification(error, 'Вы уже отправляли запрос<br>Попробуйте еще раз через 10 минут');
            default: new Notification(error, 'Извините, произошла ошибка');
        }
    } finally {
        target.classList.remove('loading');
    }
}

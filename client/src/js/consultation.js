import Notification from './notification.js';

document.getElementById('consultation').addEventListener('submit', async e => {
    e.preventDefault();
    
    try {
        const res = await fetch('http://localhost:2101/api/callme', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                phone: document.getElementById('consultation-tel').value,
                name: document.getElementById('consultation-name').value
            })
        });

        if (!res.ok) throw new Error(res.status);

        new Notification('success', 'Ваш запрос отправлен');
    } catch({ message }) {
        switch(message) {
            case 400: return new Notification('error', 'Неверно указанные данные');
            case 403: return new Notification('error', 'Вы уже отправляли запрос<br>Попробуйте еще раз через 10 минут');
            default: new Notification('error', 'Извините, произошла ошибка');
        }
    }
});

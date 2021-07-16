import Notification from './notification.js';
import { consultationFixed, toggleCurtain, ACTIVE_CLASS } from './common.js';

const consultationForm = document.querySelector('.consultation-form');
const formNotifications = {
    succes: consultationForm.getAttribute('data-trans-success'),
    unknownError: consultationForm.getAttribute('data-trans-unknown-error'),
    invalidData: consultationForm.getAttribute('data-trans-invalid-data-error'),
    spam: consultationForm.getAttribute('data-trans-spam-error'),
};

[ ...document.querySelectorAll('.consultation-form') ].forEach(form => {
    form.addEventListener('submit', sendForm);
});

async function sendForm(e) {
    e.preventDefault();
    const { target } = e;
    
    try {
        const { ok, status } = await fetch('/api/callme', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                phone: target[0].value,
                name: target[1].value
            })
        });

        if (!ok) throw new Error(status);

        target.classList.add('loading');
        new Notification(Notification.alertTypes.success, formNotifications.succes);

        if (consultationFixed.classList.contains(ACTIVE_CLASS)) {
            consultationFixed.classList.remove(ACTIVE_CLASS);
            toggleCurtain();
        }
    } catch({ message }) {
        const { error } = Notification.alertTypes;

        switch(message) {
            case 400: return new Notification(error, formNotifications.invalidData);
            case 403: return new Notification(error, formNotifications.spam);
            default: new Notification(error, formNotifications.unknownError);
        }
    } finally {
        target.classList.remove('loading');
    }
}

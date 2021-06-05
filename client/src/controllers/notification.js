const notificationWrap = document.getElementById('notifications');

export default class Notification {
    constructor(type, message) {
        this.type = type;
        this.message = message;
        this.create();
    }

    create() {
        if (notificationWrap.children.length) notificationWrap.innerHTML = '';

        this.div = document.createElement('div');
        this.div.classList.add(this.type === 'success' ? 'success' : 'error');
        this.div.innerHTML = this.message;

        notificationWrap.appendChild(this.div);
        setTimeout(this.delete.bind(this), 5000);
    }

    delete() {
        notificationWrap.removeChild(this.div);
    }
}

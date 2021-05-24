const notificationWrap = document.getElementById('notifications');

export default class Notification {
    constructor(type, message) {
        this.type = type;
        this.message = message;
        this.create();
    }

    create() {
        this.div = document.createElement('div');
        this.div.classList.add(this.type === 'success' ? 'success' : 'error');
        this.div.innerHTML = this.message;
        notificationWrap.appendChild(this.div);
        setTimeout(this.delete.bind(this), 3000);
    }

    delete() {
        notificationWrap.removeChild(this.div);
    }
}

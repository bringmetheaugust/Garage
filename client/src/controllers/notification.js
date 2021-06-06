export default class Notification {
    static notificationWrap = document.getElementById('notifications');
    static alertTypes = {
        success: 'success',
        error: 'error'
    }

    constructor(type, message) {
        this.type = type;
        this.message = message;
        this.create();
    }

    create() {
        if (Notification.notificationWrap.children.length) Notification.notificationWrap.innerHTML = '';

        this.div = document.createElement('div');
        this.div.classList.add(Notification.alertTypes[this.type]);
        this.div.innerHTML = this.message;

        Notification.notificationWrap.appendChild(this.div);
        setTimeout(this.delete.bind(this), 5000);
    }

    delete() {
        Notification.notificationWrap.removeChild(this.div);
    }
}

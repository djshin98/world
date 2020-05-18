class Eventable {
    constructor() {
        this.listeners = {};
        this.key = 1;
    }
    listenEvent(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = {};
        }
        let key = "_" + ((this.key++) + 1);
        this.listeners[event][key] = callback;
        return { event: event, key: key };
    }
    removeEvent(eventkey) {
        if (eventkey && eventkey.event && eventkey.key) {
            if (this.listeners[eventkey.event] && this.listeners[eventkey.event][eventkey.key]) {
                this.listeners[eventkey.event][eventkey.key] = null;
                delete(this.listeners[eventkey.event][eventkey.key]);
            }
        }
    }
    fireEvent(event, value) {
        let evts = this.listeners[event];
        if (evts) {
            Object.keys(evts).forEach((key) => {
                evts[key](value);
            })
        }
    }
}
module.exports = { Eventable: Eventable };
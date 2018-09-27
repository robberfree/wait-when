export default class EventDispatcher {
  constructor() {
    /**
     * {type:[listener]}
     */
    this.listeners = {};
  }

  addEventListener(type, listener) {
    const listenersOfType = this.listeners[type];
    if (Array.isArray(listenersOfType)) {
      listenersOfType.push(listener);
    } else {
      this.listeners[type] = [listener];
    }
  }

  dispatchEvent(type) {
    const listenersOfType = this.listeners[type];
    if (Array.isArray(listenersOfType)) {
      listenersOfType.forEach(listener => {
        listener();
      });
    }
  }
}

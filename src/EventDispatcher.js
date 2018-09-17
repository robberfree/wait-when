/**
 * 事件调度类
 * 需要侦听/发射事件的对象都需要继承该类
 */
export default class EventDispatcher {
  constructor() {
    /**
     * {type:[listener]}
     */
    this.listeners = {};
  }
  /**
   * 添加事件侦听
   * @param {string} type
   * @param {function} listener
   */
  addEventListener(type, listener) {
    const listenersOfType = this.listeners[type];
    if (Array.isArray(listenersOfType)) {
      listenersOfType.push(listener);
    } else {
      this.listeners[type] = [listener];
    }
  }
  /**
   * 派发该类型的事件
   */
  dispatchEvent(type) {
    const listenersOfType = this.listeners[type];
    if (Array.isArray(listenersOfType)) {
      listenersOfType.forEach(listener => {
        listener();
      });
    }
  }
}

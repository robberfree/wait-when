import EventDispatcher from './EventDispatcher';
import isEqual from 'lodash/isEqual'; //支持Tree Sharking
/**
 * 条件
 * @param {any} 当前值
 * @param {any} 条件满足值
 */
export default class Condition extends EventDispatcher {
  constructor(fulfillValue, value) {
    super();

    this.fulfillValue = fulfillValue;
    this.value = value;
  }

  fulfill() {
    return isEqual(this.fulfillValue, this.value);
  }

  get value() {
    return this._value;
  }

  set value(_value) {
    this._value = _value;
    //设置值时，派发verify事件
    this.dispatchEvent('verify');
  }
}

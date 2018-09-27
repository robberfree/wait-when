import EventDispatcher from './EventDispatcher';
import isEqual from 'lodash/isEqual'; //support tree sharking
import { watch, unwatch } from 'melanke-watchjs';

export default class Condition extends EventDispatcher {
  constructor(fulfillValue, value) {
    super();
    //set default value base on fulfillValue
    if (value === undefined) {
      if (Array.isArray(fulfillValue)) {
        value = [];
      } else if (isObject(fulfillValue)) {
        //https://github.com/melanke/Watch.JS#by-default-new-attributes-will-be-ignored
        value = {};
        Object.getOwnPropertyNames(fulfillValue).forEach(propName => {
          value[propName] = undefined;
        });
      }
    }
    this.fulfillValue = fulfillValue;
    this.value = value;
  }

  fulfill() {
    return isEqual(this.fulfillValue, this.value);
  }

  dispatchVerifyEvent = () => {
    this.dispatchEvent('verify');
  };

  get value() {
    return this._value;
  }

  set value(_value) {
    if (Array.isArray(_value) || isObject(_value)) {
      //dispatch when array or object changed
      //if you change array like this:arr[0]='hello world' will not invoke watch
      watch(_value, this.dispatchVerifyEvent);
    } else {
      //unwatch old value
      unwatch(this.value, this.dispatchVerifyEvent);
    }

    this._value = _value;
    //dispatch when set new value
    this.dispatchVerifyEvent();
  }
}

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

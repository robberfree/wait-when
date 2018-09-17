## wait-when

Execute when condition fulfill.

## Usage

- Node

> npm i wait-when

- Browser

```html
<script src="wait-when.min.js"></script>
```

It has a global variable "ww".

```js
var Condition = ww.Condition;
var WaitWhen = ww.WaitWhen;
```

## API

1. Condition(fulfillValue,value)

```js
var c = new Condition(true, false);
```

2. Condition.value

(need rewrite?)

Set condition's value.
You should create a new value and assign to it.
Don't change the old value directly.

```js
c.value = true;
```

3. WaitWhen

```js
var ww = new WaitWhen();
```

4. WaitWhen.then(conditions,cb)

```js
www.then(c, function() {
  console.log('the condition named c fulfilled');
});
www.then([c1, c2, c3], function() {
  console.log('all conditions fullfilled');
});
```

## Build

If you want to build by yourself.please run

> npm run build

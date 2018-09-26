## wait-when

Execute when condition fulfill.

## Usage

- Node

> npm i wait-when

```js
const { Condition, WaitWhen } = require('wait-when');
```

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

Set condition's value.

You can create a new value and assign to it.(Recommended)

For array and object value you can also change it directly.

```js
c.value = true;
c.value.push('item');
c.value.key = 'value';
```

3. WaitWhen

```js
var ww = new WaitWhen();
```

4. WaitWhen.then(conditions,cb)

```js
ww.then(c, function() {
  console.log('the condition named c fulfilled');
});
ww.then([c1, c2, c3], function() {
  console.log('all conditions fullfilled');
});
```

## Build

If you want to build by yourself.please run

> npm run build

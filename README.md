## wait-when

Execute when condition fulfill.

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

3. WaitWhen.then(conditions,cb)

```js
www.then(c, function() {
  console.log('the condition named c fulfilled');
});
www.then([c1, c2, c3], function() {
  console.log('all conditions fullfilled');
});
```

##

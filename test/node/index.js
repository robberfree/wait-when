var { Condition, WaitWhen } = require('../../dist/wait-when');

var c1 = new Condition(10000, 0);
var c2 = new Condition(true, 0);
var c3 = new Condition({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 });
new WaitWhen().then([c1, c2, c3], function() {
  console.log('条件满足，执行');
});
setTimeout(function() {
  console.log('c1的值设置为10000');
  c1.value = 10000;
}, 1000);

setTimeout(function() {
  console.log('c2的值设置为true');
  c2.value = true;
}, 2000);

setTimeout(function() {
  console.log('c3的值设置为{a:1,b:2,c:3}');
  //需要直接设置value的值，不能修改,c3.value.c=3;
  c3.value = { a: 1, b: 2, c: 3 };
}, 2000);

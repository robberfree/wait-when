var { Condition, WaitWhen } = require('../dist/wait-when');

test('one condition before WaitWhen.then', done => {
  var c = new Condition(true);
  new WaitWhen().then(c, function() {
    done();
  });
  c.value = true;
});
test('one condition after WaitWhen.then', done => {
  var c = new Condition(true);
  c.value = true;
  new WaitWhen().then(c, function() {
    done();
  });
});
test('one condition setTimeout', done => {
  var c = new Condition('hello world', '');
  new WaitWhen().then(c, function() {
    done();
  });
  setTimeout(function() {
    c.value = 'hello world';
  }, 2000);
});
test('multi conditions', done => {
  var c1 = new Condition(true, false);
  var c2 = new Condition('hello world', '');
  var c3 = new Condition(100, 0);
  var c4 = new Condition(null);
  var c5 = new Condition(undefined);
  var c6 = new Condition([1, 2, 3, 4]);
  var c7 = new Condition({ a: 1, b: 2, c: 3 });

  new WaitWhen().then([c1, c2, c3, c4, c5, c6, c7], function() {
    done();
  });

  c1.value = true;
  setTimeout(function() {
    c2.value = 'hello world';
  }, 100);
  setTimeout(function() {
    c3.value = 100;
  }, 100);
  setTimeout(function() {
    c4.value = null;
  }, 200);
  setTimeout(function() {
    c5.value = undefined;
  }, 300);
  setTimeout(function() {
    c6.value = [1, 2, 3, 4];
  }, 400);
  setTimeout(function() {
    c7.value = { a: 1, b: 2, c: 3 };
  }, 400);
});
test('array condition 1', done => {
  var c1 = new Condition([1, 2, 3, 4, 5], [1, 2, 3, 4]);
  var c2 = new Condition([1, 2, 3, 4, 5]);
  var c3 = new Condition([1, { a: 1, b: 2, c: 3 }]);
  var c4 = new Condition(
    [1, { a: 1, b: 1, c: { i: 1 } }],
    [1, { a: 1, b: 1, c: { i: 2 } }]
  );

  new WaitWhen().then([c1, c2, c3, c4], function() {
    done();
  });

  c1.value.push(5);
  for (var i = 1; i <= 5; i++) {
    c2.value.push(i);
  }
  c3.value[0] = 1;
  c3.value[1] = { a: 1, b: 2, c: 3 };

  setTimeout(function() {
    c4.value[1].c.i = 1;
  }, 1000);
});
// test('array condition 2', done => {
//   var c1 = new Condition([1, 2, 3, 4, 5], [1, 2, 3, 4]);
//   new WaitWhen().then(c1, function() {
//     done();
//   });
//   //if you change array like this
//   //Watch.js can not detect change
//   c1.value[4] = 5;
// });
test('object condition', done => {
  var c1 = new Condition({ a: 1, b: 2, c: 3 });

  new WaitWhen().then([c1], function() {
    done();
  });

  c1.value.a = 1;
  c1.value.b = 2;
  c1.value.c = 3;
});

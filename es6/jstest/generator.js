//Generator函数是协程在ES6的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

// 整个Generator函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。Generator函数的执行方法如下。
function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }

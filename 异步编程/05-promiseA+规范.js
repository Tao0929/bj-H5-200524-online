
/**
什么是Promise规范。
其实Promise 规范有很多，如Promise/A，Promise/B，Promise/D 以及 Promise/A 的升级版 
Promise/A+。ES6中采用了 Promise/A+ 规范。

Promise/A+ 是 Promise 最小的一个规范，它包括
1、Promise 状态
2、then 方法
3、Promise解析过程

规范出现的原因
1、我们不知道异步请求什么时候返回数据，所以我们就需要些回调函数。
但是在某些情况下我们需要知道数据是在什么时候返回的，然后进行一些处理。
2、当我们在异步回调里面处理的操作还是异步操作的时候，这样就形成了异步回调的嵌套


Promise标准解读

(1) 一个promise的当前状态只能是pending、fulfilled和rejected三种之一。
状态改变只能是pending到fulfilled或者pending到rejected。状态改变不可逆。

(2) promise的then方法接收两个可选参数，表示该promise状态改变时的回调
(promise.then(onFulfilled, onRejected))。then方法返回一个promise，
then 方法可以被同一个 promise 调用多次。

Promise/A+并未规范race、all、catch方法，这些是ES6自己规范的。

 */
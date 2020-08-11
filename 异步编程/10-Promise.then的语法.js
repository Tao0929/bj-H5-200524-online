
/**
 * promise.then(onFullfilled,onRejected) 微任务
 * onFullfilled,onRejected 都是回调函数 resove,reject调用
 *
 * 1. then支持链式调用，下一个then接受上一个then返回的promise
 * 2. then 可以retun 一个新的promise
 */

 let promise = new Promise((resolve,reject)=>{
    resolve("ok!")
 })

 //then
 promise
 // then的穿透效果
    .then()
    .then(value=>{
        console.log(value)
        //@addtodo
       // return 1  // reurn 包装一个新的默认是成功的promise
        // return new Promise((resolve,reject)=>{
        //    reject(1)
        // })
        throw new Error("throw errow!")
    })
    .then(value=>{
        console.log(value)
    },reason=>{
        console.log(reason)
    })
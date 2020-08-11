

/**
 * 改变状态产生微任务 resolve reject
 * 状态改变后不可逆，pending->fullfilled pending->rejected
 */

// promise 代表一个异步任务
// pending 开始状态， fulfilled 完成状态 rejected 失败状态
// pending-> fulfilled rejected 
 let promise = new Promise((resovle,reject)=>{
     //@todo
    //  setTimeout(()=>{
    //     //  resovle("success")
    //     reject("fail!!!")
    //  },2000)
    resovle("ok")
    //reject("fail")
    // throw new Error("出错了")
 })

 //resovle() 1.  修改状态 pending- resolved 2. then onFulfilled
 //reject() 1. pending->rejected 2. then onRejected

 promise.then(
     value=>{ //resolved
         console.log(1)
     },
     reason=>{ //rejected
         console.log(promise)
     }
 )
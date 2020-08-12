

/**
 *  Promise((resolve,reject)=>{})
 *     .then()
 *     .then()
 *     .catch()
 *     .then()
 *     .catch()
 *     .finally() // 无论成功或者失败都会执行
 * 
 * // ES6 Promise类
 * resolve reject then catch finally
 */

/**
 * Promise对象用来封装一个异步任务，这个任务可能成功或者失败
 */


// Promise的语法
// Promise的实例创建 executor function(resolve,reject){}
// executor 是同步回调，
// 参数: resovle reject 
// resolve 回调函数，当这个异步执行成功的回调函数
// reject 回调函数 当这个异步任务执行失败的回调函数
// 

//promise callback
let promise = new Promise((resolve, reject) => {
    //@异步处理逻辑 
    //成功了
    // resolve("成功执行了") //成功信息
    resolve("失败了") //失败的原因
})

//接受promise的处理结果 then()方法接受resolve/reject的结果
// promise.then(
//     value => {
//         console.log(value)
//     },
//     reason => {
//         console.log(reason)
//     }
// )

// hanborger

function KerdarkitShop(num){
   //五份hanborger
   return new Promise((resolve,reject)=>{
        if(num <5 ){
            setTimeout(()=>{
                resolve("hanborger做好了")
            },5000)
        }else {
            reject("没有那么多")
        }
   })
}



KerdarkitShop(4).then(value=>{
    console.log(value)
},reason=>{
    console.log(reason)
})

function KerdarkitShopCallBack(num,resolve,reject){
    //五份hanborger
    if(num <5){
        setTimeout(()=>{
            resolve("hanborger做好了")
        },5000)
    }else {
        reject("没有那么多")
    }
 }

 
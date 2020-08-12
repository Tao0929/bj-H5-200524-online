

/**
 * Promise.all([p1,p2]) 
 * 
 * 如果都成功了，返回成功的结果，但是如果有一个失败，就是失败的
 * all 必须是所有都是resolved状态
 */

let p1 = new Promise((resolve,reject)=>{
    resolve(1)
})
 
let p2 = new Promise((resolve,reject)=>{
    resolve(2)
})
 
Promise.all([p1,p2])
   .then(
    values=>{
        console.log(values)
    },
    reason=>{
        console.log(reason)
    }
   )

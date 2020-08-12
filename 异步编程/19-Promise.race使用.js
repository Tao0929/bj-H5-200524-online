/**
 * Promise.race([p1,p2])
 * 多个promise,只返回时间最快的一个promise结果
 */

 // race 

 let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(2)
    },100)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },100)
})

Promise.race([p1, p2,p3])
    .then(
        values => {
           console.log(values)
        },
        reason => {
            console.log(reason)
        }
    )

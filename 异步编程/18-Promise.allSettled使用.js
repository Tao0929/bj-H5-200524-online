

/**
 * Promise.allSettled([p1,p2]) 
 * 无论是否resolved状态，都返回结果
 */

let p1 = new Promise((resolve, reject) => {
    resolve(1)
})

let p2 = new Promise((resolve, reject) => {
    reject(2)
})

Promise.allSettled([p1, p2])
    .then(
        values => {
            console.log(values)
            let resolvearr = values.filter(item=>{
                return item.status === 'fulfilled'
            })
            console.log(resolvearr)
        },
        reason => {
            console.log(reason)
        }
    )

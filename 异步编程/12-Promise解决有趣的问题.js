
/**
 * Promise 实现红绿灯
 * 利用 Promise 实现一个元素先红色两秒在黄色一秒再绿色三秒，不断循环。
 */

// Promise Promisify -> task link


/**
 * task link
 * 红色两秒
 * 黄色一秒
 * 绿色三秒
 */

let light = document.querySelector(".light")


//then es6 generator async
function lightTask(color, time) {
    return new Promise((resolve, reject) => {
        light.style.backgroundColor = color
        setTimeout(() => {
            resolve()
        }, time)
    })
}

(function restart(){
    lightTask("red", 2000)
    .then(value => {
        // red灯结束
        return lightTask("yellow", 1000)
    })
    .then(value => {
        // yellow灯结束
        return lightTask("green", 3000)
    })
    .then(value => {
         return restart()
    })
})()



// function redTask(){
//     return new Promise((resolve,reject)=>{
//         console.log("开始红灯")
//         light.style.backgroundColor = "red"
//         setTimeout(()=>{
//            resolve(yellowTask())
//         },2000)
//     })
// }


// function yellowTask(){
//     return new Promise((resolve,reject)=>{
//         console.log("开始黄灯")
//         light.style.backgroundColor = "yellow"
//         setTimeout(()=>{
//             resolve(greenTask())
//         },1000)
//     })
// }

// function greenTask(){
//     return new Promise((resolve,reject)=>{
//         console.log("开始绿灯")
//         light.style.backgroundColor = "green"
//         setTimeout(()=>{
//             resolve(redTask())
//         },3000)
//     })
// }


// redTask()
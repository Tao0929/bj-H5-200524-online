
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

let lights = document.querySelector(".light")

function light(color, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            var div = document.getElementsByTagName("div")[0]
            div.style.backgroundColor = color
            resolve(color)
        }, timer)
    })
}

 
// (function restart() {
//     light('red', 2000).then((data) => {
//         console.log(data,new Date().getSeconds());
//         return light('yellow', 1000)
//     }).then((data) => {
//         console.log(data,new Date().getSeconds());
//         return light('green', 3000)
//     }).then((data)=>{
//         console.log(data,new Date().getSeconds());
//         return restart()
//     })
// })();
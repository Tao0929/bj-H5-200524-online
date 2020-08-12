
/**
 *  promise((resolve,reject)=>{})
 *     .then()
 *     .then()
 *     .catch()
 *     .then()
 *     .catch()
 *     .finally() // 无论成功或者失败都会执行
 */

function ajax(url) {
    return new Promise((resolve, reject) => {
        console.log("1111")
        // ajax对象
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)
        xhr.send()
        //level1 level2
        xhr.onloadstart = function () {
            console.log("begin request...")
        }
        xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function (err) {
            reject(err)
        }
    })
}

ajax("http://localhost:3000/user")
 .then(data=>{
     console.log(data)
 })
 .finally(()=>{
     document.querySelector("#loading").style.display ="none"
 })

//loading....

//  let promise = new Promise((resole,reject)=>{
//      reject("错误了")
//  })

//  promise
//    .then()
//    .catch(err=>{

//    })
//    .finally(()=>{
//        console.log("任务执行完了")
//    }) 
/**
 * Promise解决callback 
 * 只要有 callback都可以使用promise promisify
 */

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, time)
    })
}

delay(1000).then(value => {
    console.log(value)
})

// i/o
// image Filereader blobs

function loadImages() {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = "timg.jpg"
        //成功
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function (err) {
            reject(err)
        }
    })
}

loadImages().then((value)=>{
    document.body.appendChild(value)
})


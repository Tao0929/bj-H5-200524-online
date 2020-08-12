

// xmlhttprequest  

function ajaxCb(url, cb) {
    // ajax对象
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.send()
    //level1 level2
    xhr.onloadstart = function () {
        console.log("begin request...")
    }
    xhr.onload = function () {
        cb(JSON.parse(xhr.responseText))
    }
    xhr.onloadend = function(){
        
    }
    xhr.onerror = function (err) {
        console.log(err)
    }
}


// ajax userid -> userid-> permiissions -> menus
// ajaxCb("http://localhost:3000/user", (data) => {
//     let user = data.name;
//     console.log(user)
//     //@todo
//     ajaxCb("http://localhost:3000/role?id="+user, (data) => {
//         let role = data
//         console.log(role)
//         ajaxCb("http://localhost:3000/resources?", (data) => {
//               console.log(data)
//         })
//     })
// })


function ajax(url) {
    return new Promise((resolve, reject) => {
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

//链式 
ajax("http://localhost:3000/user")
    .then(res => {
        console.log(res) //user
        return res;
    })
    .then(res => {
        console.log(res)
        return ajax("http://localhost:3000/role?id=" + res.name) // role
    })
    .then(res => {
        console.log(res) //role
        return ajax("http://localhost:3000/resources?rid=" + res.roleid)
    })
    .then(res => {
        console.log(res); // resources
    })

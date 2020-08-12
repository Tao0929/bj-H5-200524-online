


 /**
  * ES6 class
  * 实例方法
  * then resolve reject catch finnaly 
  * function prototype
  * 静态方法
  * resolve reject all allsettled race 
  * 通过类名访问的方法
  */

//  Promise.resolve()
//  Promise.reject()
//  Promise.all()
//  Promise.race()
//  Promise.all()

// 1 . Promise.resolve 永远是成功的promise

//axios Promise.resolve()
// Promise.resolve(1)
//   .then(value=>{
//       console.log(value)
//       //return 2  //Promise.resolve(2)
//       return Promise.resolve(2)
//   })
//   .then(value=>{
//       console.log(value)
//   })

Promise.reject("fail") //永远是失败的promise
   .then(null,reason=>{
       console.log(reason)
       return 2 //Promise.resolve(2)
   })
   .then(value=>{
       console.log(value)
   })

// resolve(value){
//   return new Promise((resolve,reject)=>{
//        resolve(value)
//   })
// }


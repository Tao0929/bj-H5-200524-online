
/**
 * 07-Promise微任务处理机制
 * 宏任务-》宏任务队列
 * 微任务-> 微任务队列
 */

 // event loop 
 
 /**
  * 宏任务队列 ：[4]
  * 微任务队列:  [5]
  */

 
setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve=>{
    console.log(1); //同步代码
    for(let i =0;i<10000;i++){
        //resolve() then 添加到微任务队列
        i == 9999 && resolve();
    }
    console.log(2)
}).then(()=>{
    console.log(5)
})

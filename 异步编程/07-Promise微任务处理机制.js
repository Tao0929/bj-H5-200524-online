
/**
 * 07-Promise微任务处理机制
 */

 
setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve=>{
    console.log(1);
    for(let i =0;i<10000;i++){
        i == 9999 && resolve();
    }
    console.log(2)
}).then(()=>{
    console.log(5)
})

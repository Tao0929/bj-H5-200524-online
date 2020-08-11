
/**
 * event loop
 * 任务队列: 宏任务、微任务
 * 
 * 
 * 宏任务: 
 *   从浏览器的角度来看，宏任务代表一个个离散的、独立工作单元。运行完任务后，
 *   浏览器可以继续其他调度，如重新渲染页面的UI或执行垃圾回收。
 *   常见的宏任务有: 整体代码script,setTimeout, setInterval, setImmediate,
 *    requestAnimationFrame, I/O, UI rendering.
 *   1.宏任务是参与了事件循环的异步任务。
 * 
 * 微任务: 
 *   常见的微任务有:process.nextTick, Promises, Object.observe, MutationObserver。
 *   直接在 Javascript 引擎中的执行的，没有参与事件循环的任务
 *   1.微任务是没有参与事件循环的“异步”任务。
 */

/**
 * javascript runitim  -> 同步代码-> 
 * 宏任务队列 macrotask []
 * 微任务队列 microtask []
 * 
 * eventloop 如何执行的
 * 同步代码 立即执行
 * 异步代码: 
 * 微任务的优先级大于宏任务,所有的微任务执行完后才进入下一个宏任务
 * 当宏任务中包含微任务，首先执行当前宏任务，立即执行下面的所有微任务
 */

// output 【 fnc1 func2 func3 func task2 func task1 c】

/**
 * 宏任务队列: [ func task2 func task1 ]]
 * 微任务队列: [ micro task1]
 */

function func1() {
    console.log('fnc1');
    setTimeout(() => {
        console.log("func task1")
        
    }, 1000);
}

function func2() {
    func1();
    console.log('fnc2');
    setTimeout(() => {
        new Promise((resolve,reject)=>{
            resolve("c")
        }).then(value=>{
            console.log(value)
        })
        console.log("func task2")
    }, 100);
}

function func3() {
    func2();
    console.log('fuc3');
}

func3();
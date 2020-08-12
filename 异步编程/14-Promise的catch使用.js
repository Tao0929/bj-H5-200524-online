

/**
 * .then().catch(e){} 处理错误
 *  Promise try...catch(err) 
 */

new Promise((resolve, reject) => {

    throw new Error("报错了")

})
    .catch((err) => {
        console.log(err)
    })
    .then()
    .catch((err) => {
        console.log(err)
    })



try {
    throw new Error("报错了")
} catch (err) {
    //@todo
}
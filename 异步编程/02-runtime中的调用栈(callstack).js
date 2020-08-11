/**
1) CallStack是一个栈结构，栈的特点是LIFO（后入先出）
2) 出栈入栈只会在一端（也就是栈顶）进行。
3) CallStack是用来处理函数调用与返回的。每次调用一个函数，
4) Javascript启动时，从文件或标准输入加载程序。加载完成时，
   Javascript运行时会生成一个匿名的函数，函数体就是输入的代码。
   这个函数就有点类似于C/C++中的`main()`函数，是我们的入口函数。
   我们姑且称之为`<main>`函数。
 */

 // in function 1 in function 2
function func1() {
    console.log('in function1');
}

function func2() {
    func1();
    console.log('in function2');
}

function func3() {
    func2();
    console.log('in function3');
}

func3();

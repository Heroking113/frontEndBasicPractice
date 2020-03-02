//1.回调函数(callback)：先执行主函数内容，再执行回调函数内容
setTimeout(function () {
    console.log("回调函数...");
},1000)

//2.Promise和回调函数的转换
new Promise((resolve, reject)=>{
    setTimeout(function () { //这个function是回调函数，要等过1000ms后才执行
        resolve("resolve结果..."); //resolve的结果导入到then方法中
        reject("reject结果..."); //reject的结果导入到catch方法中
    },1000)
}).then(res=>{console.log(res)}).catch(e=>console.log(e));

//3.定义一个promise对象
var p1 = ()=>new Promise((res, rej)=>setTimeout(()=>res("p1的返回结果"),1000));

//4.async await关键字：
// 4.1 async是用来修饰函数的
// 4.2 await：
//  4.2.1作用：await可以获取promise的resolve值,await是then函数的语法糖
//            （  如果要拿到promise的reject值，需要用try...catch...）
//  4.2.2使用场景：当且仅当async修饰函数后，函数内才可以使用await
// 4.3 async+await是promise+then的语法糖
// 4.4 好处：使用async+await可以很好的避免”回调嵌套“的问题。
q1();
async function q1() {
    try{
    var res = await p1(); //获取promise的resolve值
    console.log(res);
    }catch (e) {
        console.log(e);
    }
}
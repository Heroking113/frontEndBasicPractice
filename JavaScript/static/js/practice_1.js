//1. 插入dom
/*str = "<h1>innerStr</h1>";
document.getElementById("result").innerHTML=str;*/

//2. 动态写入数组内容
/*var arr = new Array();
arr[0]=1;
arr[1]=3;
arr[2]=6;
document.write(arr[2], ",");*/

//3. 数字+字符串=字符串
/*var a=1;
var b="1";
var c=a+b;
document.write(c,",");*/

//4. “==”和“===”
//document.write(a==b, ",", a===b, ",");

//5. 函数
/*var sum = demo1(10,20);
document.write(sum, ",");
function demo1(a, b) {
    return a+b;
}*/

//6. 局部变量和全局变量
var n=1; //全局变量
function demo2() {
    var d="D"; //局部变量
    e="E"; //全局变量(该变量成为全局变量的前提是：该函数已经被调用)
    return d+e;
}
var de = demo2();
//alert(e);
/*document.write(de, ",");*/

//7. 异常的捕获
function demo3() {
    try{
        document.write(str3); //str3 is not defined
    }catch (err) { //catch 捕获所有异常
        alert(err);
    }
}
function demo4() {
    try {
        var val = document.getElementById("txt").value;
        if (val == "") {
            throw "please input!"; //自定义异常
        }
    }catch (err) { //捕获throw的异常
        alert(err);
    }
}
//demo3();

//8. 事件，比如：单击事件(onClick)、鼠标经过事件(onMouseOver)、鼠标移出事件(onMouseOut)、
// 文本内容改变事件(onChange)、// 文本框选中事件(onSelect)、光标聚集事件(onFocus)、
// 移开光标事件(onBlur)、网页加载事件(onLoad)、关闭网页事件(onOnload)等等。。。
function onOver(ooj) { //鼠标经过
    ooj.innerHTML = "hello";
}
function onOut(ooj) { //鼠标移出
    ooj.innerHTML = "world";
}
function demo5(bg) {
    alert("content changed!");
}
function demo6(bg) {
    bg.style.background="red";
}

//9. DOM操作输出流：
//9.1 注意：绝对不要在文档加载完成之后使用document.write(),这会覆盖该文档
//9.2 寻找元素：id/标签名
//9.3 改变html内容
function demo7(){ //根据标签名改变显示的值
    var nv = document.getElementsByTagName("h3");
    nv[0].innerHTML = "heroking";
}
function demo8(){ //修改标签内的属性
    document.getElementById("aid").href="http://www.bilibili.com";
}
function demo9(){ //通过DOM操作改变css样式
    document.getElementById("div").style.background="red";
}

//10. 事件流：
//  事件冒泡：由最具体的元素接收，然后逐级向上传播至最不具体的元素（文档）【用的较多】
//  事件捕获：由最不具体的节点接收，然后逐级向下传播至最具体的节点

//11. 事件处理：
//11.1 HTML事件处理：直接添加到HTML结构中(比如说：在按钮中加入"点击事件"等)
//11.2 DOM0级事件处理（当有多个DOM0级事件处理程序时，前面的会被覆盖）：
//  把一个函数赋值给一个事件处理程序属性
/*demo10();
function demo10(){
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function(){
        console.log("DOM0级事件处理程序");
    }
    /!*btn1.onclick = function () {
        console.log("DOM0级事件处理程序1");
    }*!/
    //btn1.onclick=null; //清除该DOM0级事件处理程序
}*/
//11.3 DOM2级事件处理（当有多个DOM2级事件处理程序时，前面的不会被覆盖）：
//  11.3.1 addEventListener("事件名"，"事件处理函数"，"布尔值");
//     true:事件捕获；
//     false:事件冒泡；
//  11.3.2 removeEventListener();
/*function demo11() {
    var vas = document.getElementById("btn");
    vas.addEventListener("click", hello);
    vas.addEventListener("click", world);
    vas.removeEventListener("click", hello);
}*/
function hello() {
    console.log("hello");
}
function world(){
    console.log("world");
}
//11.4 IE事件处理程序（IE版本<=8）：attachEvent、detachEvent
/*demo12();
function demo12(){
    var btn2 = document.getElementById("btn2");
    if(btn2.addEventListener){
    btn2.addEventListener("click", hello);
    }else if(btn2.attachEvent){
        btn2.attachEvent("onclick", hello);
    }else{
        btn2.onclick = hello();
    }
}*/

//12 事件对象：
//12.1 在触发DOM事件的时候都会产生一个对象
//12.2 事件对象Event：
//12.2.1 type:获取事件类型
//12.2.2 target:获取事件目标
//12.2.3 stopPropagation():阻止事件冒泡
//12.2.4 preventDefault:阻止事件默认行为

/*document.getElementById("btn3").addEventListener("click", showTypeTarget);
document.getElementById("div").addEventListener("click", showDiv);
document.getElementById("aid").addEventListener("click", showA);
function showTypeTarget(event){
    console.log("type:",event.type); //1.获取事件类型
    console.log("target:",event.target);//2.获取事件目标
    event.stopPropagation(); //4.阻止事件冒泡
}
function showDiv(event) {
    console.log("事件冒泡:", event.target);//3.事件冒泡
}
function showA(event) {
    event.stopPropagation();//4.阻止事件冒泡
    event.preventDefault(); //5.阻止事件默认行为
}*/

//13.内置对象
//13.1 对象基础：
//方式一:定义并创建对象实例
people = new Object(); //最大的对象，所有对象的父类
people.name="zhangsan";
people.age = 20;
people1={name:"zhangsan", age:20};
//方式二：使用函数来定义对象，然后创建新的实例对象（该方法使用较多）
function people2(name, age){
    this.name = name;
    this.age = age;
}
son=new people2("zhangsan",20);
//document.write("name:", son.name, "  age:", son.age);
//13.2: String对象：
var str = "hello world"; //单引号或双引号均可
console.log("location:",str.indexOf("world")); //查找字符串：如果存在则返回位置，不存在则返回-1
console.log("匹配：", str.match("world")); //匹配字符串：存在则返回该字符串，不存在则返回null
//replace：替换字符串
//toUpperCase()/toLowerCase():字符串大小写转换
var str1 = "hello, world";
var s = str1.split(",");//根据特定标志将字符串转换为数组
console.log("字符串转换为数组：", s[1]);

//13.3: Date对象：设值、获取值
//13.4：Array数组对象：合并、排序、追加、翻转
//13.5：Math对象：。。。

//13.6 DOM对象控制HTML：https://www.cnblogs.com/koto/p/5161488.html
//其中：获取网页尺寸，offsetHeight(不包含滚动条)/scrollHeight(包含滚动条)
function getSize() {
    var owidth = document.body.offsetWidth || document.documentElement.offsetWidth; //兼容所有浏览器
    var oheight = document.body.offsetHeight || document.documentElement.offsetHeight;
    var swidth = document.body.scrollWidth || document.documentElement.scrollWidth;
    var sheight = document.body.scrollHeight || document.documentElement.scrollHeight;
    document.write(owidth,",",oheight,",",swidth,",",sheight);
}
//getSize();

//14.浏览器对象
//14.1 window对象：
// 14.1.1 window对象是BOM对象的核心，window指当前浏览器窗口；
// 14.1.2 window尺寸（不包含工具栏和滚动条）：
// window.innerHeight-浏览器窗口的内部高度；window.innerWidth-浏览器窗口的内部宽度
// 14.1.3 window方法：window.open():打开新窗口；window.close():关闭当前窗口

//14.2 计时器
// 14.2.1 setInterval-间隔指定的毫秒数不停的执行指定代码（clearInterval-停止setInterval方法执行的函数代码）
/*var thistime = setInterval(function(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("ptime").innerHTML=t;
}, 1000);
function stopTime(){
    clearInterval(thistime);
}*/
// 14.2.2 setTimeout-等待指定的毫秒数后执行指定的代码（clearTimeout-停止用于执行setTimeout方法的函数代码）
/*
var win;
function myWin(){
        alert("hello");
    win = setTimeout(function(){
        myWin()
    }, 1200);
}
myWin();
function stopTime(){
    clearTimeout(win);
}*/

//14.3 History对象
// 14.3.1 window.history对象包含浏览器的历史url集合
// 14.3.2 方法：history.back()-同“点击回退按钮”
//              histroty.forward()-同“点击向前按钮”
//              history.go()-进入历史中的某个页面

//14.4 Location对象
// 14.4.1 window.location对象用于获取当前页面的地址（URL），并把浏览器重定向到新的页面
// 14.4.2 该对象属性：location.hostname-返回web主机的域名
//                    location.pathname-返回当前页面的路径和文件名
//                    location.port-返回web主机的端口
//                    location.protocol-返回所使用的web协议(http:// or https://)
//                    location.href-返回当前页面的url
//                    location.assgin-加载新的文档,也就是跳转到新页面
function getLoc(){
    //document.getElementById("ptime").innerHTML = window.location.hostname;
    //document.getElementById("ptime").innerHTML = window.location.pathname;
    //document.getElementById("ptime").innerHTML = window.location.port;
    //document.getElementById("ptime").innerHTML = window.location.protocol;
    //document.getElementById("ptime").innerHTML = window.location.href;
    //window.location.assign("page1.html");
}

//14.5 Screen对象
//属性：screen.availWidth-可用屏幕宽度
//      screen.availHeight-可用屏幕高度
//      screen.Width-屏幕宽度
//      screen.Height-屏幕高度
//document.write(screen.availHeight,",",screen.availWidth,",",screen.height,",",screen.width);

//15.瀑布流效果：waterfall部分

//16.js的面向对象
// 16.1 函数构造器构造对象
function Person(name) { //初始化对象
    this._name = name;
}
Person.prototype={ //设置对象属性和方法
    age:21,
    eat:function () {
        console.log(this._name+" eat");
    }
}

var p = new Person("hero"); //实例化对象
p.eat(); //调用对象属性或方法

// 16.2 继承
function Stu(name) {
    this._name = name;
}
Stu.prototype = new Person();
var superEat = Stu.prototype.eat;
//复写父类方法：会覆盖父类方法
Stu.prototype.eat = function () {
    superEat.call(this);//复写父类方法之后，调用父类的同名方法
    console.log("stu-"+this._name+"-eat");
};
var stu1 = new Stu("hero");
stu1.eat();

//16.3 封装（隐藏）对象
(function () {
    function People(name) { //初始化对象
    this._name = name;
    }
    People.prototype={ //设置对象属性和方法
        age:21,
        drink:function () {
            console.log(this._name+" drink");
        }
    };
    window.People = People; //把对象开放给外部使用的方式
}());
(function () {
   function Teacher(name) {
       this._name=name;
   }
    Teacher.prototype = new People();
    var superDrink = Teacher.prototype.drink;
    Teacher.prototype.drink=function() {
        superDrink.call(this);
        console.log(this._name+"-drink");
    };
    window.Teacher = Teacher;
}());

var te = new Teacher("teacher");
te.drink();

// 16.4 对象的另一种写法
(function () {
    function Animal(name) {
        var _this = {};
        _this._name=name;
        _this.hello = function () {
            alert("hello,"+_this._name);
        }
        return _this;
    }
    window.Animal = Animal;
}());

(function () {
    function Dog(name) {
        var _this = Animal(name);
        var superHello = _this.hello;
        _this.hello = function () {
            superHello.call(this);
            alert("dogHello,"+this._name);
        };
        return _this;
    }
    window.Dog = Dog;
}());
var dog = new Dog("xiong");
dog.hello();


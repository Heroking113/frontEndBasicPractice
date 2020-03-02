// MVVM详解：https://blog.csdn.net/wuxy720/article/details/80151610

// // 1. 劫持一下数据看看情况
// var idom = nodeToFragment(document.getElementById("app"));
// console.log(idom);
// console.log(document.getElementById("app"));
// function nodeToFragment(node){
//     var fragment = document.createDocumentFragment();
//     var child;
//     while(child=node.firstChild){
//         fragment.appendChild(child);
//     }
//     return fragment;
// }

// 2.实现：内容绑定
// 编译函数：编译html
function compile(node, vm){
    var reg  = /\{\{(.*)\}\}/; //匹配{{xxx}}中的xxx
    //如果是元素节点
    if(node.nodeType===1){
        var attr = node.attributes;
        //解析元素节点的所有属性
        for(let i=0;i<attr.length;i++){
            if(attr[i].nodeName == 'v-model'){
                var name = attr[i].nodeValue;//看看是与哪一个数据相关
                node.addEventListener('input', function(e){
                    vm[name] = e.target.value; //将实例的text修改为最新值
                })
                node.value = vm[name]; //将data的值赋给该node
                node.removeAttribute('v-model');
            }
        };
    }
    //如果是文本节点
    if(node.nodeType===3){
        if(reg.test(node.nodeValue)){
            var name = RegExp.$1; //获取匹配到的字符串
            name = name.trim();
            //node.nodeValue = vm[name]; //将data的值赋给该node
            new watcher(vm, node, name); //不直接通过负值操作，而绑定一个订阅者
        }
    }
}

// 向碎片化文档中添加节点
function nodeToFragment(node, vm){
    var fragment = document.createDocumentFragment();
    var child;
    while(child=node.firstChild){
        compile(child, vm);
        fragment.appendChild(child);
    }

    return fragment;
}

// 3.实现 view==>model的绑定
// 响应式监听属性，一旦有赋新值就发生变化
function defineReactive(obj, key, val){
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get:function(){
            if(Dep.target){
                dep.addSub(Dep.target);
            }
            return val;
        },
        set:function(newVal){
            if(newVal === val){
                return;
            }else{
                val = newVal;
                dep.notify(); //一旦跟新马上通知
            }
        }
    })    
}

// 实现一个观察者函数，对于每一个实例，每一个属性都进行观察
function observe(obj, vm){
    for(let key of Object.keys(obj)){
        defineReactive(vm, key, obj[key]);
    }
}

// 4. 实现model==>view的绑定
//   （需要用到订阅/发布者模式：一对多，我们可能在页面中的多个位置访问data属性）
// watcher构造函数
function watcher(vm, node, name){
    Dep.target = this; //Dep.target是一个全局变量
    this.vm = vm;
    this.node = node;
    this.name = name;
    this.update();
    Dep.target = null;
}
watcher.prototype = {
    update(){
        this.get();
        this.node.nodeValue = this.value; //这是更改节点内容的关键
    },
    get(){
        this.value = this.vm[this.name];
    }
}

// dep构造函数
function Dep(){
    this.subs = [];
}

// 简单地实现发布/订阅
Dep.prototype = {
    addSub(sub){
        this.subs.push(sub);
    },
    notify(){
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}

// 创建实例化构造函数
function Vue(options){    
    this.data = options.data;
    var data = this.data;

    observe(data, this); //在该实例函数中，观察data中的所有属性值

    var id = options.el;
    var dom = nodeToFragment(document.getElementById(id), this);
    //处理完所有dom节点后，重新将内容添加回去
    document.getElementById(id).appendChild(dom);
}

var vm = new Vue({
    el: 'app',
    data:{
        text: "heroking"
    }
})
/*
1、proxy：元编程，动态代理
2、可追踪变化
MDN链接:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Meta_programming
*/
let handler =  {
    /*获取值*/
    get: function(target, name){
        return name in target ? target[name] : "没有找到该值";
    },
    /*设值*/
    set:function (target, name, value) {
        target[name] = value;
    },
    /*删除*/
    deleteProperty(target, name) {
        delete target[name];
    },
    defineProperty: function(target, prop, descriptor) {
        console.log('called: ' + descriptor);
        return true;
    }
};

let p = new Proxy({}, handler);
p.a =1;
p.b = 2;
/*
delete p.b;
console.log(p.a);
console.log(p.b);*/
for(let i in p){
    console.log("p->",i);
}

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc);
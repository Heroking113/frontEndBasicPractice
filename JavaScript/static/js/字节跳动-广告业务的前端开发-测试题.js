function Person(name){
    this.name=name;
}
Person.prototype={
    outputName:function(){
    console.log(this.name);
}
}

function Boy(name, age){
    Person.call(this, name);
    this.age = age;
}

function content(obj){
    function F(){}
    F.prototype=obj;
    return new F();
}

// 这两行有问题，其实是一个引用，
//Boy.prototype的改变会导致Person.prototype的改变
var superPrototype = Person.prototype;
Boy.prototype= superPrototpye;

var boy = new Boy("Bob", 11);
boy.outputName();
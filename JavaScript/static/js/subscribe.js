/*自定义发布订阅者模式类(闭包)*/
let _subscribe = function () {
    //=>sub:发布订阅类
    class Sub{
        constructor(){
            //=>创建一个事件池，用来存储后期需要执行的方法
            this.$pond = [];
        }
        //=>向事件池中追加方法，同时做”去重“处理
        add(func){
            let flag = this.$pond.some(item=>{
                return item===func;
            });
            !flag?this.$pond.push(func):null;
        }
        //=>从事件池中移除函数
        remove(func){
            let $pond = this.$pond;
            for(let i=0;i<$pond.length;i++){
                if($pond[i]===func){
                    //$pond.splice(i,1); //=>这样移除会导致数组塌陷，所以不能真移除，
                                       // 把要移除的项赋值为null即可
                    $pond[i]=null;
                    break;
                }
            }
        }
        //=>通知事件池中的方法，按照顺序依次执行
        fire(...args){
            let $pond = this.$pond;
            for(let i=0;i<$pond.length;i++){
                if(typeof $pond[i]!=='function'){
                    //=>此时删除null值
                    $pond.splice(i,1);
                    i--;
                    continue;
                }
                $pond[i].call(this, ...args); //调用自己,即：$pond[i]
            }
        }

    }

    return function subscribe() {
        return new Sub();
    }
}();

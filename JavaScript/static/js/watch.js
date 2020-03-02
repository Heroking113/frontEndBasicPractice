// 这种类是ES6的写法
class watcher{
    constructor(opts){ //构造函数
        this.$data = opts.data;
        this.$watch = opts.watch;
        for(let key in this.$data){
            this.setData(key, this.$data[key]);
        }
    }

    setData(_key, _val){
        // Object.defineProperty是用来监测对象的；this代表当前watcher类
        Object.defineProperty(this, _key, { 
            get:function(){ //这种函数是ES5的写法
                return _val
            },
            set(newV){ //这种函数是ES6写法
                const oldV = _val
                if(newV===oldV) return _val
                this.$watch[_key] && typeof this.$watch[_key]==='function' && (
                    this.$watch[_key].call(this, newV, oldV)
                )
            }
        })
    }
}

// //测试类是否正确
// var vm =new watcher({
//     data:{
//         a:1,
//         str:''
//     },
//     watch:{
//         a(newVal, oldVal){
//             console.log(oldVal, newVal)
//         }
//     }
// })

// setTimeout(function(){
//     vm.a=2
// },1000)
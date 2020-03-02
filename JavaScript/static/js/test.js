// console.log(parseFloat((0.1+0.2).toFixed(10)), 0.1+0.1===0.2)
var A = {a:1,b:2,c:3,d:"hello world"};  
for(let k in A) {  
    console.log(k);  
}
var an = JSON.stringify(A)=="{}"?true:false
console.log(an)
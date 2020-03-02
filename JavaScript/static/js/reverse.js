//1.反转数组
var arr = ["a","b","c","d","e","f","g","h"];
console.log("原数组为: \n",arr);
arr.reverse();
console.log("反转后的数组为：\n", arr);

//2.翻转字符串
var str = "abcdefg";
console.log("源字符串为：\n",str);
console.log("反转后的字符串为：\n", str.split("").reverse().join(""));

//3.翻转数字
var num = 12345;
console.log("原数字为：\n", num);
console.log("反转后的数字为：\n", parseInt(num.toString().split("").reverse().join("")));


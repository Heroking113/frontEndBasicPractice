/*生成器：每次操作函数，会返回yield后面的值，并记录，下次从上次的下一行开始执行*/
/*例1：*/
function* noOver3(number) { /* “*”表示是生成器 */
    yield number-10;
    yield number-20;
    yield number-40;
    throw Error("事不过3");
}

const no3 = noOver3(100);
console.info("第1次犯规，剩余成绩为： ",no3.next());
console.info("第2次犯规，剩余成绩为： ",no3.next());
console.info("第3次犯规，剩余成绩为： ",no3.next());
//console.info("第4次犯规，剩余成绩为： ",no3.next());

/*例2*/
const nums1 = [3,4,5];
const nums2 = [10,20,30];
function* chain(...nums_arr) {
    for(const nums of nums_arr){
        yield* nums;
    }
}
for(const num of chain(nums1, nums2)){
    console.info(num);
}

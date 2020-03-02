//js实现响应式布局
window.onload = function () {
    imgLocation("container", "box");
    //模拟被加载的数据
    var imgData = {"data":[{"src":"2.jpg"},{"src":"10.jpg"},{"src":"4.jpg"},{"src":"8.jpg"},{"src":"6.jpg"},]}
    //实现页面拉到底自动加载：首先要监听“滚动条”
    window.onscroll=function () {
        if(checkBottomFlag()){
            //创建图片节点
            var ldparent = document.getElementById("container");
            for(var i =0;i<imgData.data.length;i++){
                var ldcontent = document.createElement("div");
                ldcontent.className = "box";
                ldparent.appendChild(ldcontent);
                var boximg = document.createElement("div");
                boximg.className="box_img";
                ldcontent.appendChild(boximg);
                var img = document.createElement("img");
                img.src="static/images/"+imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container", "box");
        }
    }
}
function checkBottomFlag() {
    var lparent = document.getElementById("container");
    var lcontent = getChildElement(lparent, "box");
    //最后一张图片的高度
    var lastContentHeight = lcontent[lcontent.length-1].offsetTop;
    //未显示部分的高度
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //当前页面的高度
    var pageHeight = document.body.clientHeight || document.documentElement.clientHeight;
    //加载图片条件：最后一张图片的高度<未显示部分的高度+当前页面的高度
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
    return false;
}
function imgLocation(parent, content) {
    //将parent下所有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content); //存储图片
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth/imgWidth);
    //margin:0 auto(这样设置可以让控件左右居中)
    // imgWidth*num固定了宽度，这样图片排序不随窗口变化而变化
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto";

    //后排的图片自动补在前排高度最低的图片下面
    var BoxHeightArr = []; //用来存储一排图片的高度
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
        BoxHeightArr[i]=ccontent[i].offsetHeight;
        }else{
            var minHeight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getMinHeightLocation(BoxHeightArr, minHeight);
            ccontent[i].style.position="absolute";
            ccontent[i].style.top=minHeight+"px";
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}
//获取包裹图片的div盒子
function getChildElement(parent, content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
//获取高度最低的图片的位置
function getMinHeightLocation(BoxHeightArr, minHeight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]==minHeight){
            return i;
        }
    }
}
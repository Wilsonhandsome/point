/**
 * Created by Administrator on 2017/4/17 0017.
 */
window.onload=function () {
    var outer=document.getElementById("outer");
    var oUl=document.getElementById("banner");
    var btns=document.getElementById("btn").getElementsByTagName("li");
    var changePage=document.getElementsByTagName("p");
banner(outer,oUl,btns,changePage,3000,800);
function banner(outer,oUl,btns,changePage,duration,banwidth) {
//0banner窗口,1banner图片,2页面按钮,3左右按钮,4时间间隔,5图片宽度
    var time=setInterval(move,duration);
    var time1;
    var maxpage=btns.length;
    var page=0;//确定当前数值
    function move() {

        page++;
        if(page>maxpage){
            oUl.style.transition="";
            page=0;
            oUl.style.marginLeft="0px";
            time1=setTimeout(function () {
                page++;
                oUl.style.transition="all 2s";
                oUl.style.marginLeft=page*(-banwidth)+"px";
            },10);

        }
        oUl.style.marginLeft=page*(-banwidth)+"px";
    }
    for(var i=0;i<btns.length;i++){
        btns[i].index=i;
        btns[i].onclick=function () {
            page=this.index;
            oUl.style.marginLeft=page*(-banwidth)+"px";
        }
    }
    outer.onmousemove=function () {
        clearInterval(time);
        //clearTimeout(time1);
        changePage[0].style.display="block";
        changePage[1].style.display="block";
    }
    outer.onmouseout=function () {
        time=setInterval(move,duration);
        changePage[0].style.display="";
        changePage[1].style.display="";
    }
    changePage[0].onclick=function () {
        page--;
        if (page<0){
            oUl.style.transition="";
            page=maxpage;
            oUl.style.marginLeft=page*(-banwidth)+"px";
            time1=setTimeout(function () {
                page--;
                oUl.style.transition="all 2s";
                oUl.style.marginLeft=page*(-banwidth)+"px";
            },10);
        }
        oUl.style.marginLeft=page*(-banwidth)+"px";
        
        }
    changePage[1].onclick=function () {
            move();
    }
    
    
}
}
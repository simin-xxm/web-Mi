
//  计时器
setInterval(function () {
    let span = document.querySelectorAll('.boxp span');
    let timeing = new Date();
    let time=new Date(2020,5,3,1,58,60);
    let num = time.getTime()-timeing.getTime();
    // 时分秒
    let hours=parseInt(num/(60*60*1000));
    num=num%(60*60*1000);
    let minute=parseInt(num/(60*1000));
    num=num%(60*1000);
    let seconde=parseInt(num/1000);
    span[0].textContent = hours;
    span[1].textContent = minute;
    span[2].textContent = seconde;
});



//input
var c = ['王一博同款','米家显示器挂灯','米家超级电池','小米智能门锁E'];
document.querySelector('input').setAttribute("placeholder",c[0]);



    // var loop = function (i) {
    //     setTimeout(function timer() {
    //         document.querySelector('input').setAttribute("placeholder",c[i]);
    //     }, i*2000);
    // };
    //     for (var i = 0;i <= 3; i++) {
    //         loop(i);
    //     }
function resort(){
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 4 ; j++) {

            (function(a,b){
                setTimeout(function(){
                    console.log(j);
                    document.querySelector('input').setAttribute("placeholder",c[j]);
                },(a*4 + b)*3000);

            })(i,j)
        }
    }
}

resort();

// 状态
const li1 = document.getElementsByClassName('li1');
const li2 = document.getElementsByClassName('li2');
const li3 = document.getElementsByClassName('li3');
const right = document.getElementsByClassName('right');
const righttwo= document.getElementsByClassName('right-two');
const righttheree = document.getElementsByClassName('right-three');


for( let i =0; i<li1.length;i++){
    li1[i].addEventListener('mousemove',function () {
        li1[i].style.borderBottom = "3px solid #ff6700";
        li2[i].style.borderBottom = "1px solid #F5F5F5";
        li3[0].style.borderBottom = "1px solid #F5F5F5";
        righttwo[i].style.zIndex = '-1';
    });
    li2[i].addEventListener('mousemove',function () {
        li1[i].style.borderBottom = "1px solid #F5F5F5";
        righttwo[i].style.zIndex = '1';
        li2[i].style.borderBottom = "3px solid #ff6700";
        li3[0].style.borderBottom = "1px solid #F5F5F5";
    });
}

li3[0].addEventListener('mousemove',function () {
    li1[1].style.borderBottom = "1px solid #F5F5F5";
    li2[1].style.borderBottom = "1px solid #F5F5F5";
    li3[0].style.borderBottom = "3px solid #ff6700";
    righttheree[1].style.zIndex = '1';
    li1[1].addEventListener('mousemove',function () {
        righttwo[1].style.zIndex = '-1';
        righttheree[1].style.zIndex = '-1';
    });
    li2[1].addEventListener('mousemove',function () {
        righttwo[1].style.zIndex = '1';
        righttheree[1].style.zIndex = '-1';
    });
});

li3[1].addEventListener('mousemove',function () {
    li1[3].style.borderBottom = "1px solid #F5F5F5";
    li2[3].style.borderBottom = "1px solid #F5F5F5";
    li3[1].style.borderBottom = "3px solid #ff6700";
    righttheree[3].style.zIndex = '1';
    li1[3].addEventListener('mousemove',function () {
        righttwo[3].style.zIndex = '-1';
        righttheree[3].style.zIndex = '-1';
        li3[1].style.borderBottom = "1px solid #F5F5F5";
    });
    li2[3].addEventListener('mousemove',function () {
        righttwo[3].style.zIndex = '1';
        righttheree[3].style.zIndex = '-1';
        li3[1].style.borderBottom = "1px solid #F5F5F5";
    });
});




// 侧边栏
$(function(){
    $(window).on('scroll',function(){
        var st = $(document).scrollTop();
        if( st>1300 ){
            $('#a6').show();
        }else if (st>=800) {
            $('#a6').hide();
        }
    });
    $("#a6").click(function(){
        if(scroll=="off"){
            return;
        }
        $("html,body").animate({scrollTop: 0}, 500);
    });

    $("#xf").mouseover(function () {
        $("#box").fadeIn(500);
    });
    $("#xf").mouseout(function () {
        $("#box").hide();
    });
});


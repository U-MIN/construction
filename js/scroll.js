//화면 스크롤
const gnbBtn = document.querySelectorAll("#header > .gnb > li")
const contBox = document.querySelectorAll("#container > div");          //중간영역
const sideBtn = document.querySelectorAll("#sideBtn > li");             //버튼 4개
const logoImg = document.querySelector(".logo img");                    //로고이미지

const header = document.querySelector("#header");                       //헤더영역
const headerHeight = document.querySelector("#header").offsetHeight;    //헤더높이

let movePoint = 0;      //휠 했을 때 이전, 이후구역 시작 위치값 받아줄 변수

//웹브라우저에 스크롤 이벤트
window.addEventListener("scroll",()=>{
    let scTop = window.scrollY //스크롤 할 때마다의 위치값

    for (let j=0; j<gnbBtn.length; j++){
        gnbBtn[j].classList.remove("on");
    }

    //동그라미 버튼 전부 비활성화
    for (let i=0; i <sideBtn.length; i++){

        sideBtn[i].classList.remove("on");
        header.classList.remove("on");
        logoImg.setAttribute("src","img/logo.png")
    }

    if(scTop >= contBox[0].offsetTop && scTop < contBox[1].offsetTop ){
        sideBtn[0].classList.add("on");
        gnbBtn[0].classList.add("on");

    }
    else if(scTop >= contBox[1].offsetTop && scTop < contBox[2].offsetTop){
        sideBtn[1].classList.add("on");    
        header.classList.add("on");
        gnbBtn[1].classList.add("on");
        logoImg.setAttribute("src","img/logo_scroll.png");
    }
    else if(scTop >= contBox[2].offsetTop && scTop < contBox[3].offsetTop){
        sideBtn[2].classList.add("on");    
        header.classList.add("on");
        gnbBtn[2].classList.add("on");
        gnbBtn[3].classList.add("on");
        logoImg.setAttribute("src","img/logo_scroll.png");
           
    }
    else if(scTop >= contBox[3].offsetTop ){
        sideBtn[3].classList.add("on");   
        header.classList.add("on");
        gnbBtn[4].classList.add("on");
        logoImg.setAttribute("src","img/logo_scroll.png");

    } 

});

//버튼 클릭시 해당 태그 시작 값으로 스크롤바가 움직이도록
for(let k=0; k<gnbBtn.length; k++){
    gnbBtn[k].addEventListener("click",(e)=>{

        let gnbIdx = gnbBtn[k].getAttribute("data-index");

        e.preventDefault();         //a태그 기본 기능 멈춤


        //동그라미 클릭한 순번과 매칭되는 중간구역의 시작 위치값              
        if (gnbIdx == 2 || gnbIdx == 3 ){

            //스크롤바 이동
            window.scrollTo({
            top:contBox[2].offsetTop,
            left:0,
            behavior:"smooth"
        });
        }
        else if ( gnbIdx == 4){

            //스크롤바 이동
            window.scrollTo({
            top:contBox[3].offsetTop,
            left:0,
            behavior:"smooth"
            });
        }
        else {

            //스크롤바 이동
            window.scrollTo({
            top:contBox[k].offsetTop,
            left:0,
            behavior:"smooth"
            });

        }

    });
}

for(let i =0; i <sideBtn.length; i++){

    sideBtn[i].addEventListener("click",(e)=>{

        e.preventDefault();         //a태그 기본 기능 멈춤

        //동그라미 클릭한 순번과 매칭되는 중간구역의 시작 위치값
        let secOffset = contBox[i].offsetTop            //

        //스크롤바 이동
        window.scrollTo({
            top:secOffset,
            left:0,
            behavior:"smooth"
        });
    });
}


//중간구역에서 휠 했을 때 버튼도 바뀌는 이벤트

for (let i=0; i<contBox.length; i++){

    //중간구역 모두 이벤트 달아줌
    contBox[i].addEventListener("wheel",(e)=>{

        e.preventDefault();         //a태그가 아니라 스크롤이벤트랑 휠 중첩 막아주려고

        if(e.wheelDelta > 0){
            movePoint = e.currentTarget.previousElementSibling.offsetTop;
            //휠을 올리면 이전으로 올라감
        }
        
        else if(e.wheelDelta < 0){
            movePoint = e.currentTarget.nextElementSibling.offsetTop;
            //휠을 내리면 다음으로 내려감
        }

        window.scrollTo({
            top:movePoint,
            left:0,
            behavior:"smooth"
        });

    });

}


//cont2 슬라이더
const slideWrap = document.querySelector(".slider");
const sliderView = document.querySelector(".view");


const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

let sliderNumber = 0;

leftBtn.addEventListener("click",()=>{

    if(sliderNumber == 0){
        sliderNumber = 3;
    }
    else{
        sliderNumber--;
    }
    sliderView.style.marginLeft = (-100*sliderNumber)+"%";
});

rightBtn.addEventListener("click",()=>{

    if(sliderNumber == 3){
        sliderNumber = 0;
    }
    else{
        sliderNumber++;
    }

  
    sliderView.style.marginLeft = (-100*sliderNumber)+"%";
});


//cont3 슬라이더

const cont3left = document.querySelector(".cont3Btn > .left3Btn");
const cont3right = document.querySelector(".cont3Btn > .right3Btn");
const slider3View = document.querySelector(".cont3_bot > .view");

let slider3Number = 0;

cont3left.addEventListener("click",()=>{

    if(slider3Number == 0){

        slider3Number = 2;
    }
    else{
        slider3Number--;
    }


    slider3View.style.marginLeft = -100 * slider3Number + "%";
});

cont3right.addEventListener("click",()=>{

    if(slider3Number == 2){
        slider3Number = 0;
    }
    else{
        slider3Number++;
    }
    slider3View.style.marginLeft = -100 * slider3Number + "%";
});

//cont4 마우스 오버시 가로 사이즈 변하기
//변수설정

// const cont4box = document.querySelector(".cont4_wrap .cont4_box");
const cont4wrap = document.querySelectorAll(".cont4_wrap > div");

for (let i=0; i<cont4wrap.length; i++){
    
    cont4wrap[i].addEventListener("mouseover",(e)=>{

        e.currentTarget.classList.add("on");
        
    });

    cont4wrap[i].addEventListener("mouseout",()=>{
    
        for(let i=0; i<cont4wrap.length; i++){
    
            cont4wrap[i].classList.remove("on");
        }
    
    });
    

}


let board = document.querySelector(".board")
board.onclick=()=>{
 let display1=document.querySelector(".display1")
 display1.style.display="block"
 let display2=document.querySelector(".display2")
 display2.style.display="none"
 let display3=document.querySelector(".display3")
 display3.style.display="none"
 let display4=document.querySelector(".display4")
 display4.style.display="none"
 let display5=document.querySelector(".display5")
 display5.style.display="none"
 let display6=document.querySelector(".display6")
 display6.style.display="none"
 let display7=document.querySelector(".display7")
 display7.style.display="none"


}
let board2 = document.querySelector(".board2")
board2.onclick=()=>{
    let display1=document.querySelector(".display1")
    display1.style.display="none"
    let display2=document.querySelector(".display2")
    display2.style.display="block"
    let display3=document.querySelector(".display3")
    display3.style.display="none"
    let display4=document.querySelector(".display4")
    display4.style.display="none"
    let display5=document.querySelector(".display5")
    display5.style.display="none"
    let display6=document.querySelector(".display6")
    display6.style.display="none"
    let display7=document.querySelector(".display7")
    display7.style.display="none"
   
   
}
let board3 = document.querySelector(".board3")
board3.onclick=()=>{
    let display1=document.querySelector(".display1")
 display1.style.display="none"
 let display2=document.querySelector(".display2")
 display2.style.display="none"
 let display3=document.querySelector(".display3")
 display3.style.display="block"
 let display4=document.querySelector(".display4")
 display4.style.display="none"
 let display5=document.querySelector(".display5")
 display5.style.display="none"
 let display6=document.querySelector(".display6")
 display6.style.display="none"
 let display7=document.querySelector(".display7")
 display7.style.display="none"

}
let board4 = document.querySelector(".board4")
board4.onclick=()=>{
    let display1=document.querySelector(".display1")
    display1.style.display="none"
    let display2=document.querySelector(".display2")
    display2.style.display="none"
    let display3=document.querySelector(".display3")
    display3.style.display="none"
    let display4=document.querySelector(".display4")
    display4.style.display="block"
    let display5=document.querySelector(".display5")
    display5.style.display="none"
    let display6=document.querySelector(".display6")
    display6.style.display="none"
    let display7=document.querySelector(".display7")
    display7.style.display="none"
   
}
let board5 = document.querySelector(".board5")
board5.onclick=()=>{
    let display1=document.querySelector(".display1")
    display1.style.display="none"
    let display2=document.querySelector(".display2")
    display2.style.display="none"
    let display3=document.querySelector(".display3")
    display3.style.display="none"
    let display4=document.querySelector(".display4")
    display4.style.display="none"
    let display5=document.querySelector(".display5")
    display5.style.display="block"
    let display6=document.querySelector(".display6")
    display6.style.display="none"
    let display7=document.querySelector(".display7")
    display7.style.display="none"
   
}
let board6 = document.querySelector(".board6")
board6.onclick=()=>{
    let display1=document.querySelector(".display1")
    display1.style.display="none"
    let display2=document.querySelector(".display2")
    display2.style.display="none"
    let display3=document.querySelector(".display3")
    display3.style.display="none"
    let display4=document.querySelector(".display4")
    display4.style.display="none"
    let display5=document.querySelector(".display5")
    display5.style.display="none"
    let display6=document.querySelector(".display6")
    display6.style.display="block"
    let display7=document.querySelector(".display7")
    display7.style.display="none"
   
}
let board7 = document.querySelector(".board7")
board7.onclick=()=>{
    let display1=document.querySelector(".display1")
 display1.style.display="none"
 let display2=document.querySelector(".display2")
 display2.style.display="none"
 let display3=document.querySelector(".display3")
 display3.style.display="none"
 let display4=document.querySelector(".display4")
 display4.style.display="none"
 let display5=document.querySelector(".display5")
 display5.style.display="none"
 let display6=document.querySelector(".display6")
 display6.style.display="none"
 let display7=document.querySelector(".display7")
 display7.style.display="block"

}




// HRUSHIKESH JS


var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("textHolder");
    slides[slideIndex].style.opacity=1;

    // captionText=document.querySelector(".captionTextHolder .captionText");
    // captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    //disable nextPrevBtn if slide count is one
    if(slides.length<5){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //add dots
    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "textHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },4000);
}
setTimer();

function carousel(){
    let carousel_div=document.getElementById('carousel')
    
    let images=[`https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png`,
    `https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png`,
    `https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_image.png`,
    `https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png`,
    `https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/nissan_image.png`]
    
    let imgElement = document.createElement('img') 
    
    imgElement.src=images[0]
    carousel_div.append(imgElement)
    
    let i=1;
    setInterval(function(){
     
       if(i==images.length){  
        i=0;
       }
       imgElement.src=images[i] 
       carousel_div.append(imgElement) 
       i++
    },4000);
    }
    carousel();


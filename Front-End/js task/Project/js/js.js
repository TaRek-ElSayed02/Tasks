let btnsDiv = document.querySelector(".btns");
let btns = document.querySelectorAll(".btns button");
let divs = document.querySelectorAll(".content div");

btnsDiv.addEventListener("click", (e) => {
    let currentBtn = e.target;
    let currentDiv = document.getElementById(currentBtn.dataset.mark);
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    currentBtn.classList.add("active");
    divs.forEach((div) => {
        div.classList.remove("show");
    });
    currentDiv.classList.add("show");
});


/***********html */


let oldImg= document.querySelector("#defimg");
let overlayed=document.querySelector(".overlayed");
let newImg=document.querySelector(".overlayed .newimg");
let closeBtn =document.querySelector(".overlayed .closebtn");


oldImg.addEventListener('click',()=>{
   newImg.src= oldImg.getAttribute("src");
   overlayed.style.display="block";
})

closeBtn.addEventListener('click',()=>{
    overlayed.style.display="none";
})

/*********css */

let oldImg1= document.querySelector("#defimg1");
let overlayed1=document.querySelector(".overlayed1");
let newImg1=document.querySelector(".overlayed1 .newimg1");
let closeBtn1 =document.querySelector(".overlayed1 .closebtn1");


oldImg1.addEventListener('click',()=>{
   newImg1.src= oldImg1.getAttribute("src");
   overlayed1.style.display="block";
})

closeBtn1.addEventListener('click',()=>{
    overlayed1.style.display="none";
})


/********javascript */
let oldImg2= document.querySelector("#defimg2");
let overlayed2=document.querySelector(".overlayed2");
let newImg2=document.querySelector(".overlayed2 .newimg2");
let closeBtn2 =document.querySelector(".overlayed2 .closebtn2");


oldImg2.addEventListener('click',()=>{
   newImg2.src= oldImg2.getAttribute("src");
   overlayed2.style.display="block";
})

closeBtn2.addEventListener('click',()=>{
    overlayed2.style.display="none";
})
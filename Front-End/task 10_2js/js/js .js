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
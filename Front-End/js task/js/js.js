
const colors=["red","blue","green","yellow"];
let btn=document.getElementById("btn");
let rcolor=document.getElementById("colorname");
function getRandomColor() {
    const colorhash=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colorhash[Math.floor(Math.random() * colorhash.length)];
    }
    return color;
}
btn.addEventListener('click',()=>{
    rcolor.textContent=getRandomColor();
    let randomColor=getRandomColor();
   document.body.style.backgroundColor=randomColor;
})


/*
let getRand=()=>{
    return Math.floor(Math.random() * colors.length)
}
btn.addEventListener('click',()=>{
    let rand =getRand();
    document.body.style.backgroundColor=colors[rand];
    rcolor.textContent=colors[rand];
})*/
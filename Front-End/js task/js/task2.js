
let counter = 0;
let count = document.querySelector(".count");
let btns = document.querySelector(".btns");
btns.addEventListener("click", (e) => {
    let currentClass = e.target.classList;
    if (currentClass.contains("inc")) {
        counter++;
    } else if (currentClass.contains("dec")) {
        counter--;
    }

    if (counter > 0) {
        document.body.style.backgroundColor = "green";
    } else if (counter < 0) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "blue";
    }


    count.textContent = counter;
})


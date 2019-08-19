let root = document.querySelector("#root");
let topLeft = document.querySelector("#top-left");
let topRight = document.querySelector("#top-right");
let bottomLeft = document.querySelector("#bottom-left");
let bottomRight = document.querySelector("#bottom-right");

let name1 = document.querySelector("#top-left>h1");
let name2 = document.querySelector("#top-right>h1");
let name3 = document.querySelector("#bottom-left>h1");
let name4 = document.querySelector("#bottom-right>h1");


document.addEventListener("DOMContentLoaded", () => {
    let popupDiv = document.createElement("div");
    popupDiv.setAttribute("id", "pop-up");

    let inputP1 = document.createElement("input");
    let inputP2 = document.createElement("input");
    let inputP3 = document.createElement("input");
    let inputP4 = document.createElement("input");
    let button = document.createElement("button");

    inputP1.placeholder = "Player 1";
    inputP2.placeholder = "Player 2";
    inputP3.placeholder = "Player 3";
    inputP4.placeholder = "Player 4";
    button.innerText = "Submit";
    button.setAttribute("id", "submit-btn")

    popupDiv.appendChild(inputP1);
    popupDiv.appendChild(inputP2);
    popupDiv.appendChild(inputP3);
    popupDiv.appendChild(inputP4);
    popupDiv.appendChild(button);

    root.appendChild(popupDiv);

    button.addEventListener("click", () => {
        name1.textContent = inputP1.value;
        name2.textContent = inputP2.value;
        name3.textContent = inputP3.value;
        name4.textContent = inputP4.value;

        topLeft.classList.remove("blur");
        topRight.classList.remove("blur");
        bottomLeft.classList.remove("blur");
        bottomRight.classList.remove("blur");

        popupDiv.remove();
    });
    // console.dir(topLeft.children[1]);
})

document.querySelectorAll(".plus").forEach(ele => {
    ele.addEventListener("click", () => {
        let score = ele.parentElement.children[1];
        score.innerHTML = Number(score.innerHTML) + 1;
        console.dir(score.innerHTML)
    })
})

document.querySelectorAll(".minus").forEach(ele => {
    ele.addEventListener("click", () => {
        let score = ele.parentElement.children[1];
        score.innerHTML = Number(score.innerHTML) - 1;
        console.dir(score.innerHTML)
    })
})

document.querySelectorAll(".color").forEach(ele => {
    let colors = ['red', 'blue', 'orange', 'white'];
    let counter = 0;
    ele.addEventListener("click", () => {
    ele.parentElement.style.backgroundColor = colors[counter % 4];
    counter++;
    })
})
const container = document.querySelector("#container");
var div = []
let gridSize = 16
for (i = 1; i <=gridSize ; i++){
    div[i] = document.createElement("div");
    div[i].classList.add("content");
    div[i].textContent = i
    container.appendChild(div[i]);
}



const setSize = document.querySelector("#setSize");

setSize.addEventListener("click",  () => {
    let newGridSize = prompt("How big is YOUR box?");

    if (newGridSize > 1){

        for (i = 1; i <=gridSize ; i++){
            container.removeChild(div[i]);
        }

        for (i = 1; i <= newGridSize * newGridSize ; i++){
            div[i] = document.createElement("div");
            div[i].classList.add("content");
            div[i].textContent = i
            container.appendChild(div[i]);
        }
        
    };
    const content = document.querySelectorAll(".content");
    content.forEach((content) => {
   content.addEventListener("mouseenter", () => {
    content.style.backgroundColor = "blue";
}); 
})


});


const content = document.querySelectorAll(".content");
content.forEach((content) => {
   content.addEventListener("mouseenter", () => {
    content.style.backgroundColor = "blue";
}); 
})


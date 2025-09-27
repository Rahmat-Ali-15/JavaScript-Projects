let generateBtn = document.getElementsByClassName("generateSqrdBtn");
let squareContainer = document.querySelector(".sqaure-container");

const generateSquare = () => {
    let input = document.getElementById("input").value;
    squareContainer.innerHTML = "";
    for(let i = 1; i <= input; i++){
        let square = document.createElement("div");
        square.className = "square-div";
        square.innerText = i;
        squareContainer.append(square);

    }
}
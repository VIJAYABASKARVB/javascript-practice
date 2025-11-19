function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}


document.getElementById("color-button").addEventListener("click", changeColor);

function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

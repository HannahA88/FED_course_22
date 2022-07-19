
const container = document.getElementById("container");
container.style.backgroundColor = "pink";

function backgroundToBlue(event) {
    event.target.style.backgroundColor = "blue";
    console.log(event.target);
}

container.addEventListener("mouseover", backgroundToBlue);
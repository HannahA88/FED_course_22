
const container = document.getElementById("container");
container.style.backgroundColor = "pink";


/*function backgroundToBlue(event) {
    event.target.style.backgroundColor = "blue";
    console.log(event.target);
}

function backgroundToPink(event) {
    event.target.style.backgroundColor = "pink";
    console.log(event.target);
}
*/

function backgroundToNext(event) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
    console.log(event.target);
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}


/*container.addEventListener("mouseover", backgroundToBlue);
container.addEventListener("mouseleave", backgroundToPink);*/

container.addEventListener("mouseover", setBg);
container.addEventListener("mouseover", backgroundToNext);
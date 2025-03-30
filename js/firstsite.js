let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let menuIcon = document.querySelector("#menuIcon");
menuIcon.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    layer.classList.toggle("visible");
}

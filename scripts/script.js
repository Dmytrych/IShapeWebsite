let button = document.getElementById("menu-btn")
let menu = document.getElementById("menu")
button.addEventListener("click", () => {
    if(menu.classList.contains("fall-down-menu-appear")){
        menu.classList.remove("fall-down-menu-appear")
        menu.style.display = "none"
    }
    else{
        menu.classList.add("fall-down-menu-appear")
        menu.style.display = "grid"
        menu.style.opacity = "100%"
    }
})
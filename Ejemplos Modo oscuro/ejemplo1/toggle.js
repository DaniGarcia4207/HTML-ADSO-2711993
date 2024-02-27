let toggle = document.querySelector("#container") //capturamos el div con id container
let body = document.querySelector("body")

toggle.onclick = function (){
    /* toggle.classList.toggle("active") */
    body.classList.toggle("active")
}
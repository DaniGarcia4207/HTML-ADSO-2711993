let singUp = document.getElementById("singUp");
let singIn = document.getElementById("singIn");
let nameInput = document.getElementById("name-input");
let title = document.getElementById("title");

singIn.onclick = function(){
    nameInput.style.maxHeight="0";
    title.innerHTML="Login";
    singUp.classList.remove("disable");
    singIn.classList.add("disable");
}
singUp.onclick = function(){
    nameInput.style.maxHeight="60px";
    title.innerHTML="Registro";
    singUp.classList.remove("disable");
    singIn.classList.add("disable");
}
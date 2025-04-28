let image = document.getElementById("lampadina")
const button = document.querySelector(".btn")
let acceso = false
let body = document.querySelector("body")

button.addEventListener("click", function(){
    console.log("premo il pulsante")
    if(acceso === false){
        console.log("accendo la luce")
        image.src = "img/yellow_lamp 1.png"
        button.classList.toggle("bg-red")
        body.classList.toggle("bg-black")
        button.innerText = "Spegni la luce"
        acceso = true
    }else {
        image.src = "img/white_lamp 1.png"
        console.log("spengo la luce")
        button.classList.toggle("bg-red")
        body.classList.toggle("bg-black")
        button.innerText = "Accendi la luce"
        acceso = false
    }
})


console.log(image.src)
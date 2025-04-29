let image = document.getElementById("lampadina")
const button = document.querySelector(".btn")
let acceso = false
let body = document.querySelector("body")


button.addEventListener("click", toggleLight)


function toggleLight(){
    console.log("premo il pulsante")
    // button.classList.toggle("bg-red")
    body.classList.toggle("bg-black")
    if(acceso === false){
        // console.log("accendo la luce")
        image.src = "./img/yellow_lamp 1.png"
        // button.classList.add("bg-red")
        // body.classList.remove("bg-black")
        button.innerText = "Spegni la luce"
        acceso = true
    }else {
        image.src = "./img/white_lamp 1.png"
        // console.log("spengo la luce")
        // button.classList.remove("bg-red")
        // body.classList.add("bg-black")
        button.innerText = "Accendi la luce"
        acceso = false
    }
}
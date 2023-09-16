botonDesplegable = document.querySelector(".navbar-toggler")
barra = document.querySelector(".barranav")
botonDark = document.querySelector("#botonDark")
body = document.body

botonDesplegable.addEventListener("click", () =>{
    barra.classList.toggle("botonresponsive")
})

botonDark.addEventListener("click", () =>{
    botonDark.classList.toggle("modonoche")
    val = body.classList.toggle("modo_oscuro")
    localStorage.setItem("botonDark",val)
})

valor = localStorage.getItem("botonDark")

if (valor == "true"){
    body.classList.add("modo_oscuro")
    botonDark.classList.add("modonoche")
} else {
    body.classList.remove("modo_oscuro")
    botonDark.classList.remove("modonoche")
}
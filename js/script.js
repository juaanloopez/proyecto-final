botonDark = document.querySelector("#botonDark")
let body = document.body

botonDark.addEventListener("click", () => {
    botonDark.classList.toggle("modonoche")
    let val=body.classList.toggle("modo_oscuro")
    localStorage.setItem("botonDark",val)
})

let valor=localStorage.getItem("botonDark")

if (valor=="true") {
    body.classList.add("modo_oscuro")
} else {
    body.classList.remove("modo_oscuro")
}
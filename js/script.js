botonDark = document.querySelector("#botonDark")
// barranav = document.querySelector("nav")
// caracteristicas = document.querySelector(".caracteristicas")

// function switchDark(){
//     barranav.classList.toggle("nav-dark")
//     botonDark.classList.toggle("btn-light")
//     document.querySelector(".titulocarrusel").style.color = "#f9d806"
//     document.querySelector("#titulocategoria").style.color = "#f9d806"
//     document.querySelector("#tituloofertas").style.color = "#f9d806"
//     document.querySelector("#titulopreciosjustos").style.color = "#f9d806"
//     caracteristicas.classList.toggle("carac-dark")
//     document.querySelector("#cafe").style.color = "#f9d806"
//     document.querySelector("#preciocafe").style.color = "#f9d806"
//     document.querySelector("#chocolatada").style.color = "#f9d806"
//     document.querySelector("#chocolatadaprecio").style.color = "#f9d806"
//     document.querySelector("#queso").style.color = "#f9d806"
//     document.querySelector("#quesoprecio").style.color = "#f9d806"
//     document.querySelector("#milanesa").style.color = "#f9d806"
//     document.querySelector("#milanesaprecio").style.color = "#f9d806"
//     document.querySelector("#manteca").style.color = "#f9d806"
//     document.querySelector("#mantecaprecio").style.color = "#f9d806"
//     document.querySelector("#jugo").style.color = "#f9d806"
//     document.querySelector("#jugoprecio").style.color = "#f9d806"
//     document.querySelector("#aceite").style.color = "#f9d806"
//     document.querySelector("#aceiteprecio").style.color = "#f9d806"
//     document.querySelector("#citrus").style.color = "#f9d806"
//     document.querySelector("#citrusprecio").style.color = "#f9d806"
//     document.querySelector("#alfajor").style.color = "#f9d806"
//     document.querySelector("#alfajorprecio").style.color = "#f9d806"
//     document.querySelector("#arroz").style.color = "#f9d806"
//     document.querySelector("#arrozprecio").style.color = "#f9d806"
//     document.querySelector("#azucar").style.color = "#f9d806"
//     document.querySelector("#azucarprecio").style.color = "#f9d806"
//     document.querySelector("#galletitas").style.color = "#f9d806"
//     document.querySelector("#galletitasprecio").style.color = "#f9d806"
//     document.body.classList.toggle("fondo-dark")
// }

botonDark.addEventListener("click", () => {
    document.body.classList.toggle("modo_oscuro")
})
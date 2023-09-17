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

// constantes

const lis = document.querySelectorAll(".ofertasdeldia-preciosjusto .contenedor-ofertasdeldia-preciosjusto .card-ofertasdeldia-preciosjusto h3")
const buscador =document.querySelector("#buscador")

// funciones

for(i=0;i<lis.length;i+=2){
    lis[i].classList.add("list-group-item-secondary")
}

function filtrar(substring, elements){
    cumplen = []
    for (i of elements){
        if (i.innerText.toLowerCase().includes(substring.toLowerCase())){
            cumplen.push(i)
        }
        return cumplen
    }
}

// eventos

buscador.addEventListener("input", () =>{
    if(buscador.value == ""){
        for (i of lis){
            i.classList.remove("d-none")
        }
    }else{
        filtrados = filtrar(buscador.value,lis)
        for(i of lis){
            i.classList.add("d-none")
        }
        for (i of filtrados){
            i.classList.remove("d-none")
        }
    }
})
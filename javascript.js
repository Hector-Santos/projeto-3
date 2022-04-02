function selecionar(elemento){
    const escolhido = document.querySelector(".escolhido")
    if(escolhido !== null){
        escolhido.classList.remove("escolhido")
        elemento.classList.add("escolhido")
    }
    else{
   elemento.classList.add("escolhido")
    }
}
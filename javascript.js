let prato = null;
let preçoprato;
let bebida = null;
let preçobebida;
let sobremesa = null;
let preçosobemesa;
let total;
function selecionaPrato(elemento) {
    const escolhido = document.querySelector(".prato").querySelector(".escolhido")
    if (escolhido !== null) {
        escolhido.classList.remove("escolhido")
        elemento.classList.add("escolhido")
    }
    else {
        elemento.classList.add("escolhido")
    }
    prato = elemento.querySelector("h1").innerHTML
    preçoprato = elemento.querySelector("h2").innerHTML
    preçoprato = preçoprato.slice(3, 8)
    preçoprato = preçoprato.replace(/,/g, '.')
    preçoprato = Number(preçoprato);
    acendebotão()
}
function selecionaBebida(elemento) {
    const escolhido = document.querySelector(".bebida").querySelector(".escolhido")
    if (escolhido !== null) {
        escolhido.classList.remove("escolhido")
        elemento.classList.add("escolhido")
    }
    else {
        elemento.classList.add("escolhido")
    }
    bebida = elemento.querySelector("h1").innerHTML
    preçobebida = elemento.querySelector("h2").innerHTML
    preçobebida = preçobebida.slice(3, 8)
    preçobebida = preçobebida.replace(/,/g, '.')
    preçobebida = Number(preçobebida);
    acendebotão()
}
function selecionaSobremesa(elemento) {
    const escolhido = document.querySelector(".sobremesa").querySelector(".escolhido")
    if (escolhido !== null) {
        escolhido.classList.remove("escolhido")
        elemento.classList.add("escolhido")
    }
    else {
        elemento.classList.add("escolhido")
    }
    sobremesa = elemento.querySelector("h1").innerHTML
    preçosobemesa = elemento.querySelector("h2").innerHTML
    preçosobemesa = preçosobemesa.slice(3, 8)
    preçosobemesa = preçosobemesa.replace(/,/g, '.')
    preçosobemesa = Number(preçosobemesa);
    acendebotão()
}

function acendebotão() {
    if (prato !== null && bebida !== null && sobremesa !== null) {
        let item = document.querySelector(".bottombar").querySelector("button")
        item.classList.add("fechapedido")
        item.innerHTML = "Fechar pedido"
    }
}

function criaString () {
    if (prato !== null && bebida !== null && sobremesa !== null){
    let preço = preçoprato + preçobebida + preçosobemesa;
    preço = preço.toFixed(2)
    let mensagem = " Olá, gostaria de fazer o pedido: \n" + "- Prato: " + prato + "\n- Bebida: " + bebida 
    + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + preço
   let uri = encodeURIComponent(mensagem)
    alert(uri)
    window.location.href = "https://wa.me/5531998541733/" + "?text=" + uri
    }
    
}



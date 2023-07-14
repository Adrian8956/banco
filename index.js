// funcao que captura o valor do input
function capturarValor() {
    // captura o valor do input
    let valor = document.getElementById("valor").value;
    // converte o valor para numero
    valor = Number(valor);
    // retorna o valor
    return valor;
}

// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("valor").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        capturarValor();
        e.preventDefault();
    }
}

let conta = capturarValor();


/* function consultar(){
    alert("Seu saldo é: " + Number(conta))
} */

function depositar(){
    let depositar = capturarValor()
    if(depositar <= 0){
        alert("Valor inválido!")
    }else{
        conta += depositar
        atualizarSaldo()
        limpar()
    }
}

function sacar(){
    let sacar = capturarValor()
    if(sacar <= conta){
        conta -= sacar
        atualizarSaldo()
        limpar()
    }else{
        alert("Saldo insuficiente!")
    }
} 



function atualizarSaldo(){
    let saldo = document.getElementById("saldo")
    saldo.innerHTML = conta
}

function limpar(){
    document.getElementById("valor").value = ""
}
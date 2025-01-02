function armazenarValor () {

    var userInput = document.getElementById ("userInput").value;
    console.log(userInput + "você apertou no botão");
    document.getElementById("valorInserido").innerText = " Parabéns " + userInput + ", você clicou no botão!" ;

}
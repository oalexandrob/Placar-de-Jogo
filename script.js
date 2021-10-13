let nomeTimeA = prompt("Digite o nome do time A.");
let nomeTimeB = prompt("Digite o nome do time B.");




const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.querySelector("#nomeTimeB");
const pontoA_HTML = document.querySelector("#pontuacaoA");
const pontoB_HTML = document.querySelector("#pontuacaoB");
const setA_HTML = document.querySelector("#setA");
const setB_HTML = document.querySelector("#setB");



//Segunda forma de alterar o time A
nomeA_HTML.innerHTML = nomeTimeA;
//Segunda forma de alterar o time B
nomeB_HTML.innerHTML = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
pontoA_HTML.innerHTML = pontoA;
pontoB_HTML.innerHTML = pontoB;

let setA = 0;
let setB = 0;





function computarPontosTimeA(){
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
        
    }
    

function computarPontosTimeB(){
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
}

function computarSetTimeA(){
    setA = setA + 1;
    setA_HTML.innerText = setA;
    verificaFimDoJogo()
    
    

}

function computarSetTimeB(){
    setB = setB + 1;
    setB_HTML.innerHTML = setB;
    verificaFimDoJogo()

}

//evento para capturar o click
pontoA_HTML.addEventListener('click', computarPontosTimeA);
pontoB_HTML.addEventListener('click', computarPontosTimeB);
// pontoA_HTML.addEventListener('wheel', retirarPontosTimeA);
// pontoB_HTML.addEventListener('wheel', retirarPontosTimeB);

function verificarFimDoSet(){
    if (pontoA >= 21 && pontoB <= pontoA - 2){
        computarSetTimeA();
        setA_HTML.innerText = setA;
        zerarPlacarQuandoTerminarOSet();
        
        
    } else if (pontoB >= 21 && pontoA <= pontoB - 2){
        computarSetTimeB();
        setB_HTML.innerText = setB;
        zerarPlacarQuandoTerminarOSet();
    
    
    }   

}


function verificaFimDoJogo(){

    let placarA = setA;
    let placarB = setB;

    if(setA == 3){
        
        fimDoJogo();
        alert("Parabéns! O "+ nomeTimeA + " Ganhou o jogo no placar de "+ placarA +" a "+ placarB);
    } else if (setB == 3){
        
        fimDoJogo();
        alert("Parabénes! O "+ nomeTimeB +" Ganhou o jogo no placar de "+ placarB +" a "+ placarA);

    }

    
  

}

function zerarPlacarQuandoTerminarOSet(){
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;    
    pontoB_HTML.innerText = pontoB;
}

function fimDoJogo(){
    pontoA = 0;
    pontoB = 0;
    setA = 0;
    setB = 0;
    pontoA_HTML.innerText = pontoA;    
    pontoB_HTML.innerText = pontoB;
    setA_HTML.innerText = setA;
    setB_HTML.innerText = setB;

    

    
}











    








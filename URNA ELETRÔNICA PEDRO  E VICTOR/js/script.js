var number = "";

function buttonB1() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "1";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB2() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "2";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB3() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "3";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB4() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "4";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB5() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "5";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB6() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "6";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB7() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "7";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB8() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "8";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB9() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "9";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function buttonB0() {
    number = document.getElementById("tVoto").value;
    if (number.length < 2) {
        document.getElementById("tVoto").value += "0";
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        if (document.getElementById("tVoto").value.length == 2) {
            number = document.getElementById("tVoto").value;
            mostrarImagem(parseInt(number));
        }
    }
}

function btnCorrect() {
    number = "";
    document.getElementById("tVoto").value = "";
    document.getElementById("imgCand").src = "#";
    document.getElementById("nameCand").innerHTML = "Candidato:";
    document.getElementById("namePartido").innerHTML = "Partido:";
}

function btnWhite() {
    number = document.getElementById("tVoto").value;
    if (number.length == 0) {
        number = 0;
        const tecla = new Audio('sound/tecla.mp3');
        tecla.play();
        tecla.loop = false;
        mostratImagem(number);
    } else {
        alert("Corrija o Seu Voto\nClicando no Botão Corrigir" +
            "Depois Clique no Branco Para Votar Em Branco");
    }
}

var voto = {
    cand1: 0,
    cand2: 0,
    cand3: 0,
    cand4: 0,
    cand5: 0,
    nulo: 0,
    branco: 0

};

function mostrarImagem(vNumber) {
    switch (vNumber) {
        case 04: document.getElementById("imgCand").src =
            "img/dinoAlexo.jpeg";
            document.getElementById("nameCand").innerHTML =
                "Candidato: dinoAlexo";
            document.getElementById("namePartido").innerHTML =
                "Partdo: Adolf falsu ";
            break;
    }

}
function btnConfirm(){    
    if(document.getElementById("tVoto").value.length == 2){
        let nVoto = parseInt(document.getElementById("tVoto").value);        
        alert(nVoto)
        switch(nVoto){            
            case 04:
                voto.cand1++;
                break;
            case 12:
                voto.cand2++;
                break;
            case 35:
                voto.cand3++;
                break;
            case 41:
                voto.cand4++;
                break;
            case 59:
                voto.cand5++;
                break;
            case 72:
                voto.cand6++;
            default:         
                voto.nulo++;
                break;
        }
    }else if(document.getElementById("tVoto").value.length == 0){
        if(numero == 0){
            voto.branco++
        }
    }else{
        alert("Corrija Seu Voto!")
    }    
    const tecla = new Audio('sound/confirmsound.mp3');
    tecla.play();
    tecla.loop = false;
    document.getElementById("tVoto").value = "";
}
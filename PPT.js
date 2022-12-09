var escolhaPC = 0; //1 = pedra, 2 = papel, 3 = tesoura
var escolhaPlayer = 0;
var pontosPlayer = 0;
var pontosPC = 0;

//Tela inicial
//Inicial screen
function lore(){
    document.getElementById("body").style.visibility='hidden';
    document.getElementById("body").style.backgroundImage="url(Imagens/wrongDownload.jpg)";
    document.getElementById("body").style.backgroundRepeat='no-repeat';
    document.getElementById("body").style.backgroundSize='cover';
    document.getElementById("body").style.backgroundPosition='center';
    document.getElementById("lore").style.visibility='visible';
}
function start(){
    document.getElementById("body").style.visibility='visible';
    document.getElementById("body").style.backgroundImage='none';
    document.getElementById("body").style.backgroundImage='url(Imagens/hackingBG.gif';
    document.getElementById("lore").style.visibility='hidden';
    document.getElementById("start").style.visibility='hidden';
    const music = new Audio('Musica/vitality_helltaker(ogg).ogg');
    music.play();
    music.loop =true;
}

//Sistema de pedra papel e tesoura
//Rock, paper and scissors system
function escolhaPedra(){
    document.getElementById("player").style.backgroundImage="url(Imagens/gigachad.png)";
    document.getElementById("PC").style.backgroundImage="url(Imagens/hacker1.jpg)";
    escolhaPC = Math.floor((Math.random()*(3-1+1)))+1;

    if(escolhaPC == 1){
        pontosPC += 0;
        document.getElementById("vs").innerHTML = "None of you got data this time";
        document.getElementById("vs").style.fontSize = '360%';
    }
    else if(escolhaPC == 2){
        document.getElementById("vs").innerHTML = "Data lost";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPC += 1;
        document.getElementById("PC").style.backgroundImage="url(Imagens/hacker2.jpg)";
    }
    else{
        document.getElementById("vs").innerHTML = "Data saved";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPlayer += 1;
        document.getElementById("player").style.backgroundImage="url(Imagens/gigachad_rindo.jpg)";
    };
    document.getElementById("pontosPC").innerHTML = "Points: "+pontosPC+"/3";
    document.getElementById("pontosPlayer").innerHTML = "Points: "+pontosPlayer+"/3";

    //Sistema de pontuação
    //Score system
    if(pontosPlayer==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/gigachad-wither.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
        document.getElementById("vs").innerHTML = "You saved your data! Never download games from Baixaki again.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = '#00aaff';

        document.getElementById("restart").style.visibility = 'visible';
        document.getElementById("resultado").style.color='white';
        document.getElementById("resultado").style.backgroundColor='#00aaff';
        document.getElementById("resultado").style.borderColor='#00aaff';
    }
    else if(pontosPC==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/hacker3.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
        document.getElementById("vs").innerHTML = "You lost all of your data! Now pay for the rescue.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = 'red';

        document.getElementById("restart").style.visibility = 'visible';
    };
};
function escolhaPapel(){
    document.getElementById("player").style.backgroundImage="url(Imagens/gigachad.png)";
    document.getElementById("PC").style.backgroundImage="url(Imagens/hacker1.jpg)";
    escolhaPC = Math.floor((Math.random()*(3-1+1)))+1;

    if(escolhaPC == 1){
        document.getElementById("vs").innerHTML = "Data saved";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPlayer += 1;
        document.getElementById("player").style.backgroundImage="url(Imagens/gigachad_rindo.jpg)";
    }
    else if(escolhaPC == 2){
        pontosPC += 0;
        document.getElementById("vs").style.fontSize = '360%';
        document.getElementById("vs").innerHTML = "None of you got data this time";
    }
    else{
        document.getElementById("vs").innerHTML = "Data lost";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPC += 1;
        document.getElementById("PC").style.backgroundImage="url(Imagens/hacker2.jpg)";
    };
    document.getElementById("pontosPC").innerHTML = "Points: "+pontosPC+"/3";
    document.getElementById("pontosPlayer").innerHTML = "Points: "+pontosPlayer+"/3";

    //Sistema de pontuação
    //Score system
    if(pontosPlayer==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/gigachad-wither.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
        document.getElementById("vs").innerHTML = "You saved your data! Never download games from Baixaki again.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = '#00aaff';

        document.getElementById("restart").style.visibility = 'visible';
        document.getElementById("resultado").style.color='white';
        document.getElementById("resultado").style.backgroundColor='#00aaff';
        document.getElementById("resultado").style.borderColor='#00aaff';
    }
    else if(pontosPC==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/hacker3.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
        document.getElementById("vs").innerHTML = "You lost all of your data! Now pay for the rescue.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = 'red';

        document.getElementById("restart").style.visibility = 'visible';
    };
};
function escolhaTesoura(){
    document.getElementById("player").style.backgroundImage="url(Imagens/gigachad.png)";
    document.getElementById("PC").style.backgroundImage="url(Imagens/hacker1.jpg)";
    escolhaPC = Math.floor((Math.random()*(3-1+1)))+1;

    if(escolhaPC == 1){
        document.getElementById("vs").innerHTML = "Data lost";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPC += 1;
        document.getElementById("PC").style.backgroundImage="url(Imagens/hacker2.jpg)";
    }
    else if(escolhaPC == 2){
        document.getElementById("vs").innerHTML = "Data saved";
        document.getElementById("vs").style.fontSize = '360%';
        pontosPlayer += 1;
        document.getElementById("player").style.backgroundImage="url(Imagens/gigachad_rindo.jpg)";
    }
    else{
        pontosPC += 0;
        document.getElementById("vs").style.fontSize = '360%';
        document.getElementById("vs").innerHTML = "None of you got data this time";
    };
    document.getElementById("pontosPC").innerHTML = "Points: "+pontosPC+"/3";
    document.getElementById("pontosPlayer").innerHTML = "Points: "+pontosPlayer+"/3";

    //Sistema de pontuação
    //Score system
    if(pontosPlayer==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/gigachad-wither.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
        document.getElementById("vs").innerHTML = "You saved your data! Never download games from Baixaki again.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = '#00aaff';

        document.getElementById("restart").style.visibility = 'visible';
    }
    else if(pontosPC==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(Imagens/hacker3.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';

        document.getElementById("restart").style.visibility = 'visible';
        document.getElementById("vs").innerHTML = "You lost all of your data! Now pay for the rescue.";
        document.getElementById("vs").style.bottom = '5%';
        document.getElementById("vs").style.visibility = 'visible';
        document.getElementById("vs").style.color = 'red';
    };
};

//Jogar denovo
//Play again
function restart(){
    location.reload();
}

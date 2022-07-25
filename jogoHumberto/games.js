window.addEventListener("load", carregar);

function carregar() {
	//reduzindo codigo
	w = document.getElementById('p1');
	x = document.getElementById('p2');
	y = document.getElementById('p3');
	z = document.getElementById('p4');
	startGame = document.getElementById('start-game')
	//Botoes reduzidos
	bt = document.getElementById('btP1');
	bt2 = document.getElementById('btP2');
	//escutadores
	startGame.addEventListener('click', iniciaJogo);
	document.getElementById('start-game').addEventListener('mouseover', mudaPonteiro);
	bt.addEventListener('mousedown', atacaJogador);
	bt.addEventListener('mouseup', atacaJogadorUp);
	w.addEventListener('click', sobrePerso);
	w.addEventListener('mouseover', selectSon);
	x.addEventListener('click', sobrePerso1);
	x.addEventListener('mouseover', selectSon);
	y.addEventListener('click', sobrePerso2);
	y.addEventListener('mouseover', selectSon);
	z.addEventListener('click', sobrePerso3);
	z.addEventListener('mouseover', selectSon);
	bt.addEventListener('click', atacarP1);
	bt2.addEventListener('click', atacarP2);
	// tamanho da imagem escolhida
	h = 'style.backgroundSize';
	var section = document.getElementById('select-jogador');
    var listaCartas = section.getElementsByTagName('img');
    //globais de controle

   characters = ["p1.png","p2.png","p3.png","p4.png"];
   //matrix de ataques
   ataques = [
   	["Defendeu", 0],
   	["atack", 5],
   	["double slash", 10],
   	["triple slash", 30],
   	["Force atack", 40],
   	["jedi slasher", 50],
   ]
   certo = true;
   escolha = true;
   escolha2 = true;
   semSom = true;
   carregaImagem = true;
   ativa = document.getElementById('ativa');
   ativa.style.display = "none";
   vidaP1 = document.getElementById('life1').value;
   vidaP2 = document.getElementById('life2').value;
}
function iniciaJogo() {
	document.getElementById('menu-game').style.display = 'none';
	startGame.style.display = 'block';
	startGame.style.marginTop = '50px';
	startGame.innerHTML = "choose Your Hero";
	startGame.style = "heigth: 36px; width: 100px; border: 1px solid balck";
	ativa.style.display = "block";
	ativa.style.marginTop = "280px";
	areaGame(1);
	iniciaLuta(true);
}
function mudaPonteiro() {
	document.getElementById('start-game').style.cursor = "pointer";
}
function sobrePerso() {
	if(certo == true && escolha == true && escolha2 == true){

	w.style.boxShadow = "-5px -5px blue";	
	document.getElementById('fotoJogadorUm').innerHTML = "<img src='" + characters[0] + "' id='player1'>";
	w.style.backgroundSize = "240%";

	acepet(certo,escolha);
} else if (certo == false && escolha == false && escolha2 == true) {
	w.style.boxShadow = "-5px -5px red";	
	document.getElementById('fotoJogadorDois').innerHTML = "<img src='" + characters[0] + "' id='player2'>";
	acepet(certo,escolha,escolha2);
	escolha2 = false;
	w.style.backgroundSize = "240%";
	removeMenu('10');
	}
}
function sobrePerso1() {
	if(certo == true && escolha == true && escolha2 == true){

	x.style.boxShadow = "-5px -5px blue";	
	document.getElementById('fotoJogadorUm').innerHTML = "<img src='" + characters[1] + "' id='player1'>";
	x.style.backgroundSize = "240%";
	acepet(certo,escolha);
} else if (certo == false && escolha == false && escolha2 == true) {
	x.style.boxShadow = "-5px -5px red";	
	document.getElementById('fotoJogadorDois').innerHTML = "<img src='" + characters[1] + "' id='player2'>";
	acepet(certo,escolha,escolha2);
	escolha2 = false;
	x.style.backgroundSize = "240%";
	removeMenu('10');
	}

}
function sobrePerso2() {
	if(certo == true && escolha == true && escolha2 == true){

	y.style.boxShadow = "-5px -5px blue";	
	document.getElementById('fotoJogadorUm').innerHTML = "<img src='" + characters[2] + "' id='player1'>";
	y.style.backgroundSize = "240%";
	acepet(certo,escolha);
} else if (certo == false && escolha == false && escolha2 == true) {
	y.style.boxShadow = "-5px -5px red";	
	document.getElementById('fotoJogadorDois').innerHTML = "<img src='" + characters[2] + "' id='player2'>";
	acepet(certo,escolha,escolha2);
	y.style.backgroundSize = "240%";
	escolha2 = false;

	removeMenu('10');
	}

}
function sobrePerso3() {
	if(certo == true && escolha == true && escolha2 == true){

	z.style.boxShadow = "-5px -5px blue";	
	document.getElementById('fotoJogadorUm').innerHTML = "<img src='" + characters[3] + "' id='player1'>";
	z.style.backgroundSize = "240%";
	acepet(certo,escolha);
} else if (certo == false && escolha == false && escolha2 == true) {
	z.style.boxShadow = "-5px -5px red";	
	document.getElementById('fotoJogadorDois').innerHTML = "<img src='" + characters[3] + "' id='player2'>";
	z.style.backgroundSize = "240%";
	acepet(certo,escolha,escolha2);
	escolha2 = false;
	semSom = false;

	removeMenu('10');
	}
	
}
 function selectSon(_semSom) {
 	//seleciona o som sobre o personagem
 	if(semSom == true){
 	document.getElementById('sound').innerHTML = "<audio src='sound/SlowSabr.wav' play='hidden' autoplay>";
 	
 	} else {
 	document.getElementById('sound').innerHTML = "<audio src='' play='hidden' stop>";
 		
 	}
 }
 	
 function acepet(_certo,_escolha,escolha2) {
 	if (_certo == true || _escolha == true || escolha2 == true){	
 	document.getElementById('sound').innerHTML = "<audio src='sound/SaberOn.wav' play='hidden' autoplay>";
 		certo = false;
 		escolha = false;
 		
 	} else if (_certo == false || _escolha == false){
 		
 	document.getElementById('sound').innerHTML = "<audio src='' play='hidden' stop>";
 	
 	semSom = false;
 	selectSon(semSom);
 	}
 }

function areaGame(count) {
	if(carregaImagem == true) {

	ativa.style.display = "block";
	startGame.style.opacity = "0." + count + "";
	var alfa = document.getElementById('ativa').style.opacity = "0." + count + "";
	count++;
	var time = setTimeout('areaGame('+count+')',50);
	if( count == 10) {
	var alfa = document.getElementById('ativa').style.opacity = "1";
	startGame.style.opacity = 1;
		carregaImagem = false;
		}
	}

}
function removeMenu(_count) {
	if(_count == 10) {
	var alfaMenu = document.getElementById('select-jogador').style.opacity = 1;
	}else {
	var alfaMenu = document.getElementById('select-jogador').style.opacity = "0." + _count;
}
	_count--;
	var time = setTimeout('removeMenu('+_count+')',50);
	if(_count == 0) {
	var alfa = document.getElementById('select-jogador').style.opacity = "0";
	document.getElementById('select-jogador').style.display = 'none';
	document.getElementById('jogadorUm').style.marginTop = '159px';
	document.getElementById('jogadorDois').style.marginTop = '159px';
	soundGame(1,true)
 	iniciaLuta(false);
		
	}
}
function atacaJogador() {
	bt.style.borderRadius ="5px 0 5px 0";
	bt.style.outline ="none";
	bt.style.background ="rgb(178, 178, 223)";
	bt.style.fontSize = "13px";
	bt.disabled = false;
	
}
function atacaJogadorUp(){
	
	var x = bt.disabled;
	if( x == true) {
		bt.style.background ="red";
	bt.style.fontSize = "13px";
	} else {
		bt.style.background ="blue";
	bt.style.fontSize = "14px";
	}
}
function iniciaLuta(_disable) {
bt.disabled = _disable;
}
function atacarP1() {
	
	var ataque = Math.floor(Math.random() * 6);
	var atacando = ataques[ataque][1];
	var nomeGolpe = ataques[ataque][0];
	if(vidaP2 > 1) {
		vidaP2 = vidaP2 - atacando;
	document.getElementById('life2').value = vidaP2;
	if(atacando == 0) {
		document.getElementById('golpeP2').innerHTML = nomeGolpe;
		document.getElementById('golpeP1').innerHTML = '';
		soundAtaks(ataque);
	} else if (atacando > 0) {
		document.getElementById('golpeP1').innerHTML = nomeGolpe;	
		document.getElementById('golpeP2').innerHTML = '';	
		soundAtaks(ataque);
		danoP1(1);
	}
		if (vidaP2 < 1) {
			startGame.innerHTML = "<p>Player 1 wins</p>";
		document.getElementById('life2').value = "00";
		document.getElementById('sound').innerHTML = "<audio src='' play='hidden' stop>";
		document.getElementById('sound2').innerHTML = "<audio src='' play='hidden' stop>";
		soundGame(2);
		soundAtaks(ataque);
		}
	}
	var ataqueP1 = true; 
	if(ataqueP1 == true) {
		bt.disabled = true;
		bt2.disabled = false;

	}
	var btDisable = bt.disabled;
	if(btDisable == true) {
		bt.style.background ="rgb(178, 178, 223)";
		bt2.style.background ="blue";
	} else if (btDisable == false) {
		bt.style.background ="blue";
		bt2.style.background ="rgb(178, 178, 223)";

	}
	
}
function atacarP2() {
	
	var ataque = Math.floor(Math.random() * 6);
	var atacando = ataques[ataque][1];
	var nomeGolpe = ataques[ataque][0];
	if(vidaP2 > 1) {
		vidaP2 = vidaP2 - atacando;
	document.getElementById('life1').value = vidaP2;
	if(atacando == 0) {
		document.getElementById('golpeP1').innerHTML = nomeGolpe;
		document.getElementById('golpeP2').innerHTML = '';
		soundAtaks(ataque);
	} else if (atacando > 0) {
		document.getElementById('golpeP2').innerHTML = nomeGolpe;	
		document.getElementById('golpeP1').innerHTML = '';	
		danoP2(1);
		soundAtaks(ataque);
	}
		if (vidaP2 < 1) {
			startGame.innerHTML = "<p>Player 2 wins</p>";
		document.getElementById('life1').value = "00";
		document.getElementById('sound2').innerHTML = "<audio src='' play='hidden' stop>";
		soundGame(3);
		soundAtaks(ataque);
		}
	} 
	var ataqueP2 = true; 
	if(ataqueP2 == true) {
		bt2.disabled = true;
		bt.disabled = false;
		bt2.style.background ="rgb(178, 178, 223)";

	}
	var bt2Disable = bt2.disabled;
	if(bt2Disable == true) {
		bt2.style.background ="rgb(178, 178, 223)";
		bt.style.background ="blue";
	} else if(bt2Disable == false){
		bt2.style.background ="blue";
		bt2.style.background ="rgb(178, 178, 223)";

	}

}
function danoP1(_dano) {
	var dano = _dano % 2;
	if(dano == 0 && _dano <= 10) {
		document.getElementById('player2').style.opacity = 1;
	} if(dano != 0 && _dano < 10){
		document.getElementById('player2').style.opacity = 0;
	}
   
    _dano++;
    var timer = setTimeout('danoP1('+_dano+')',50);

}
function danoP2(_dano) {
	var dano = _dano % 2;
	if(dano == 0 && _dano <= 10) {
		document.getElementById('player1').style.opacity = 1;
	} if(dano != 0 && _dano < 10){
		document.getElementById('player1').style.opacity = 0;
	}
   
    _dano++;
    var timer = setTimeout('danoP2('+_dano+')',50);

}
function soundAtaks(_ataque) {
	var sound = document.getElementById('sound2');
	switch (_ataque) {
		case 0: 
		sound.innerHTML = "<audio src='sound/defende.wav' play='hidden' autoplay>";
		break;
		case 1:
		sound.innerHTML = "<audio src='sound/ataque.wav' play='hidden' autoplay>";
		break;
		case 2:
		sound.innerHTML = "<audio src='sound/doubleSlash.wav' play='hidden' autoplay>";
		break;
		case 3:
		sound.innerHTML = "<audio src='sound/tripleSlash.wav' play='hidden' autoplay>";
		break;
		case 4:
		sound.innerHTML = "<audio src='sound/forca.wav' play='hidden' autoplay>";
		break;
		case 5:
		sound.innerHTML = "<audio src='sound/jediAtack.wav' play='hidden' autoplay>";
		break;

	}
}
	function soundGame(_soundGame) {
	var sound = document.getElementById('sound');
	var sound2 = document.getElementById('sound2');

		switch (_soundGame) {
			case 1:
			sound.innerHTML = "<audio src='sound/anakin.mp3' play='hidden' autoplay>";
			break;
			case 2:
			setTimeout(function(){ sound.innerHTML = "<audio src='sound/player_1_wins.mp3' play='hidden' autoplay>"; }, 1300);
			
			sound2.innerHTML = "<audio src='' play='hidden' autoplay>";
			break;
			case 3:
			setTimeout(function(){ sound.innerHTML = "<audio src='sound/player_2_wins.mp3' play='hidden' autoplay>"; }, 1300);
			
			sound2.innerHTML = "<audio src='' play='hidden' autoplay>";
			break;
		
	}
}
	
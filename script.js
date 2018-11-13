
var mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

];
var posPlayer = [0, 0, 0]; //array amb la posició del jugador i la direcció a l'última posició
var posFantasma = [
    [0,0,0],[0,0,0],[0,0,0] //Array amb la posició dels 3 fantasmes i la direcció a l'última posició
];
//un array amb les direccions disponibles (con orden de las agujas del reloj: arriba, derecha, abajo, izquierda) inicializadas a false.
var dirFantasma = [
    [false, false, false, false], 
    [false, false, false, false],
    [false, false, false, false]  
];
var dirPlayer =[false, false, false, false];
function muestraMapa(mapa){
    var map = "";
    for(var x=0; x<mapa.length; x++){
    for(var y=0; y<mapa[x].length; y++){
        
        if(y==(mapa[x].length)-1){
            map+=mapa[x][y]+"\n"
        }else{
         map+=mapa[x][y]+" "   
        }
    }
}
    console.log(map);
}
//Posiciona inicialment els fantasmes i guarda les coordenades a l'array posFantasma
function posicioFantasmesInicial(){
    for(var f = 0;f <=2; f++ ){
    
        var continua = false;
        
        do{
        var x = Math.floor(Math.random() * mapa.length) + 0;
        var y = Math.floor(Math.random() * mapa[0].length) + 0;
            if(mapa[x][y]!=0&&mapa[x][y]!="X"){
            mapa[x][y]="X";
            posFantasma[f][0]=x;
            posFantasma[f][1]=y;
            
            continua = true;
        }
        }while(continua==false);
        console.log(posFantasma);
    }
}
var posX = 0;
var posY = 0;
//Posiciona inicialment al jugador
function setPlace(){
            var continua = false;
        
        do{
        posX = Math.floor(Math.random() * mapa.length) + 0;
        posY = Math.floor(Math.random() * mapa[0].length) + 0;
            if(mapa[posX][posY]!=0&&mapa[posX][posY]!="X"){
            mapa[posX][posY]="U";
            posPlayer[0]=posX;
            posPlayer[1]=posY;
            continua = true;
        }
        }while(continua==false);
        console.log(posPlayer);
}

//Comprova la direcció del player i guarda a un array quines direccions són accesibles
function comprovarDirPlayer(){
    if(mapa[posPlayer[0]+1][posPlayer[1]]==1){
        dirPlayer[0]=true;
    }else dirPlayer[0]=false;
    if(mapa[posPlayer[0]-1][posPlayer[1]]==1){
        dirPlayer[1]=true;
    }else dirPlayer[1]=false;
    if(mapa[posPlayer[0]][posPlayer[1]+1]==1){
        dirPlayer[2]=true;
    }else dirPlayer[2]=false;
    if(mapa[posPlayer[0]][posPlayer[1]-1]==1){
        dirPlayer[3]=true;
    }else dirPlayer[2]=false;
    //Agafa un número random entre 0 i 3 i comprova que a aquesta posició de l'array la direcció sigui accesible, si ho és, guarda a la tercera posició de l'array de la posició la direcció. 
    do{
    var direccio = Math.floor((Math.random() * 3) + 0);

    }while(dirPlayer[direccio]!=true);
    posPlayer[2]=direccio;
    console.log("La direcció del player és: "+direccio);
}
function mourePlayer(){
    if(viu==true){
    if(dirTeclat==0&&mapa[posPlayer[0]-1][posPlayer[1]]!=0){
        mapa[posPlayer[0]][posPlayer[1]]=1;
        posPlayer[0]-=1;
        mapa[posPlayer[0]][posPlayer[1]]="U";
    }
    if(dirTeclat==2&&mapa[posPlayer[0]+1][posPlayer[1]]!=0){
        mapa[posPlayer[0]][posPlayer[1]]=1;
        posPlayer[0]+=1;
        mapa[posPlayer[0]][posPlayer[1]]="U";
    }
    if(dirTeclat==1&&mapa[posPlayer[0]][posPlayer[1]+1]!=0){
        mapa[posPlayer[0]][posPlayer[1]]=1;
        posPlayer[1]+=1;
        mapa[posPlayer[0]][posPlayer[1]]="U";
    }
    if(dirTeclat==3&&mapa[posPlayer[0]][posPlayer[1]-1]!=0){
        mapa[posPlayer[0]][posPlayer[1]]=1;
        posPlayer[1]-=1;
        mapa[posPlayer[0]][posPlayer[1]]="U";
    }
    }else{
        mapa[posPlayer[0]][posPlayer[1]]="1";
    }
    
}

//Per cada fantasma comprova què direccions pot prendre i fa el mateix que abans amb el player 
function comprovarFantasma(){
    for(var n = 0; n<=2;n++){

    if(mapa[posFantasma[n][0]-1][posFantasma[n][1]]!=0){
        dirFantasma[n][0]=true;

    }else{
        dirFantasma[n][0]=false;
    }
    if(mapa[posFantasma[n][0]+1][posFantasma[n][1]]!=0){
        dirFantasma[n][2]=true;

    }else{
        dirFantasma[n][2]=false;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]-1]!=0){
        dirFantasma[n][3]=true;

    }else{
        dirFantasma[n][3]=false;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]+1]!=0){
        dirFantasma[n][1]=true;

    }else{
        dirFantasma[n][1]=false;
    }
     //El bucle de canviar direcció no s'executarà si el fantasma està a una recta   
    var changeDir=false;
    if(posFantasma[n][2]==0 && mapa[posFantasma[n][0]-1][posFantasma[n][1]]==0){
        changeDir=true;
        //dirFantasma[n][2]=false;
    }
    else if(posFantasma[n][2]==2 && mapa[posFantasma[n][0]+1][posFantasma[n][1]]==0){
        changeDir=true;
        //dirFantasma[n][0]=false;
    }
    else if(posFantasma[n][2]==1 && mapa[posFantasma[n][0]][posFantasma[n][1]+1]==0){
        changeDir=true;
        //dirFantasma[n][3]=false;
    }
    else if(posFantasma[n][2]==3 && mapa[posFantasma[n][0]][posFantasma[n][1]-1]==0){
        changeDir=true;
        //dirFantasma[n][1]=false;
    }
    //De totes les direccions disponibles agafa una
    
    if(changeDir==true){
    do{
    var direccio = Math.floor((Math.random() * 3) + 0);

    }while(dirFantasma[n][direccio]!=true);
        
        posFantasma[n][2]=direccio;
    }
    }
    
}
//Depenent de la direcció obtinguda disponible es mourà cap a una direcció o altra. 
function moureFantasma(){
    
    for(n=0;n<=2;n++){
        var dir = posFantasma[n][2];
        if(dir == 0){//Arriba
            mapa[posFantasma[n][0]][posFantasma[n][1]]=1;
            posFantasma[n][0] -=1;
            mapa[posFantasma[n][0]][posFantasma[n][1]]="X";
        }
        else if(dir == 2){//Abajo
            mapa[posFantasma[n][0]][posFantasma[n][1]]=1;
            posFantasma[n][0] +=1;
            mapa[posFantasma[n][0]][posFantasma[n][1]]="X";
        }
        else if(dir == 1){//Derecha
            mapa[posFantasma[n][0]][posFantasma[n][1]]=1;
            posFantasma[n][1] +=1;
            mapa[posFantasma[n][0]][posFantasma[n][1]]="X";
        }
        else if(dir == 3){//Izquierda
            mapa[posFantasma[n][0]][posFantasma[n][1]]=1;
            posFantasma[n][1] -=1;
            mapa[posFantasma[n][0]][posFantasma[n][1]]="X";
        }
    }
}

//Controlador que s'executarà cada segón
function pacMan(){
    var element = document.getElementById("all");  
	document.onkeydown = teclat;
    
    comprovarDirPlayer();
    
    comprovarFantasma();
    moureFantasma();
    mourePlayer();
    mostrarMapa();
    
    console.log("La posicion del player: "+posPlayer[0]+" "+posPlayer[1]);
    console.log("La posicion del fantasma1: "+posFantasma[0][0]+" "+posFantasma[0][1]);
    console.log("La posicion del fantasma2: "+posFantasma[1][0]+" "+posFantasma[1][1]);
    console.log("La posicion del fantasma3: "+posFantasma[2][0]+" "+posFantasma[2][1]);
    
    if(posPlayer[0]==posFantasma[0][0]&&posPlayer[1]==posFantasma[0][1]||
      posPlayer[0]==posFantasma[1][0]&&posPlayer[1]==posFantasma[1][1]||
      posPlayer[0]==posFantasma[2][0]&&posPlayer[1]==posFantasma[2][1]){
        document.getElementById("bloc").innerHTML = "Has perdut amb "+points+" punts :( <br> <button type='button' onclick='restart()'>Reinicia</button>"; 
        viu=false;
    }else if(viu==true){
    document.getElementById("bloc").innerHTML = "Punts: <font color='green'>"+points+"</font> de 120"; 
    points++;
    }
    if(points>=120){
        document.getElementById("bloc").innerHTML = "Has guanyat!";
        viu=false;
    }
}
var dirTeclat = 0;
function teclat(e){ 
	var key = document.all ? e.which : e.key;
	if (key == "ArrowUp"&&mapa[posPlayer[0]-1][posPlayer[1]]!=0){
		dirTeclat = 0; //arriba
	}
	else if (key == "ArrowRight"&&mapa[posPlayer[0]][posPlayer[1]+1]!=0){
		dirTeclat = 1; //derecha
	}
	else if (key=="ArrowDown"&&mapa[posPlayer[0]+1][posPlayer[1]]!=0){
		dirTeclat = 2; //abajo
	}	
	else if (key =="ArrowLeft"&&mapa[posPlayer[0]][posPlayer[1]-1]!=0){
		dirTeclat = 3; //izquierda
	}
}

var points = 0;
function mostrarMapa(){ 
	var canvas = document.getElementById("mapa");
	var img; 
	for(y=0;y<=31;y++)
	{	
		for(x=0;x<=27;x++)
		{
			if (mapa[y][x] == 0){
				img = document.getElementById("paret"); 
				}
			else if (mapa[y][x] == 1){
				img = document.getElementById("cami"); 
			}
			else if (mapa[y][x] == "U"){ 
				img = document.getElementById("pacman");
			}
			else if (mapa[y][x] == "X"){ 
				img = document.getElementById("fantasma");
			}
			var ctx = canvas.getContext("2d").drawImage(img, x*20, y*20, 20, 20 ); 
		}
	}
}
function restart(){
    location.reload();
}

document.getElementById("bloc");
var viu =true;
mostrarMapa();
posicioFantasmesInicial();
setPlace();
var pacoMan = setInterval(pacMan, 500);
if(viu==false){
//clearInterval(pacoMan);
}







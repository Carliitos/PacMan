
var mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

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
//Posiciona inicialment al jugador a una posició disponible
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
    if(mapa[posPlayer[0]+1][posPlayer[1]]!=0){
        dirPlayer[0]=true;
    }else dirPlayer[0]=false;
    if(mapa[posPlayer[0]-1][posPlayer[1]]!=0){
        dirPlayer[1]=true;
    }else dirPlayer[1]=false;
    if(mapa[posPlayer[0]][posPlayer[1]+1]!=0){
        dirPlayer[2]=true;
    }else dirPlayer[2]=false;
    if(mapa[posPlayer[0]][posPlayer[1]-1]!=0){
        dirPlayer[3]=true;
    }else dirPlayer[2]=false;
    //Agafa un número random entre 0 i 3 i comprova que a aquesta posició de l'array la direcció sigui accesible, si ho és, guarda a la tercera posició de l'array de la posició la direcció si no ho és, executa de nou el bucle i prova amb altra direcció. 
    do{
    var direccio = Math.floor((Math.random() * 3) + 0);

    }while(dirPlayer[direccio]!=true);
    posPlayer[2]=direccio;
}
//A aquesta funció si la variable "viu" és true, comprova la direcció del comecocos i comprova si es pot anar, si es pot, mou una posició, si no, no fa res. Si la variable viu no és true, marca la casella amb un 1, equivalent a res.  
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

//Per cada fantasma comprova què direccions pot prendre i fa el mateix que abans amb el player, guardant a l'array direcció fantasma un true o un false a cada posició.
function comprovarFantasma(){
    dirFantasma = [
    [false, false, false, false], 
    [false, false, false, false],
    [false, false, false, false]  
];
    for(var n = 0; n<=2;n++){
    
    if(mapa[posFantasma[n][0]-1][posFantasma[n][1]]!=0){
        dirFantasma[n][0]=true;
        if(mapa[posFantasma[n][0]-1][posFantasma[n][1]]=="U"){
            viu=false;
        }

    }else{
        dirFantasma[n][0]=false;
    }
    if(mapa[posFantasma[n][0]+1][posFantasma[n][1]]!=0){
        dirFantasma[n][2]=true;
        if(mapa[posFantasma[n][0]+1][posFantasma[n][1]]=="U"){
            viu=false;
        }
        

    }else{
        dirFantasma[n][2]=false;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]-1]!=0){
        dirFantasma[n][3]=true;
        if(mapa[posFantasma[n][0]][posFantasma[n][1]-1]=="U"){
            viu=false;
        }

    }else{
        dirFantasma[n][3]=false;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]+1]!=0){
        dirFantasma[n][1]=true;
        if(mapa[posFantasma[n][0]][posFantasma[n][1]+1]=="U"){
            viu=false;
        }

    }else{
        dirFantasma[n][1]=false;
    }
     //El bucle de canviar direcció no s'executarà si el fantasma està a una recta, a continuació es comprova que el fantasma pot seguir avançant, si no pot, la variable changeDir es canvia a true, la qual cosa executarà el codi del final de la funció. També faig que no pugui tornar per on ha vingut. 
    var changeDir=false;
    if(posFantasma[n][2]==0 && mapa[posFantasma[n][0]-1][posFantasma[n][1]]==0){
        changeDir=true;
        dirFantasma[n][2]=false;
    }
    else if(posFantasma[n][2]==2 && mapa[posFantasma[n][0]+1][posFantasma[n][1]]==0){
        changeDir=true;
        dirFantasma[n][0]=false;
    }
    else if(posFantasma[n][2]==1 && mapa[posFantasma[n][0]][posFantasma[n][1]+1]==0){
        changeDir=true;
        dirFantasma[n][3]=false;
    }
    else if(posFantasma[n][2]==3 && mapa[posFantasma[n][0]][posFantasma[n][1]-1]==0){
        changeDir=true;
        dirFantasma[n][1]=false;
    }
    //De totes les direccions disponibles agafa una, si el bolean changeDir és true fent servir un bucle per escollir una nova direcció mentres aquesta no sigui vàlida
    
    if(changeDir==true){
    do{
    var direccio = Math.floor((Math.random() * 4) + 0);
        console.log("LA DIRECCIO ES"+direccio);

    }while(dirFantasma[n][direccio]!=true);
        
        posFantasma[n][2]=direccio;
    }
    }
    
}
//Utilitza la direcció disponible de cada fantasma per moure una posició
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
    //A cada segon detecta què tecla s'ha pulsat
    var element = document.getElementById("all");  
	document.onkeydown = teclat;
    
    //comprovarDirPlayer();
    
    
    //Si el bolean viu es torna false, es deixa d'executar el pacoMan, aixi que es para el videojoc
    if(viu==false){
    clearInterval(pacoMan);
    }
    
    
    comprovarFantasma();
    moureFantasma();
    mourePlayer();
    mostrarMapa();
    
    //Es comprova a cada segón que la posició del player no sigui la mateixa a la posició d'un fantasma, si és igual, la variable booleana "viu" es torna false, i mostra al div amb l'id "bloc" un missatge. Si no, mostra els punts actuals. 
    if(posPlayer[0]==posFantasma[0][0]&&posPlayer[1]==posFantasma[0][1]||
      posPlayer[0]==posFantasma[1][0]&&posPlayer[1]==posFantasma[1][1]||
      posPlayer[0]==posFantasma[2][0]&&posPlayer[1]==posFantasma[2][1]){
        document.getElementById("bloc").innerHTML = "Has perdut amb "+points+" punts :( <br> <button type='button' onclick='restart()'>Reinicia</button><h6><font color='blue'>MaxPts(cookie)="+maxPunts+"</font></h6>";  
        viu=false;
    }else if(viu==true){
    document.getElementById("bloc").innerHTML = "Punts: <font color='green'>"+points+"</font> de 120<br><h6>MaxPts(cookie)="+maxPunts+"</h6>"; 
    points++;
        //Si el valor de la cookie guardat a la variable maxPunts és menor al valor dels points, actualitza la cookie
        if(maxPunts<points){
            maxPunts=points;
            document.cookie = "punts="+maxPunts+"; path=/";
            
        }
    }
    //Si els punts són 120 (equivalent a 1min), viu és igual a false i mostra un missatge de "has guanyat"
    if(points>=120){
        document.getElementById("bloc").innerHTML = "Has guanyat!";
        viu=false;
    }
}
//Detecta quina tecla s'ha pulsat i la guarda a la variable key, per després ser utilitzada per moure el comemcocos
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

//Es mostra el mapa fent servir un for que recorre tot l'array mapa, mostrant diferents tipus d'imatge al canvas depenent del contingut dins l'array.
function mostrarMapa(){ 
	var canvas = document.getElementById("mapa");
	var img; 
	for(y=0;y<=31;y++)
	{	
		for(x=0;x<=30;x++)
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
//Funció que s'executa si es prem el botó "restart" que surt si es perd
function restart(){
    location.reload();
}

//Es declaren algunes variables i s'inicien algunes funcions
var points = 0;
var viu =true;
var maxPunts;
document.getElementById("bloc");
mostrarMapa();
posicioFantasmesInicial();
setPlace();

//Funció que executa la funció pacMan cada mitg segon. (el guarda a una variable per poder pararla en un moment)
var pacoMan = setInterval(pacMan, 500);

//Si la cookie no està creada, la crea. AVIS IMPORTANT: LA COOKIE NO FUNCIONA A GOOGLE CHROME JA QUE BLOQUEJA LES COOKIE QUE PROVENEN DE FILE LOCAL
if (document.cookie.indexOf("punts") >= 0) {
  maxPunts = getCookie("punts");
}
else {
  document.cookie = "punts=0; path=/";
    var lasCookies = document.cookie;
    console.log("S'ha creat la cookie"+lasCookies);
    maxPunts = getCookie("punts");
}
//Aquesta funció agafa el valor de la cookie i el retorna
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}







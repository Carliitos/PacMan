
var mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
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
//Controlador que s'executarà cada segón
function pacMan(){
    posX++;
    if(mapa[posX+1][posY]==1){
    mapa[posX][posY]=1;
    mapa[posX+1][posY]="U";
    }else{
        console.log("bueno dia");
    }
    comprovarFantasma();
    comprovarDirPlayer();
    muestraMapa(mapa);
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
//Per cada fantasma comprova què direccions pot prendre i fa el mateix que abans amb el player 
function comprovarFantasma(){
    for(var n = 0; n<=2;n++){
    var direccions = 0;
    if(mapa[posFantasma[n][0]+1][posFantasma[n][1]]==1){
        dirFantasma[n][0]=true;
        direccions++;
    }
    if(mapa[posFantasma[n][0]-1][posFantasma[n][1]]==1){
        dirFantasma[n][2]=true;
        direccions++;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]+1]==1){
        dirFantasma[n][3]=true;
        direccions++;
    }
    if(mapa[posFantasma[n][0]][posFantasma[n][1]-1]==1){
        dirFantasma[n][1]=true;
        direccions++;
    }
    //Aquí fa el mateix que amb el player, guardant el numero de la direcció. 
    do{
    var direccio = Math.floor((Math.random() * 3) + 0);

    }while(dirFantasma[n][direccio]!=true);
        
        dirFantasma[n][3]=direccio;
    }
    
}


//console.log("El length es: "+)
muestraMapa(mapa);
posicioFantasmesInicial();
setPlace();
muestraMapa(mapa);

setInterval(pacMan, 1000);








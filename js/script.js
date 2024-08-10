//alert en js
alert("Bienvenu dans mes tps sur js");

//affichage  d'une chaine de caracteres dans la console
console.log("bienvenu à tous");

//declaration, affectation variable et affichage dans la console
let prenom = "fabrice";
let age = 48;
const maConstante=57;

console.log(prenom);
console.log(maConstante);

//concatenation
let maChaine="Bonjour et bienvenu " + prenom;
console.log(maChaine);
console.log("Monsieur KAMDEM a "+ age +" ans");

//types de donnees
let string = "je suis une chaine de caracteres";
let number = 75;
let boolean = true;
let array = ["je","suis un array", 63, false];
let object = {
    nom: "NANKAM",
    premon2: "junior",
    age2: 51,
    ville: "yaoundé"
}

console.log(boolean);
console.log(array);
console.log(object);

//les operateurs
console.log(5+9);
let nbre1=23;
let nbre2=64;
let total=nbre1*nbre2;
console.log(total);

total = total + 19;
console.log(total);

//structures de controle
let x = 72;
let y = 120;

if(x<y){
    alert(x+" est plus petit que "+y);
}else if(x>y){
    alert(x+" est plus grand que "+y);
}else{
    alert("les 2 nombres sont égaux");
}

let valeur=20;

if(valeur){  
    console.log("valeur existe !"); 
}else{
    console.log("valeur n'existe pas !");
}

if(x===y){
    console.log("ls sont égaux !");
}else{
    console.log("ils ne sont pas égaux !");
}

//les fonctions
function afficherDsConsole(){
    console.log("j'affiche cette chaine dans la console");
    alert("affichage reussi ! ");
}

afficherDsConsole();

const addition = (a,b) => {
    console.log(a+b);
}

addition(x,y);




















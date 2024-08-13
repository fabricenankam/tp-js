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

//les classes 
class Rectangle {

    constructor(width, height){

    //les erreurs
        if(width < 0 || height < 0){
            throw new Error("impossible d'avoir un rectangle avec une dimension négative !");
        }
    //fin code erreur

        this.width=width;
        this.height=height;
    }

    get perimeter(){
        return (this.width + this.height)*2;
    }

    get isValid(){
        return this.width > 0 && this.height > 0;
    }

    isBiggerThan(shape){
        return this.perimeter > shape.perimeter;
    }

}

class Square extends Rectangle{

    constructor(width){
        super(width,width);
    }
}



let r1 = new Rectangle(10,20);
console.log(r1);


console.log(r1.perimeter);
console.log(r1.isValid);

    //les erreurs
try{
    let r2 = new Rectangle(-10,18);
    console.log(r2.perimeter);
    console.log(r2.isValid);
}catch(e){
console.log(e.message);
}
    //fin code erreur

let s = new Square(20,20);
console.log(s.perimeter);
console.log(s.isValid);

console.log(r1.isBiggerThan(s));

//les erreurs

try{
    let width = parseInt(prompt("Largeur"), 10);
    let height = parseInt(prompt("hauteur"), 10);
    let r = new Rectangle(width,height);
    console.log(r.perimeter);    
}catch(e){
console.log("impossible de construire le rectangle");
}

//les fonctions usuelles
   //les tableaux

   let tab = [5, 25, 17, 63, 38, 56];
   console.log(tab.at(-2));

   let goodNotes = tab.filter((note) => (note >= 50));
   console.log(goodNotes);

   tab.forEach((notes, index) => {
    console.log(notes, index)
   })
   
   let personnes = [
    {firstname: "Eric" , lastname: "kamdem"},
    {firstname: "jean" , lastname: "mbarga"},
    {firstname: "serges" , lastname: "edzoa"},
    {firstname: "bertrand" , lastname: "essomba"},
]

console.log(
    personnes
    .map((p) => p.firstname+" "+p.lastname)
    .join("\n")
);

     //les objets

     

   

   
   

   

























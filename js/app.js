//crearemos la primera funcion para cifrar
function cipher (){
// dentro de ella crearemos las variables.
var alphabet = prompt("Ingresa el alfabeto").toUpperCase().toLowerCase();
var newArray = alphabet.split("");
//  en la nueva varible newAlphabet se colocara los elementos nuevos
var newAlphabet = [];
// realizaremos un bucle con for.
 for (i=0; i<newArray.length; i++){
// dentro del for realizarmos la condicion pedida, para ello crearemos un var
//de la locacion del alfabeto.
var location = newArray[i].charCodeAt();
var locationTwo =((location - 65 +33)%26 + 65);
var code = String.fromCharCode(locationTwo);
newAlphabet.push(code);
 }
// con un return para retornar el cifrado
return newAlphabet.join("")
}
cipher()

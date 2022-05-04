//guardamos el numero de pokemon que el usuario quera

var numero = prompt(¿Cuantos pokemon quieres?);

//declara nuestro array vacio

var pokemones = []

//declaramos nuestro ciclo
for(var i = 0; i < numero; i++){
//traigo un dato del usuario
var pokemon = prompt ("Escribe el nombre de un pokemon!");
//agrego el dato del usuario al array 
pokemones.push(pokemon);
}
//Imprimimos la linea final en el documento
document.write(pokemones [i] + " yo te elijo!  <br>");

document.write("Haz elegido tus " + numero + pokemones!")





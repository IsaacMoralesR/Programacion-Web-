var name = prompt("¿Cuál es tu nombre?");
var edad = prompt("¿Cuál sería tu edad en este año?") ;
var futuro = prompt("¿En qué año futuro quieres saber tu edad?");
var actual = 2022;

var nacimiento = actual - edad;
var edadFuturo = futuro - nacimiento;

document.write("Hola " + name + " naciste en el año " + nacimiento + " tu edad en el año " + futuro + " sería de " + edadFuturo + " años, y serás viejito");
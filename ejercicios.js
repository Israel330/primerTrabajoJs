




let nombre= prompt("cual es tu nombre");
let apellido= prompt("cuales tu apellido");
let vacio= " ";
let nombreCompleto=(vacio+ nombre + vacio + apellido);
alert ("tu nombre es" + vacio+ nombre + vacio + apellido);

for (let i=1; i< 10; i++) {
	alert ("tu nombre es" + nombreCompleto + vacio +i);
};
let edad= parseInt( prompt( nombreCompleto + vacio +"ingrese su edad" ));
switch (edad){
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	case 25:
	case 26:
	case 27:
	case 28:
	case 29:
	case 30:
	alert( nombreCompleto+ vacio +"usted es muy joven");
	break;
	case 31:
	case 32:
	case 33:
	case 34:
	case 35:
	case 36:
	case 37:
	case 38:
	case 39:
	case 40:
	alert(nombreCompleto+vacio+ "usted esta a la mitad de su vida");
	break;

	case 41:
	case 42:
	case 43:
	case 44:
	case 45:
	case 46:
	case 47:
	case 48:
	case 49:
	case 50:
	case 51:
	case 52:
	case 53:
	case 54:
	case 55:
	case 56:
    
    alert(nombreCompleto+ vacio+"usted esta al horno");
    break;
};



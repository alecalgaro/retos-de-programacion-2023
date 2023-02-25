/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const charactersLowerCase = "abcdefghijklmnñopqrstuvwxyz";
const charactersUpperCase = charactersLowerCase.toUpperCase();
const charactersNumbers = "0123456789";
const charactersSymbols = '()¬%#@"=!¡?¿[-+ç/ª])';

let characters = charactersLowerCase; // cadena básica solo con letras minúsculas

const generatePassword = (long = 8, capitalLetters = true, numbers = true, symbols = true) => {
	let password = "";
	if (long < 8 || long > 16) return "La contraseña debe tener entre 8 y 16 caracteres.";

	if (capitalLetters) characters += charactersUpperCase;
	if (numbers) characters += charactersNumbers;
	if (symbols) characters += charactersSymbols;

	// genero un indice entre 0 y el length de la cadena de caracteres posibles y voy asignando
	// esos caracteres para formar contraseña con la longitud elegida
	for (let i = 0; i < long; i++) {
		password += characters[Math.floor(Math.random() * characters.length)];
	}

	return password;
};

// Pruebas:
console.log(generatePassword(5, false, false, false)); // error de longitud
console.log(generatePassword(8, true, false, false)); // solo mayúsculas
console.log(generatePassword(10, true, true, false)); // mayúsculas y números
console.log(generatePassword(12, true, true, true)); // mayúsculas, números y símbolos
console.log(generatePassword()); // por defecto con longitud 8, mayúsculas, números y símbolos

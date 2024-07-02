// 1. Calculadora de promedio y situación del alumno

function calcularPromedio(n1, n2, n3, n4) {
    let promedio = (n1 + n2 + n3 + n4) / 4
    return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? 'Aprobado' : 'Reprobado';
   
}

console.log('Tu promedio es de: ' + calcularPromedio(4, 6, 2, 3));
console.log('Por lo tanto estas: ' + verificarAprobacion(calcularPromedio(4, 6, 2, 3)));

//Calcular el IMC de una persona.

function calcularIMC(peso, altura){
   return peso / (altura * altura);
}

// Ejemplo de uso
const imc = calcularIMC(85, 1.77);
console.log(`El IMC es: ${imc.toFixed(2)}`); // Muestra el IMC con dos decimales

// 2. Calcula el factorial de un numero en este caso 5.
// el factorial es multiplicar el número por los números anteriores positivos.
//Ejemplo 5 = 5 x 4 x 3 x 2 x 1 = 120

function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}

console.log(factorialRecursivo(5)); // 120

//3. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
let lenguagesDeProgramacion = ['Java', 'Ruby', 'GoLang', 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion)
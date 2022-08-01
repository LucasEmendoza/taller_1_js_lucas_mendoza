console.log('conectando taller 1 javaScrip punto 3')

//Escribir un algoritmo para calcular el índice de masa corporal de una
//persona.

const peso = prompt('Ingrese el peso en kilogramos de la persona')
const altura = prompt('Ingrese la altura de la persona en metros')

const IMC = peso / (altura * altura)

alert(`El IMC de la persona es de ${IMC}`)
console.log(`El indice de masa corporal de la persona es de ${IMC}`)
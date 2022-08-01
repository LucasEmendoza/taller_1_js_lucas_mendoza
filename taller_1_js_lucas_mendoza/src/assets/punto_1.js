console.log('Conectando taller 1 javascrip')

//Escribir un algoritmo que valide si la suma de 2 números ingresados es
//positiva, negativa o cero.

const num1 = Number(prompt('Ingrese el numero 1'))

const num2 = Number(prompt('Ingrese el numero 2'))

console.log(`Numero 1: ${num1}`)
console.log(`Numero 2: ${num2}`)

const suma = num1 + num2
alert(`Suma total: ${suma}`)
console.log(`Suma total: ${suma}`)

if (suma > 0) {
  alert(`${suma} es un numeo positivo`)
} else if (suma === 0) {
  alert(`${suma}`)
} else {
  alert(`${suma} es un número negativo`)
}
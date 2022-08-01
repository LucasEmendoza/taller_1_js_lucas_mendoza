console.log('conectando taller 1 javaScrip punto 5')

//Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
//mes al que corresponde el valor ingresado, la cantidad de días que tiene
//ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
//entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.

const numMes = Number(prompt('Ingrese un numero del 1 al 12 relacionado a los meses del año donde conocera su numero de dias y el signo zodical que le corresponde'))


switch (numMes) {
  case 1:
    alert('Primer mes del año: Enero, tiene 31 días, sus signos zodiacales son Capricornio y Acuario')
    break;
  case 2: 
    alert('Segundo mes del año: Febrero, tiene 28 días y si es año biciesto 29, sus signos zodiacales son Acuario y Piscis')
  break;
  case 3: 
    alert('Tercer mes del año: Marzo, tiene 31 días, sus signos zodiacales son Piscis y Aries')
    break;
  case 4: 
    alert('Cuarto mes del año: Abril, tiene 30 días, sus signos zodiacales son Aries y Tauro')
    break; 
  case 5: 
    alert('El quinto mes del año : Mayo, tiene 31 días, sus signos zodiacales son Tauro y Geminis')
    break;
  case 6:
    alert('Sexto mes del año: Junio, Tiene 30 días, sus signos zodiacales son Geminis y Cancer')
    break;
  case 7: 
    alert('Septimo mes del año: Julio, tiene 31 días, sus signos zodiacales son Cancer y Leo')
    break;
  case 8:
    alert('Octavo mes del año: Agosto, tiene 31 días, sus signos zodiacales son Leo y Virgo')
    break;
  case 9:
    alert('Noveno mes del año: Septiembre tiene 30 días, sus signos zodaicales son Virgo y Libra') 
    break;
  case 10:
    alert('Decimo mes del año: Octubre, tiene 31 días, sus signos zodiacales son Libra y Escorpio')
    break;
  case 11:
    alert('Onceavo mes del año: Noviembre, tiene 30 días, sus signos zodiacales son Escorpio y Sagitario')
    break;
  case 12:
    alert('Doceavo mes del año: Diciembre, tiene 31 días, sus signos zodiacales son Sagitario y Capricornio')
    break;
    default:
      alert('Ingrese un numero valido entre 1 y 12 correspondiente a los meses del año')
    break;
}
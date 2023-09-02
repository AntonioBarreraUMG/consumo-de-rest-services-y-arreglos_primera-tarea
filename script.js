// some
const notas = [85, 92, 78, 64, 99];
const aprobado = notas.some(function(nota) {
  return nota >= 90;
});
console.log(aprobado); // Muestra true (porque al menos una nota es 90 o superior)

// every
const precios = [25.5, 30.75, 27.0, 22.9];
const todosMenoresDe30 = precios.every(function(precio) {
  return precio < 30;
});
console.log(todosMenoresDe30); // Muestra false (porque no todos los precios son menores de 30)

// splice
const letras = ["a", "b", "c", "d"];
letras.splice(2, 0, "x", "y");
console.log(letras); // Muestra ["a", "b", "x", "y", "c", "d"]

// sort
const nombres = ["Ana", "Carlos", "Eva", "David"];
nombres.sort(); // Ordena alfabéticamente
console.log(nombres);

// filter
const edades = [25, 32, 18, 47, 12];
const mayoresDe30 = edades.filter(function(edad) {
  return edad > 30;
});
console.log(mayoresDe30);

// map
const temperaturasCelsius = [20, 25, 30, 15];
const temperaturasFahrenheit = temperaturasCelsius.map(function(celsius) {
  return (celsius * 9/5) + 32;
});
console.log(temperaturasFahrenheit);

// reduce
const numeros = [5, 10, 15, 20];
const producto = numeros.reduce(function(acumulador, numero) {
  return acumulador * numero;
}, 1); // El producto inicial es 1
console.log(producto);


// forEach
const ciudades = ["Nueva York", "Los Ángeles", "Chicago"];
ciudades.forEach(function(ciudad) {
  console.log(`Bienvenido a ${ciudad}`);
});
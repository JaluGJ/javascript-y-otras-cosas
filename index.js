// String // "hola como te va" => ["h","o","l","a"," ","c","o","m","o"," ","t","e"," ","v","a"]
// Array // ["radarada",{key:value},[a,b,c],15] => 
// Object // {"Clave" : "Valor" } => {model_auto:"nissan", patente_auto:"JHS546"}
// Boolean
// Number //10, -25, 3.2, 0.0000025
// Date 
// null
// undefined 

// Math

// let auto = {
//     model_auto:"nissan",
//     patente_auto:"JHS546"  
// }

// let arre = {
//     0:"h",
//     1:"o",
//     2:"l",
//     sancho:"panza",
//     don:"Quijote"
// }
// console.log(arre.sancho)

// let arr = ["h","o","l","a"," ","c","o","m","o"," ","t","e"," ","v","a"] //[0,1,2,3,4,5,6,7,8,9,10,11]
// console.log(arr[10])

// console.log(new Date())

//--------------------------------------------------------------------------------------

// Operadores

//a+b => +ab => ab+
//a+b*c => +a*bc => abc*+

// console.log(
//     //potencias
//     Math.pow(5,2),
//     //rendondeos de numeros con coma
//     Math.round(6.3),
//     Math.round(6.5),
//     Math.ceil(6.00001),
//     Math.floor(6.999)
// )

// let palitoOrtega = {hijos: 32, sueldo: "mucho "}
// console.log(palitoOrtega.sueldo.length)

// || && !
// | 4 < 5 => true | 5 > 5 => false | 5 <= 5 => true | 4 >= 4 => true | 
// | == | === | != | !== |
// 



//ESTO ESTÁ MEDIO EN DESUSO.
function Vaso(height, diameter) {
  this.heigth = height
  this.diameter = diameter
}


Vaso.prototype.addLiquid = function (quantity) {
  this.volume = quantity
}


//LA QUE VA, ES ESTA
class Taza {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
    this.liquid = 0
  }

  get liquidRest() {
    return this.howMuchSpaceLeft()
  }
  addLiquid(liquid) {
    let volume = this.radius * 3.14 * this.height
    if (liquid > volume) return console.log('You have overflow this taza')
    else {
      this.liquid += liquid
      return this.liquid
    }
  }
  howMuchSpaceLeft() {
    let volume = this.radius * 3.14 * this.height
    return volume - this.liquid
  }
}

class Vaso extends Taza { // Vaso extiende propiedades de Taza. Es decir que tiene las mismas funciones, y las que crees aparte de esta. Taza NO TIENE las funciones que añadas en vaso.
  dropLiquid(liquid) {
    if (this.liquid < liquid) {
      this.liquid = 0
      return "you have droped every single drop"
    } else {
      this.liquid - liquid
      return this.liquid
    }
  }
}


let taza = new Taza(20, 15)

console.log(taza)

//Spred Operator
/*El spred operator "..." permite hacer, con mayor facilidad, el metodo de unir/concatenar arreglos y objetos */

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8, 9, 10]
let arr5 = [1, 2, 3, 4, 5]
let arr6 = [6, 7, 8, 9, 10]
let arr7 = [1, 2, 3, 4, 5]
let arr8 = [6, 7, 8, 9, 10]
let arr9 = [1, 2, 3, 4, 5]
let arr10 = [6, 7, 8, 9, 10]


let arr11 = arr1.concat(arr2.concat(arr3.concat(arr4.concat(arr5.concat(arr6.concat(arr7.concat(arr8.concat(arr9.concat(arr10)))))))))
// arr11 es igual que arr12... pero arreglo 12 es mas legible y bonito
let arr12 = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5, ...arr6, ...arr7, ...arr8, ...arr9, ...arr10]


//También se puede hacer con los objetos.

let obj1 = {
  casa: "house",
  habitacion: "room",
  cuarto: "bedroom"
}
let obj2 = {
  cocina: "kitchen",
  techo: "roof",
  garage: "garage"
}
console.log("obj1", obj1, "obj2", obj2)

let obj3 = {
  casa: obj1.casa,
  habitacion: obj1.habitacion,
  cuarto: obj1.cuarto,
  techo: obj2.cocina,
  cocina: obj2.techo,
  garage: obj2.garage
}
console.log("obj3", obj3)

let obj4 = {
  ...obj1,
  ...obj2
}
console.log("obj4", obj4)

function unifier(casa, arbol, patio) {
  let obj = {}
  return obj = {
    casa,
    arbol,
    patio
  }
}

let obj = unifier("tree", "casa", "garden")
console.log(obj)


//Back ticks
function saludo (nombre, direccion, numeroTelefono, algomas, masalgo) {
  let string = "hola como estas " + nombre + " Sabemo que en la residencia " + direccion + " existe una deuda de $" + algomas + " " + masalgo +" y debe cerrarla pronto. Lo invito a comunicarse con el numero " + numeroTelefono + " para solucionar su problema"
  return string
}

//botones para poner backticks "altgr" + "}" en windows y linux

//Las variables dentro de las backticks se colocan dentro de la estructura --> ${}

function saludo2 (nombre, direccion, numeroTelefono, algomas, masalgo){
 let string = `Hola, como estas ${nombre}. Sabemos que en la residencia ${direccion} existe una deuda de $${algomas} + $${masalgo}  y debe cerrarla pronto. Lo invito a comunicarse con el numero ${numeroTelefono}  para solucionar su problema`
 return string
}



console.log(saludo("Juan Carlos", "mitre 1234", "+ 54 9 3698217", 1256315, 123523))

console.log(saludo2("Juan Carlos", "mitre 1234", "+ 54 9 3698217", 1256315, 123523))












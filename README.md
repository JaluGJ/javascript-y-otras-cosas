
```JS
function Vaso(height, diameter) {
  this.heigth = height
  this.diameter = diameter
}


Vaso.prototype.addLiquid = function (quantity) {
  this.volume = quantity
}
```
La funciones constructoras actualmente no se utilizan tanto para crear cosas.  

> Es mejor utilizar clases
```JS
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
```
>Vaso extiende propiedades de Taza. Es decir que tiene las mismas funciones, y las que crees aparte de esta. Taza NO TIENE las funciones que añadas en vaso.
```JS
class Vaso extends Taza { 
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
```

Existe algo llamado funciones generadoras que, una particularidad en su escritura es que en la palabra `function` se le añade un **"*"** quedando del siguiente modo
```JS
function* generadora () {
  ...
}
```
Lo nombro solo para que sepas que existen... no se usan... casi nunca.... tenes que tener muy mal ojete como para que te toque trabajar en una empresa que las use... como le pasó a un compañero JAJAJAJAJAJ. se quiere matar el chabon.

## Metodos BASICOS de "Strings"

Algunos metodos 

>### .split
>Lo que hace el "split" es separar la `string` por el parametro que le impogas y lo transforma en un `ARRAY`.  
>>**IMPORTANTE: EL METODO DISTINGUE ESNTRE MAYUSCULAS Y MINUSCULAS**  
>
>Por ejemplo:  
>> (`""`): dos comillas una al lado de la otra *UNIDAS* signficida por cada caracter. Es decir, que **CREA** un array con todos los caracteres separados
>>```JS
>>"string".split("") // --> ["s","t","r","i","n","g"]
>>"string out".split("")// --> ["s","t","r","i","n","g"," ","o","u","t"]
>>```
>
>> (`" "`): dos comillas una al lado de la otra *SEPARADAS* signficida por cada espacio, o caracter de espacio. Es decir, que **CREA** un array con las strings separadas por espacios, y NO INCLUYE al espacio en el array final
>>```JS
>>"string".split(" ") // --> ["string"]
>>"string out".split(" ")// --> ["string","out"]
>>```
>
>> ¿Qué quiere decir esto? El parametro que vos le pases al `.split( parametro )` es el *CARACTÉR* por el que vas a seprar al `string`. el caracter es necesario pasarlo entre comillas. Si no pasas ningun caracter *(el caso 1)* separa todo.  
>>El split va a buscar cada vez que se repita el caracter que pasaste por parametro, y lo va a borrar y separar la string en strings mas pequeñas, cada vez que lo encotró
>
>>otro ejemplo con un caracter especifico:
>>```JS
>>"babayetu".split("b") // --> ["","a","ayetu"]
>>"babayetu yetu".split("a")// --> ["b","b","yetu yetu"]
>>```

>### .toUpperCase ||  .toLowerCase
>
>Lo que devuelve el aplicar uno de estos metodos es la misma string con todas mayusculas o minusculas respectivamente
>**NO ES NECESARIO PASARLE PARAMETROS, SOLO EJECUTARLA. SI NO LA EJECUTAS, NO PASA NADA DE NADA**
>Ejemplo:
>> .toUpperCase: coloca todas TODAS las letras en mayuscula que contenga la string
>>```js
>>"a LA GRaNdE le pUsE cuCa".toUpperCase() //-->> "A LA GRANDE LE PUSE CUCA"
>>```
>
>> .toLowerCase: coloca todas TODAS las letras en minuscula que contenga la string
>>```js
>>"a LA GRaNdE le pUsE cuCa".toLowerCase() //-->> "a la grande le puse cuca"
>>```
>Metodo sencillo de utilizar.

>Si te sigue interesando todo esto, mandate a [MDN -> Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) a investigar. 

## Metodos Basicos de [Arrays]

una LISTA de los metodos mas usados

> [Documentacion en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

>1.  [`Array`].map()
>2.  [`Array`].forEach()
>3.  [`Array`].find()
>4.  [`Array`].filter()
>5.  [`Array`].flat()
>6.  [`Array`].includes()
>7.  [`Array`].join()
>8.  [`Array`].push()
>9.  [`Array`].pop()
>10. [`Array`].shift()
>11. [`Array`].unshift()
>12. [`Array`].reduce()
>13. [`Array`].sort()
>14. [`Array`].toString()
>15. [`Array`].slice()

 Hay un par... varios metodos que funcionas todos iguales. Que quiere decir, que es mas o menos el mismo patron de resoulción. 

 Los metodos `.map .forEach .find .filter ` funcionan como reemplazo *OPTIMO* de un bucle for común y corriente. Es decir, funciona mejor que un bucle for y es mas corto de escribir. 

>### .map .forEach .find .filter 
>
> Estos metodos NECESITAN de una función a ejecutar. Como estos metodos reemplazan a un bucle for, lo que meterías adentro de la funcion a ejecutar, sería la logica aplicada del bucle for. Lo que los difiere es que devuelven o que hacen despues
>> #### .forEach 
>> Aplica la logica deseada por CADA ELEMENTO que tenga el array
>>```JS
>> [1,2,3,4,5].forEach((elements) => console.log(elements+1))
>>// en consola aparecerá --> 2 3 4 5 6
>>
>>const user = [{name:"juan", lastname:"paco", age:21},{name:"Pedro", lastname:"De la mar", age:28}]
>>
>>let arr = []
>>user.forEach((el) => {
>>  el.is_deleted = true
>>  return arr.push(el)
>>})
>>console.log(arr) //-->
>>//[
>>//  {
>>//    name: 'juan',
>>//    lastname: 'paco',
>>//    age: 21,
>>//    is_deleted: false
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'De la mar',
>>//    age: 28,
>>//    is_deleted: false
>>//  }
>>//]
>>```
>
>>#### .map
>>Aplica la logica deseada por CADA ELEMENTO que tenga el array y CREA un nuevo array guardado en la variable designada
>>```JS
>>const user = [{name:"juan", lastname:"paco", age:21},{name:"Pedro", lastname:"De la mar", age:28}]
>>
>> let newArr = user.map((el) => {
>>  el.is_deleted = false
>>  return el
>>})
>>console.log(arr) //-->
>>//[
>>//  {
>>//    name: 'juan',
>>//    lastname: 'paco',
>>//    age: 21,
>>//    is_deleted: true
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'De la mar',
>>//    age: 28,
>>//    is_deleted: true
>>//  }
>>//]
>>```
>
>> #### .find
>> Busca el PRIMER elemento que conicida con un parametro dado y lo devuelve en un nuevo valor. 
>>
>>```JS
>>let user = [{name:"Pedro", lastname:"Del Oceano", age:268},{name:"Juan", lastname:"Paco", age:21},{name:"Pedro", lastname:"De la mar", age:28},{name:"Juan", lastname:"Mota", age:3},{name:"Pedro", lastname:"HasFluNfEl", age:28}]
>>
>>
>>let finder = user.find(el => el.name.toLowerCase() === "pedro")
>>
>>console.log(finder)
>>//--> { name: 'Pedro', lastname: 'Del Oceano', age: 268 }
>>
>>let encontrador = {}
>>for (let i = 0; i<user.length;i++){
>>  if (user[i].name.toLowerCase() === "pedro") {
>>     encontrador = user[i]
>>    break
>>  }
>>}
>>
>>console.log(encontrador)
>>//--> { name: 'Pedro', lastname: 'Del Oceano', age: 268 }
>>```
>>
>
>> #### .filter
>> Retorna un ARRAY de los elementos que coincidan con el parametro pasado. es decir, que en su `return` implicito *(o el explicito si tiene mas de una linea de codigo)* sea true
>>```JS
>>let user = [{name:"Pedro", lastname:"Del Oceano", age:268},{name:"Juan", lastname:"Paco", age:21},{name:"Pedro", lastname:"De la mar", age:28},{name:"Juan", lastname:"Mota", age:3},{name:"Pedro", lastname:"HasFluNfEl", age:28}]
>>
>>
>>let filter = user.filter(el => el.name.toLowerCase() === "pedro")
>>
>>console.log(filter)
>>//-->[
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'Del Oceano',
>>//    age: 268
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'De la mar chiquita',
>>//    age: 28
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'HasFluNfEl',
>>//    age: 28
>>//  }
>>//]
>>
>>```
>

>- [`Array`].flat()
>- [`Array`].includes()
>- [`Array`].push()
>- [`Array`].pop()
>- [`Array`].shift()
>- [`Array`].unshift()
>- [`Array`].sort()
>- [`Array`].reduce()
>- [`Array`].join()
>- [`Array`].toString()
>- [`Array`].slice()
>> #### .flat(_profundidad_)  
>> Lo que hace es transformar un arreglo con arreglos anidados y llevarlos todos a un solo nivel de arreglo. (dependiendo la "profundidad definida")
>>```JS
>>const a = [0,1,2,[3,4,[5,6,7]],8,9,10,[11,[12,[13,[14,[15,[16],17],18],19],20],21],22]
>>let flateador = a.flat(9)
>>                            
>>console.log("flateador", flateador)
>>//-->'flateador' [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 ]
>>```
>>El nivel que le indiques a la profundidad no es estricamente necesario que sea exactamente igual a la profundidad del arreglo. Puede superar la profundidad y va a _"plancharlo"_ igual. Si, se queda corto el valor, puede que no lo aplane por completo.  
>
>>#### .includes(_parametro de comparación_)  
>> Con este metodo corroboras que el arreglo posea el _parametro de comparación_ y devolverá **true** o  **false** según si posea un elemento igual al brindado.
>>```JS
>>const b = [11,12,13,14,15,16,17,18,19,20]
>>
>>let tiene8 = b.includes(8) //--> false
>>let tiene14 = b.includes(14) // -->true 
>>
>>```
>> A esto lo podes utilizar mucho para una logica algoritimica de `if-else` para saber si la existe la precencia de un parametro necesario que, en caso de existir, ejecute una linea de comando compleja, y si no, a otra cosa mariposa. 
>
>>#### .push(_elemento_) .unshift(_elemento_) .pop() .shift()
>>Los metodos `.push(el)` y `.unshift(el)` AÑADEN elementos el final o el principio de un arreglo respectivamente, y devuelven la longitud del arreglo
>>```JS
>>const c = [1,3,5,7,9,11,13,15,17,19]
>>
>>let arrLength = c.push(21) //--> agrega el elemento brindado al FINAL del arreglo y te responde la longitud final que tendra el elemento
>>arrLength = c.unshift(23) //-->  agrega el elemento brindado al COMIENZO del arreglo y te responde la longitud final que tendra el elemento
>>                            
>>console.log("c", c, arrLength) 
>>//--> 'c' [ 23, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21 ] 12
>>```
>>
>>Los metodos `.pop()` y `.shift()` QUITAN elementos el final o el principio de un arreglo respectivamente y devuelven el elemento quitado del arreglo
>>```JS
>>const c = [1,3,5,7,9,11,13,15,17,19]
>>
>>let popedValue = c.pop() //--> QUITA el ÚLTIMO elemento de arreglo y te da el valor de lo que quitó. 
>>let shiftedValue = c.shift() //--> QUITA el PRIMER elemento de arreglo y te da el valor de lo que quitó. 
>>
>>console.log("c", c, popedValue, shiftedValue)
>>//--> 'c' [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] 21 23
>>```
>
>> #### .sort()
>>_[Sugerencia de lectura](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)_  
>> El .sort _Ordena_ el arreglo al que se le aplica el metodo. De por si solo, no sabe hacer un ordenamiento para numeros de 2 decimales en adelante, por lo que es necesario brindarle un algoritmo que le ayude a ordenar valores de orden superior. _(como se puede ver en los ejemplos debajo)_
>>```JS
>>const user = [{name:"Pedro", lastname:"Del Oceano", age:268},{name:"Juan", lastname:"Paco", age:21},{name:"Pedro", lastname:"De la mar chiquita", age:28},{name:"Juan", lastname:"Mota", age:3},{name:"Pedro", lastname:"HasFluNfEl", age:28}]
>>
>>// console.log(a)
>>
>>const f = [12,65,129,23,884,65,49,3,4,326,91,6498,15,56,1,50,45]
>>
>>console.log(f.sort())
>>//-->[ 1, 12, 129, 15, 23, 3, 326, 4, 45, 49, 50, 56, 6498, 65, 65, 884, 91 ]
>>
>>console.log(f.sort((a,b) => {
>>  if (a > b) {
>>    return 1;
>>  }
>>  if (a < b) {
>>    return -1;
>>  }
>>  // a must be equal to b
>>  return 0;
>>}))
>>//-->[ 1, 3, 4, 12, 15, 23, 45, 49, 50, 56, 65, 65, 91, 129, 326, 884, 6498 ]
>>console.log(user.sort((a,b) => {
>>  if (a.lastname > b.lastname) {
>>    return 1;
>>  }
>>  if (a.lastname < b.lastname) {
>>    return -1;
>>  }
>>  // a must be equal to b
>>  return 0;
>>}))
>>//--> [
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'De la mar chiquita',
>>//    age: 28
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'Del Oceano',
>>//    age: 268
>>//  },
>>//  {
>>//    name: 'Pedro',
>>//    lastname: 'HasFluNfEl',
>>//    age: 28
>>//  },
>>//  { name: 'Juan', lastname: 'Mota', age: 3 },
>>//  { name: 'Juan', lastname: 'Paco', age: 21 }
>>//]
>>```
<!-- Añadir promesas a esto-->
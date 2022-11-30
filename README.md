
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

 Los metodos `.map .forEach .find .includes .filter ` funcionan como reemplazo *OPTIMO* de un bucle for común y corriente. Es decir, funciona mejor que un bucle for y es mas corto de escribir. 

>### .map .forEach .find .includes .filter 
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
>>

<!-- Añadir promesas a esto-->
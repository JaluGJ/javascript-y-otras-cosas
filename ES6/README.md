# Que cosas trajo nueva Ecma Scrip 6? Pos un montón

Podes ver la documentación [aquí](http://es6-features.org/#Constants)

- ## Indice 
  - [Variables](./Variables.md/#variables)
  - [Arrow function](#arrow-function)
  - [Spred operator](#spread-operator)
  - [Class Contructor](#class-constructor)
  - [Destructuring](#destructuring)
  - [Backticks](#backtick)
  - [Object construction](#object-construction)
  - [Export-Import](#export-import)


---

## Arrow Function 

<!-- <details>
<summary> </summary> -->

Una **arrow function** es una función como las otras, que, si está escrito en una sola linea, tiene el "return" implícito.  
_¿Qué significa que tenga el `return` implicito?_ A lo que refiere tener el `return` implicito es que no es necesario escribir un return para que devuelva algo. Simplemente va a devolver todo aquello que esté en la linea respectiva.  
La estructura de una **arrow function** es la siguiente

```JS
() => {}
```

donde en `()` estarían los argumentos y el codigo a ejecutar se encuentra en `{}` solo si tiene mas de una linea. Sino, devuelve un objeto

>_OJO! al colocarle llaves despues de la flecha, es necesario colocar el `return` dentro de las llaves, porque este deja de estar implicito. Solo está implicito si es lo unico que hay luego de la flecha._

> Si solo posee un argumento, los parentesis no son necesarios
>```JS
>let algo = argumento => {return "hola"}
>let thing = arg => {return {"clave":valor}}
>console.log(algo()) //--> "hola"
>console.log(thing())//--> {"clave":valor}
>```

>Si no tiene mucha logica a aplicar, y simplemente necesita devolver informacion, los corchetes no son necesarios
>```JS
>let algo = () => "hola mundo"
>console.log(algo()) // --> "hola mundo" 
>```

> Y sí... tambien se pueden mezlar ambas condiciones
>```JS
>let algo = arg => arg
>console.log(algo("hola")) // --> "hola" 
>```

>Si vos querés pasar mas de un parametro o argumento, los parentesis son COMPLETAMENTE NECESARIOS
>```JS
>let suma = (a,b,c) => a+b+c
>suma(1,2,3) //--> 6
>```

PERO PERO PERO! cuando el codigo no se encuentra en una sola linea, el return no es implicito, es necesaria su precencia, al igual que la de los corchetes.

```JS
arg => {
  let magia = arg
  console.log(magia)
  return magia
}
```

Muchas veces, las **arrow function** se utilizan con un `const` o `let` para definir sus nombres de función, pero no siempre es necesario, menos aun en las IIFE (Immediately Invoked Function Expression) o, en español EFEI (Expresion de funcion ejecutada inmediatamente) ___[MDN IIFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)___

<!-- </details> -->

## Spread Operator

<!-- <details>
<summary></summary> -->
<!-- </details> -->


## Class Constructor

<!-- <details>
<summary></summary> -->
<!-- </details> -->

## Destructuring

<!-- <details>
<summary></summary> -->

<!-- Esto para explicar la proxima clase y local Storage!!!!! -->

<!-- </details> -->

## Backtick

<!-- <details>
<summary></summary> -->
<!-- </details> -->

## Object Construction

<!-- <details>
<summary></summary> -->
<!-- </details> -->

## Export-Import

<!--<details>
<summary></summary> -->

>_Y que export-import que es tan sencillo segun yo JAJA._

Vamos por el comienzo:

### ___module.exports - require___

En resumen, para lo que se utiliza es poder acceder a funciones y otras cosas desde distintos archivos y carpetas _(Aqui comienza la introducción a "infraestructura")_. Esto permite que el codigo sea mantenible y escalable. 
Si te preguntás cómo funciona, es simple. Lo que hace es una especie de "copy-paste", hacia la linea de codigo en donde es requerida. 

Las funciones pueden ser exportadas como una funcion "default" donde el archivo en donde esta, es la UNICA función presente, o es la unica que se necesita del mismo.  
Es decir, en el archivo `rojas.js` tenés una funcion sola, que se llama `jorge`, y solo tenes esa función y nada mas que esa función, PERO la requeris desde algún lugar. En vez de meterla en el objeto del module.exports, podes simplemente decir que el archivo es la función, del siguiente modo:  

```js
//rojas.js
function jorge (cancion){
  return `canto ${cancion}`
}

module.exports = jorge
```

Lo que va a probocar esto es que no necesites hacer un _destructuring_ de la función cuando sea requerida en otro archivo. 

```js
//tolueno.js
const jorge = require("./rojas.js") //No se requiere destructuring

module.exports = function tolueno (cancion){
  console.log(`intoxicamos con tolueno a jorge porque ${jorge(cancion)}`)
}
```

En este segundo caso, es la **SEGUNDA** forma de exportar un funcion por defecto. Lo que se hace es escribir la funcion directamente en el `module.exports`.

Cuando se quieren exportar varias funciones desde archivo js (que, o no fue bien modularizado, o no era necesario modularizar) siempre se tiene que mandar un objeto con TODAS las funciones. Antes de ES6 que facilitó el envio de objetos. resultaba mas sencillo hacer el envio de las funciones del siguiente modo _(disclaimer: es el modo que mas me gusta a mí)_  

```js
//alifaticos.js
/*al comienzo del archivo, los require necesarios*/

module.exports = {
  metanos: function (inerte){
    return `CH3-${inerte}`
  },
  etanos: function (inerte) {
    return `CH3-CH2-${inerte}`
  },
  ...
}
```
Esta forma, antes de ES6, era mucho mas facil que estar escribiendo el nombre de la función repetidamente y crear funciones antes para luego trabajarlas. _(ejemplo a continuación)_

```js
//alifaticos.js
/*al comienzo del archivo, los require necesarios*/
function metanos (inerte){
    return `CH3-${inerte}`
  }

function etanos(inerte) {
    return `CH3-CH2-${inerte}`
  }
...

module.exports = { 
  metanos: metanos,
  etanos: etanos,
  ...
}
```

Con EC6, ademas de llegar el export-import que facilita un monton las cosas, También se puede hacer del mismo modo lo anterior. sin repetir tanto los nombres , y las funciones ser arrow functions.

***CASO A***
```js
module.exports = {
  metanos: (inerte) => {
    return `CH3-${inerte}`
  },
  etanos: (inerte) => {
    return `CH3-CH2-${inerte}`
  },
  ...
}
```

***CASO B***

```js
//alifaticos.js
/*al comienzo del archivo, los require necesarios*/
function metanos (inerte){
    return `CH3-${inerte}`
  }

function etanos(inerte) {
    return `CH3-CH2-${inerte}`
  }
...

module.exports = { 
  metanos,
  etanos,
  ...
}
```
> A ver... se acorta minimamente, pero se acorta. SIN EMBARGO se puede hacer con la mejora que trae ES6, que es el import-export.  

_¿Qué demonios cambia con el export import? (te estarás preguntando)_

Pues, que no hay que escribir tanto tampoco. es una mezcla semi-perfecta entre lo que me gusta y lo que no me gusta. JAJAJAJAJAJ, pero, siendo realista, tambien mejora mucho la eficiencia.

Como se usa?, pues, aquí un par de ejemplos

***Para la exportacion "default"***
```js
export default function matanga (dijo){
  return "la changa"
}
```

***Para el export NO "default" y con varias funciones dentro del archivo***
```js
export function sarigueya (nombre){
  return `a la grande le puse ${nombre}`
}
const algo = () => {return "algo"}
export algo

export function homero (bebida){
  return `HOMERO ${bebida}` 
}
```

Podes utilizar cualquiera de estas dos formas para escribir las exportaciones. 
Ahora, lo que respecta a importaciones es MUY similar al require, pero mas comodo y LEGIBLE. _por sobre todo legible_

***Caso import de un "export default"***

```js
import matanga from "./matanga"

console.log(matanga("algo"))
```

***Caso import de un "no default"***

```js
import {sarigueya, algo, homero} from "./simpsons"

console.log(sarigueya("Cuca"))
console.log(algo())
console.log(homero("cerveza"))
```


<!--</details> -->

# Variables

- [Let](#let)
- [Const](#const)


**EcmaScript 6** trajo consigo algo muy bueno y util. Algo que permitió dejar de tener problemas con las declaración de variables y que tengan un alcance limitado y que no existan sino hasta su declaración en el contexto de ejecución.  

Al utilizar `var` en la declaración de variables o funciones, lo que se genera es que, en el *"contexto de creación"*, todas las variables, primero, son creadas con un valor "undefined" y luego pueden ser modificadas.  
Dentro de una **function** también, todas las variables se crean dentro del bloque que es la funcion con el valor undefined, para luego ser utilizadas. Esto generaba inconvenientes en la definicion de variables en funciones o bloques anidados dentro del codigo.  

Como antes mencionado el problema que esto conllevaba era que, a veces, a menos que tu codigo tuviera el `'use strict'`, variables con el mismo nombre, a veces, terminaban renombrandose y podia perjudicar datos y nombres utilizados modificandolos y no pudiendo acceder a ellos. _Una buena practica es no utilizar mismos nombres para la creación de instancias de variables a menos que estes seguro que no se modificaran._ De todos modos, hoy, con las nuevas variables, este problema se puede evitar.

Por ejemplo
```JS
function hazAlgo() {
  var miVar = 1;
  if (true) {
    console.log(miVar)// --> 1
    var miVar = 2;
    console.log(miVar); //--> 2
  }
  console.log(miVar); //--> 2
}

hazAlgo();
```
>En el anterior caso, se puede observar que `miVar`, en ambas ocaciones, cambia su valor cuando no debería cambiar en el segundo caso, porque son dos decalaraciones distintas.




En cambio, en esta nueva declaracion de variables, el alcance que tienen ambos se limitan a la función que las contenga, al bloque de codigo donde se encuentre o su propia ejecución. Estas variables no existiran hasta que en su ejecución no lleguen a ese linea de creación.

Estas nuevas declaraciones de variables son: `let` y `const`  

---

## Const

Como bien indica su nombre, es una constante, que es siempre igual, es decir una **variable inmutable**. Si un valor o función es declarado con `const`, durante la ejecución de JS, este no podrá ser cambiar su valor por ningun motivo.  

```JS
const string = "hola mundo"
string = "adios mundo" //--> ESTO NO VA A SUCEDER Y VA A FALLAR. NUNCA CAMBIA
// TypeError: Asignar un nuevo valor a una constante

const array = []
array="hola" //--> ESTO NO VA A SUCEDER Y VA A FALLAR. NUNCA CAMBIA
// TypeError: Asignar un nuevo valor a una constante

const toString = {}
toString = "ahora soy string" //--> NO VA A SUCEDER!
// TypeError: Asignar un nuevo valor a una constante
```
***PERO*** hay un caso en el que se puede modificar, no la constante, sino los valore de adentro. Y ese caso es cuando es un objeto o un array.

Las propiedades del objeto, exitentes o no existentes, son mutables. Es decir, pueden cambiar, pero esta constante ***NUNCA*** puede dejar de ser un objeto.

Sucede lo mismo con un array. Recuerden que, en JS, un array es practicamente un objeto cuyas **key** van desde 0 en adelante, que tiene sus propios metodos, por lo que como objeto, puedes definir un nuevo valor para adentro utilizando metodos o notación para arrays

```JS
//Caso de objetos
const obj = {}
obj.string = "hola mundo"
console.log(obj) // --> {string: "hola mundo"}

//Casos de array
const arr = []
arr.push("hola mundo")
arr[4] = "adios mundo"
console.log(arr) //--> ["hola mundo",,,,"adios mundo"]
```
Los const son muy utilizaos para estas variables que necesitas que no cambien de repente, tanto por un error mientras escribias el codigo o porque ciertos valores necesitan permanecer iguales. Tambien es muy utilizado para definir nuevas funciones utilizadas con [arrow functions](#arrow-function), por ejemplo en las funciones adentro de un componente en React.

```JS
import React from 'react'

export default function Component() {

  const handleClick = () => {
    //Logica...
  }
  return (
    <div onClick={()=>handleClick()}> Component</div>
  )
}
```

[Volver al archivo README.md](./ES6.md)

---
## Let

En esta nueva declaracion de variables `let`, el valor indicado es efectivamente variable. A diferencia de `const`, éste puede ser modificado.

Al ser ésta una variable permisible, es lo que termina de reemplazar a `var` para el uso de la programación.

```JS
let string = "hola mundo"
string = "adios mundo"
console.log(string)//--> "adios mundo"
//Puede cambiar completamente

string = ["Posicion 0", 2, true]
console.log(string) //--> ["Posicion 0", 2, true]
//Puede ser transformado en otro tipo de dato
```

Al igual que `const` _(y que lo mensiono al principio del archivo)_ el alcance de estas variables se limitan a la función o lugar de declaracion del documento, a diferencia de `var`

```JS
//caso var
function asereje (adeje){
  var valor = "hola"
  return
}
 console.log(valor) //--> "hola"
```
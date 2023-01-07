# Destructuring

> _Dificil de entender al principio, pero después no sabes como hacer las cosas sin desestructurar_

Con javascript, luego de ES6, otra de las tantas superactualizaciones que trajo que permitieron mayor facilidad y felicidad para los desarrolladores, es la desestructuracion de estructuras de datos, que a modo de resumen, lo que permite es acceder a los datos si necesidad de crear varias instancias del mismo en donde son invocadas o solicitadas.  

Simplemente con definir la estructura de origen y pasarle los nombres *EXACTOS* _(en el caso de objetos)_ o la posicion precisa _(en el caso de Arrays)_ se puede acceder al dato o funcion que se precisa. 

## _Destructuring de Objetos_

>_En el siguiente ejemplo se muestra el trabajo con un objeto_

```js
let papa = {
  foo: "bar",
  foz: "baz",
  fez: "asereje",
  loQueSea:"queLoQue"
}

let {fez, foo} = papa

console.log("fez es:",fez)
console.log("foo es:", foo)
```

Como podras observer, en la segunda parte, se pudo obtener los valores de "fez" y "foo" (que existen dentro del objeto papa) desde el objeto papa, simplemente *IGUALANDOLO* al objeto. 

Es completamente necesario pasarle el parametro de donde se saca la información, porque sino, de donde esperas que salga? 
Siempre es necesario pasarle el valor de referencia de donde salen estas propiedades. _En el caso anterior, Papa_

>Otro lugar donde se usa MUCHISIMO el destructuring de objectos, es con la importacion de funciones de librerias instaladas en el proyecto. En frontend, sin ir mas lejos, en los `Import-Export` que se utilizan para traer subcomponentes, subfunciones de otras librerias o simplemente estilos con css.module

```js
import React {useState, useEffect} from "react"
import { Button } from "@materialUI/emoticons"
import { NavBarButton } from "./navBar/navBar.js"
```

## _Destructuring de Arreglos_

El otro caso donde se usa es en los arreglos. 
Pese a que ambos son destructuradores, los patrones de uso son ligeramente diferentes. Aquí es importante LA POSICIÓN del arreglo

Un claro ejemplo donde esto es muy utilizado es en React con el "useState"

>_Adentro ejemplo_

```js
import { useState } from "react"

const [value, setLoQueSea] = useState("")

```

Aqui vemos que de `useState` se obtienen el paramtero "value" y la función "setValue". 

**¿Y porqué es importante posicion?**

La posicion en TODOS los arreglos define un valor, por ello, al invocar en un arreglo la posicion 0, 1, etc. da un valor igual al que esta en la posicion

En el destructuring, lo que haces es "reemplazar" la "key" que sería la posicion, por otra key que representas en el nuevo arreglo.

```js
let arr = [1,2,3,4,5,6,7]

let [a,b,c,d,e] = arr

console.log(a,b,c,d,e) // --> 1 2 3 4 5 

```

_Como se demuestra en el ejemplo anterior, ahora puedo acceder a los primero 5 valores del arreglo `arr` a travez de las letras `a`,`b`,`c`,`d`,`e`_


Esto mismo sucede en el `useState` en el que accedo a la funcionalidad que se encuentra en el arreglo en la posicion 0, y la funcion que se encuentra en la posicion 1, con un nombre distinto. _Con useState, es altamente recomendable y mantenible que tenga tanto el nobmre del valor como el de la función, la misma palabra con el set de por medio_

Entonces, podes trabar con las variables con los nombres que mas te plazcan.
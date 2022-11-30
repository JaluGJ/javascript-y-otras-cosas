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

## Spread Operator



## Class Constructor



## Destructuring



## Backtick



## Object Construction



## Export-Import



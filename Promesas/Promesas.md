# Las mal-bendecidas promesas

## Primero lo primero. ¿Que son las tareas asyncronicas? 

> _Dato: ***Javascript*** es muy potente para este tipo de tareas_

- Las tareas **asincronicas**, como bien dice en español, son aquellas tareas que se desarrollan mientras otros procesos están ocurriendo. Este tipo de tareas, usualmente, tienen una demora porque depende de una busqueda o deben esperar a que alguna acción se cumpla, por ejemplo, pedidos a una base de datos, un temporizador, escribir en el disco, hacer un pedido http, etc.  
El mayor inconveniente que resultan de estas tareas asyncronicas en javascript es que, en este lenguaje la ejecución sigue corriendo, mientras que esta tarea que demora no devuelve un resultado sino hasta finalizar aquellas tareas que estan en ejecución. Luego, las respuestas o tareas asyncronicas, es decir, que han llevado un tiempo, se ejecutan al finalizar las otras.   
> _Recordar que javascript tiene eso del stack de ejecucion, las "Taks Queue" o "Fila de tareas" y el "Event Loop".  
En [este video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) está perfectamente explicado_
- Este tipo de tareas es posible resolverlas de dos formas, con callbacks o con promesas. En lo que nos vamos a estar enfocando ahora son _Promesas_ _(A fin de cuentas, es el titulo del readme, no?)_

## Promesas... ¿Promesas?

> _Y tal vez, para este momento te estes preguntando que son las promesas. Pues... el concepto es complejo de asimilar a la primera, pero te aseguro que hare todo lo que este en mis manos para que lo entiendas_  

__¿Qué es una promesa entonces?__

Pues una promesa podria tomarse como el resultado evetual de una operación asincronica, (un set time out, un operacion en una Base de Datos, Un pedido http), es decir que representa una especie de lugar reservado donde se va a guardar (eventualmente) la respuesta del pedido asincrono, tanto si es un error o un exito.  

Cabe destacar que una promesa puede o no ser exitosa y que, una misma promesa no puede ejecutarse dos veces, es decir que, una vez que termina se vuelve **inmutable**, y si a una promesa le agregamos un callback, este se ejecutará cuando la promesa finalice. Esto provoca que ya no necesitamos estar pendiente de cuando ocurren las cosas, sino que simplemente reaccionar al resultado de las mismas. 

Tambien es importante nombrar que las promesas, hasta no tener una resolución, no permiten que el codigo siga ejecutando. Es como si "esperaran" a que termine su resolución para que se ejecute lo siguiente. De aquí, tambien sale el metodo `async-await` del que te hablaré mas adelante.

>### Estados de la promesa
>- _`Pending`(pendiente)_: Es el estado inicial de una promesa
>- _`Fullfiled`(completada)_: Representa que se completó de manera exitosa
>- _`Rejected`(rechazada)_: Algo no salió bien y la promesa fue terminada con un fallo
>- _`Settled`(terminada)_: La operación se termino, de cualquiera de las dos maneras anteriores.

### ¿Y que pasa con Javascript?

Javascript, antes, no soportaba promesas de forma nativa (se usaban librerías externas), pero eso es antes de ES6. Ya que estas explicaciones no vamos a profundizar en la creación de una promesa, sino en su resolución, simplemente voy a dar algunos datos importantes sobre las promesas en Javascript.  

>1. Lo **PRINCIPAL** es que, en javascript, _una promesa SIEMPRE devuelve otra promesa_, y que quede claro eso. Las promesas se pueden encadenar gracias a esta propiedad.
>2. Ademas del punto anterior, una promesa tambien devuelve una resolución o un rechazo. La promesa siguiente, tendrá como "argumento" para el exito o el rechazo el resultado de la primer promesa. _(Ya vas a entender esto un poquito mas adelante)_
>3. Es *COMPLETAMENTE* necesario agarrar los errores y manejarlos, y las promesas puras de Javascript tienen 2 formas de hacerlo, callback en el segundo parametro del metodo `.then` o con el `.catch`

---

## A trabajar con promesas... ¿Cómo lo hago?

En Javascript, las promesas tienen unos cuantos metodos para trabajar con ellas, pero las que mas nos importan a nosotros ahora son los siguientes: `.then, .catch, .finally`

Estos tres metodos aceptan callbacks _(es decir, funciones anonimas, o simplemente funciones)_ por parametros/argumentos en su ejecución. Es importante aclarar que estos metodos surgen luego de una promesa inicial, por ejemplo, en un pedido al back utilizando _"fetch"_ o _"axios"_, estas funciones son iniciadores de promesas, las cuales se pueden seguir trabajando con los metodos antes mencionados.  

### ***.then()***

El metodo .then() es otro trabajo de promesa el cual puede recibir dos parametros o argumentos, del cual el primero refiere a una respuesta exitosa de la promesa anterior y el segundo el fallo.

Podriamos entonces estructurarlo del siguiente modo `.then(Exito, Fallo)`. La respuesta de la promesa inciadora se colocará respectivamente en una posicion o la otra, siempre y cuando la promesa inicial trabaje con los errores de Javascript.  
Como antes fue mensionado, la promesa inicial arroja un exito o un fallo, y la respuesta de esta promesa (es decir, el return de la promesa original), tomara lugar como argumento de la callback escrita luego del `.then()` por lo que allí podrás hacer el trabajo que necesites con la información. 

> _Usualmente, cuando desconocés como viene la informacion con la que estás trabajando, la primer callback en un .then en el exito, es un `console.log` de la info, para luego saber con que datos trabajar._  

Por lo tanto, la estructura luego de la promesa inicial quedaría algo así

```JS

const promise = new Promise((resolve, reject) => {
  if (/*Condiciones de exito*/){
    resolve(dato)
  } else {
    reject(new Error(/*datos de error*/))
  }
})
// La instancia de new Promise es solo ilustrativa para que veas que es una instancia de promesa

promise.then((argumento) => console.log(argumento), (error) => console.log(error))
```
> _Usualmente se suele hace esto para saber que puede ser el error o que puede ser el exito al momento de proseguir la promesa. Esto se hace una sola vez para ver en el inspector del navegador(front) o en la consola(back) para luego ser borrado o comentado_

_No es completamente necesario que el .then esté escrito todo sobre la misma linea luego de la promesa, pero si es necesario que esten contiguos._
```JS
promise
  .then((argumento) => {
    /*Ejecucion de codigo sabiendo que todo salió bien.*/
    /*"argumento", siguiendo el ejemplo, sería "dato" de la promesa anterior*/
    },
    (error) => {
      /*Ejecución de codigo tras el rechazo de la promesa*/
      /*"error" sería el objeto tipo Error, "new Error", siguiendo el caso anterior de la promesa*/
    })
    //Porsupuesto que esto funciona con funciones anonimas tanto como arrow functions
  .then(function (argumento){
    // Codigo tras el exito
  }, function (error){
    // Codigo tras el rechazo
  })
```
> _Recordatorio: Las promesas son ecadenables porque una promesa SIEMPRE devuelve otra promesa._

Teniendo en cuenta los ejemplos, podemos ver que, desde el .then, se pueden trabajar tanto el exito como el fallo. Sin embargo, esto no se suele hacer por ilegibilidad, y tomando la VENTAJA que tiene el `.then` de que puede funcionar sin el segundo argumento, existe otra forma de trabajar con estos fallos, bastante mas limpia y legible que simplemente dentro del `.then` y me refiero al querído `.catch`.

### ***.catch()***

La explicación simple del `.catch` es que es el metodo .then, pero que solo acepta un argumento y se ejecuta solo en caso de que la promesa haya sido rechazada.

Ahora, una cosa muy importante que surge a la mente _(qué yo me lo preguntaba hasta que lo entendí)_ ¿Como voy a resolver el error de la promesa despues del `.then()` si los datos de la promesas vienen ahí?

Bueno, la respuesta esta en el mismo concepto de la promesa. Reitero lo que dije ya un par de veces **un promesa SIEMPRE devuelve otra promesa** por lo que, en la otra promesa que devuelve, van a estar los datos de la anterior y de la misma, tanto si fueron exitosos o rechazados, y lo que suceda con los datos del rechazo no van a surgir hasta que sean tratados, por lo que va viajando a travez de la "cadena" de promesas. 

```JavaScript
// Vamos a ejemplificarlo (y ver como la gente los usa usualmente)

promise
.then((arg) => /*ejecucion tras el exito*/)
.then((arg) => /*ejecucion tras el exito*/)
.catch((error) => /*ejecucion tras el rechazo*/)
```
> De este modo, se vuelve mucho mas legible los casos de exito y el caso de fallo.  

Reiterando lo anterior al ejemplo y tratando de explicarlo, el rechazo va "viajando" en el código anterior hasta que encuentre la parte del codigo en la que será manipulado o se trabajará con él. Ya que no hay ninguna callback para el segundo argumento de los `.then()`, el error irá hasta que el `.catch()` lo "capture". 

### ***.finally***
 >_Y finalmente, el ultimo método_

 Bien bien transparente el nombre del metodo. "finally", "finalmente".  

 Este metodo no es completamente necesario usarlo. Este metodo, a pesar del nombre, tambien devuelve una promesa, pero, a diferencia de las otras dos, simplemente tiene un argumento, el cual se ejecutará habiendo sido una respuesta exitosa o rechazada. Es decir, se va a ejecutar pase lo que pase.

 Este metodo puede llegar a ser util so lo que se desea es hacer una limpieza o querer hacer un proceso sin importar el resultado de la promesa. Eso si, cabe destacar algunos aspectos sobre este metodo.

 - El callback no tendrá argumento, porque no se sabra concretamente que resultara tras el exito o el fallo.
 - Cuando usamos la funcion enlinea, se la puede pasar una sola vez, en vez de estar forzando a declararla dos veces o guardarla en una variable

 Un pequeño ejemplo tomado de [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

```Javascript
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, no hemos obtenido un JSON!");
  })
  .then(function(json) { /* procesar el JSON */ })
  .catch(function(error) { console.log(error); /* esta línea podría arrojar error, e.g. cuando console = {} */ })
  .finally(function() { isLoading = false; });

```

### ***Promise.all***

>_Y que pasa cuando necesitamos, no solo esperar por un evento, sino que deseamos que varios eventos sucedan?_

La `API` de Promesas nos brinda un metodo maravilloso llamado .all() el cual recibe por parametro un arreglo de promesas al que ejecutarle las promesas correspondientes. para luego con un simple .then, aplicar el callback al arreglo de estas promesas.  

Este metodo, lo que hace es crear una _Promesa_ a partir del arreglo, y esta _Promesa_ se completa recién cuando todas las otras promesas se hayan completado. una vez completada esta _Promesa_, al igual que cualquier otra, se le puede aplicar el metodo .then, el cual, el argumento del callback no va a ser otra cosa que el arreglo de resultados del arreglo de promesas.

```javascript 
arregloDePromesas = [promesa1, promesa2, promesa3,...]

Promise.all(arregloDePromesas).then(function(arregloDeResultados) {
  //...
});
```

Y eso es todo lo que, por ahora, necesitas con respecto a las promesas. 
El concepto de promesas y su construcción es un poco más compleja y que te recomiendo investigarlo por otro medio si es que causa interes en tí.

> _No te vallas todavía, falta un poquito mas en esta parte de promesas_

# Async-Await

El bendito y hermoso Async await que a todos les gusta.  
Async-Await nos viene a faciitar un poco la vida con las promesas, permitiendonos que, ante codigo asincrono o funciones asincronicas, la sintaxis sea un poco mas amable y legible que con las promesas, haciendo que no nos perdamos en la encadenación de las promesas, sino que, el propio async-await, lo hace.  

>_Ojo al piojo, utilizar async-await te obliga a crear una nueva funcion asyncrona para trabajar los pedidos asyncronos._


Para utilizar este tipo de funciones debemos definirlas con una sintaxis en particular:
```js
async function asyncCall() {
  const result = await resolveAfter2Seconds();
}
```
La palabra async es la que va a informarle al intérprete que se trata de una function asincronica y nos va a permitir hacer uso de la palabra reservada await en el cuerpo de dicha función.  
Como su nombre nos sugiere, lo que va a ocurrir cuando la ejecución del programa se tope con un await es que se detendrá la ejecución de esa función de forma momentanea hasta que la función o instrucciones que se encuentren a la derecha de dicha palabra finalicen.

_Acá sí, el concepto de "esperar" es un poco mas real_

Aunque ojo, async-await no reemplaza a las promesas, por el contrario, a veces por utilizarlas como tal, puede que el codigo falle, o lo que necesitabas obtener no sea lo que esperabas.  

Async-Await es una especie de mezcla entre _Funciones Generadoras_ y _Promesas_, su codigo parece syncronico, pero no lo es. así que, ten cuidado donde y cómo uses esta sintaxis.

Te invito a investigar sobre esto en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

---




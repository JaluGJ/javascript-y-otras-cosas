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
>>
>> <details>
>>
>> <summary></summary>
>>
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
>>
>> </details>
>>
>
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
>
>>### .reduce((_valor anterior_ , _valor actual_) => )
>>
>>Que hace el reduce? El reduce, te permite **REDUCIR** un arreglo hasta un unico valor resultado de la funcion o ecuación aplicada.
>>
>> Cabe destacar que, este metodo funciona igual... o parecido al .map, .forEach, etc. en el que trabaja con un `bucle for` por lo qué va elemento por elemento del arreglo.
>>
>> _Arrow function_  
>> `array.reduce( (a,b) => ... )`   
>>
>> _Normal function_  
>> `array.reduce( function (a,b) {return...} )`
>>
>> En el caso del primer loop, el valor de a, toma el primer valor del array _(el que se encuentra el posicion `[0]`)_   
>>Luego de esto, el valor de **a** toma el resultado de la anterior funcion ejecutada.  
>>
>>```JS
>> let array = [1,2,3,4,5,6,7,8,9,10]
>>
>>let result = array.reduce((a,b) => a+b ) //"a" es el resultado de la funcion ejecutada anteriormente.
>>console.log(result) // Acá estará el resultado de la suma (porque hay una suma) de todos los elementos del array.
>>
>>```
>> 
>
>>### .join(_parametro_)
>>
>>En pocas palabras, bien traducido del inglés, lo que hace el `.join` es **UNIR**. y qué una, te preguntaras. Pues, todos los elementos del array transformandolo en una string
>>
>>A este metodo se le pueden pasar argumentos o parametros como `("valor que quieras")` y lo que va a hacer reemplazar todas las `,` del array y colocar, en la string final, reemplazar por el `valor que vos quieras`
>>
>>Si no se la pasa ningun parametro, transforma todo el interior del array en una string (comas incluidas)
>>
>>```js
>>let arr = [2,5,7,8,"hola"]
>>
>>console.log(arr.join()) // -->"2,5,7,8,hola" 
>>
>>console.log(arr.join("")) // --> "2578hola"
>>
>>console.log(arr.join(" ")) // --> "2 5 7 8 hola"
>>
>>console.log(arr.join("-")) // --> "2-5-7-8-hola"
>>```
>>
>
>
>>### .toString()
>>
>>a ver... Es bastante logico lo que puede llegar a hacer... pero, por las dudas, lo explicamos  
>>
>>Lo que hace el `.toString()` (**es ejecucion sin parametros**) es transformar el array completo en una string, como si fuera el `.join()` (especificaamente ese, sin argumento)
>>
>>```js
>>let arr = [2,5,7,8,"hola"]
>>
>>console.log(arr.toString()) // -->"2,5,7,8,hola" 
>>
>>```
>>
>>
>
>>### .slice(_desde (incluido)_,_hasta (excluido)_)
>>
>>El `.slice()` corta un arreglo desde una posicion _(argumento necesario)_ hasta otra posicion en el arreglo _(no tan necesario)_
>> 
>>Si el segundo parametro no se brinda, al arreglo es cortado hasta el ultimo valor del mismo. PERO si esta ultima posicion es brindada, cortará al arreglo HASTA esa pocicion, pero no la incluirá
>>
>>_SI SE PASAN POSICION NEGATIVAS, LO QUE HACE JS ES TOMAR EL VALOR DE ATRAS PARA ADELANTE EN EL ARREGLO._
>>
>> Si un el valor _"desde"_ es negativo, tome desde ese valor, de atras para adelante, hasta el final del arreglo o hasta el limite definido por _"hasta"_
>>
>> El valor _"hasta"_ siempre SIEMPRE, va a excluir los valores desde la posicion que se brinda, hasta el final del arreglo.
>>
>>```js
>> let arr = [0,1,2,3,4,5,6,7,8,9] 
>>
>> arr.slice(2,5) // --> [2,3,4] 
>>
>> arr.slice(2) // --> [2,3,4,5,6,7,8,9]
>>
>> arr.slice(-2) // --> [8,9]
>>
>> arr.slice(-2,3) // --> []
>> // Este caso, como _hasta_ es una posicion anterior a _desde_, no toma ningun valor del arreglo
>> arr.slice(2,-2) // --> [2,3,4,5,6,7] (no incluye desde la posicion 8 o -2 en adelante)
>>
>>
>>```
>>
>> En el ejemplo se muestra un caso "tipico aproximado" de su uso, que es un paginado.
>>```js
>>let arr = [{Sancho:"panza"},{Don:"quijote"},{Harry:"Potter"},{Luna:"Lovegood"},{Sancho:"panza"},{Don:"quijote"},{Harry:"Potter"},{Luna:"Lovegood"},{Sancho:"panza"},{Don:"quijote"},{Harry:"Potter"},{Luna:"Lovegood"},{Sancho:"panza"},{Don:"quijote"},{Harry:"Potter"},{Luna:"Lovegood"}]
>>
>>for (let i=0; i<6 ; i++){
>>  let pag = 0
>>  pag += i
>>  let elemPerPag = 3
>>  let a = pag*elemPerPag
>>  let b = a+elemPerPag
>>  let result = arr.slice(a,b)
>>  console.log(result)
>>}
>>
>>/*
>>[
>>  { Sancho: 'panza' },
>>  { Don: 'quijote' },
>>  { Harry: 'Potter' }
>>]
>>[
>>  { Luna: 'Lovegood' },
>>  { Sancho: 'panza' },
>>  { Don: 'quijote' }
>>]
>>[
>>  { Harry: 'Potter' },
>>  { Luna: 'Lovegood' },
>>  { Sancho: 'panza' }
>>]
>>[
>>  { Don: 'quijote' },
>>  { Harry: 'Potter' },
>>  { Luna: 'Lovegood' }
>>]
>>[
>>  { Sancho: 'panza' },
>>  { Don: 'quijote' },
>>  { Harry: 'Potter' }
>>]
>>[ { Luna: 'Lovegood' } ]
>>*/
>>```
>>
>>
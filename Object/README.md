# Objetos. 

## ¿Qué son? 

> _JSON (JavaScript Object Notation) es la notacion de OBJETOS de Javascript que comprende una clave y un valor. En un archivo tipo JSON la clave DEBE ser escrita entre comillas DOBLES, y el valor, si es una string, tambien DEBE ser escrita con comillas DOBLES_

```json
{
  "key":"value",
  "clave":"valor",
  "llave":"valor",
  "propiedad":"valor",
  "cualquiera":"algo"
}
```

Por lo tanto, un objeto es Java Script comprende llaves _{}_ que definen su inicio y final del objeto, y, dentro de las llaves tiene las famosas `key:value` que traducido al español puede ser definidos como:  
- `clave:valor`  
- `propiedad:valor`  
- `llave:valor`  

>CABE DESTACAR QUE `VALOR` no se llama así porque sí, sino que se llama valor porque es el valor de la llave, es lo que va a devolver una vez llamado, es lo que esta adentro de la cajita que abre el candado con la LLAVE pertinente.   
>OTRA cosa  muy importante es que cada par `key:value` se separan por comas `,` al final del valor.
---

## Algunos metodos de Objetos

Al igual que en el resto de tipos de datos, los objetos tambien tienen metodos. 
[Ver todos los metodos en MDN aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object) En la lista de la izquierda están todos los metodos disponibles. 

Algunos de los metodos mas usados son: 
1. `Object.keys(obj)`
2. `Object.values(obj)`
3. `Object.entries(obj)`
4. `obj.hasOwnProperty(prop)`


### _Object.keys(obj)_  

A este metodos se la pasa por parametro el objeto que se quiere analizar. Es decir, si tu objeto se llama "macumba" le pasas macumba como propiedad como podemos ver en el siguiente ejemplo.

```js
let macumba = {lazos: "familiares", atar:"novio" , velas:"foto"}

console.log(Object.keys(macumba)) // --> [lazos, atar, velas]

Object.keys({hola:"HOLA", chau:"CHAU"}) // --> [hola, chau]
```  

Como podemos ver, lo que devuelve el metodo es un ARREGLO de todas `claves` del objeto. 

El metodo es bastante transparente en lo que hace. Luego de obtener del objeto  un arreglo de todas las claves, se puede trabajar con esos parametros.  

### _Object.values(obj)_  


__AL IGUAL QUE EN EL METODO ANTERIOR__  este metodo es necesario pasarle como parametro el objeto a utilizar, con la diferencia que su respuesta, en vez de ser la calves, seran los valores _(todo muy transparente por acá)_  

```js
let macumba = {lazos: "familiares", atar:"novio" , velas:"foto"}

console.log(Object.values(macumba)) // --> ["familiares", "novio", "foto"]

Object.values({hola:"HOLA", chau:"CHAU"}) // --> ["HOLA", "CHAU"]
```

### _Object.entries(obj)_

Este metodo, al igual que los anteriores, se debe pasar por parametro el objeto al que se le desea aplicar el metodo. Lo que de vuelve, es AMBOS  valores en forma de pares de arrays donde el primer valor es la _clave_ y el segundo valor es el _valor_. En el ejemplo debajo se puede ver en mas detalle.  
```js
let macumba = {lazos: "familiares", atar:"novio" , velas:"foto"}

console.log(Object.entries(macumba)) // --> [["lazos","familiares"], ["atar","novio"], ["velas":"foto"]]

Object.entries({hola:"HOLA", chau:"CHAU"}) // --> [["hola","HOLA"], ["chau","CHAU"]]
```

### _obj.hasOwnProperty(prop)_

Este ultimo metodo, bastante utilizado, corrobora si un propiedad `prop` existe en el `obj`. A diferencia de los metodos anteriores, aquí si se aplica el metodo _(es decir se le pone el puntito y el nombre del metodo)_ al objeto a trabajar y no es que se mete el obj dentro del metodo invocando el constructor `Object`.  

Bien traducido del ingles, _"tiene su propia propiedad"_ devuelve un `booleano` como respuesta al metodo

un par de ejemplos

```js
let macumba = {lazos: "familiares", atar:"novio" , velas:"foto"}

macumba.hasOwnProperty("lazos") // --> true
macumba.hasOwnProperty("familiares") // --> false
```
 Y hasta acá los metodos de objetos. Nuevamente te recomiendo revisar, en caso de ser necesario, los metodo en MDN

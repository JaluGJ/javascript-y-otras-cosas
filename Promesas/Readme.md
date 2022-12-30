# Las malditas y benditas promesas

## Protocolos de HTTP

> _Metodos mas usados en negrita_

Metodos:
- **POST**
- **GET**
- **PUT**
- **DELETE**
- PATCH
- UPGRADE

Http tiene portocolos de modificacion sobre un backend, que usualmente son utilizado para obtener, modificar, actualizar o borrar elementos de una base de datos. (Invito a profundizar en algún momento _(este mensaje es para MI)_)

## Fetch y Axios

Fetch, como bien viene del ingles, es "agarrar"

```js
fetch('http://example.com/movies.json')
  .then( pepe => /*return*/ pepe.json() , /*error*/ )
  .then( pepa => console.log(pepa) , /*error*/)
  .then( ara => console.log(ara) ,/*error*/ )
  .catch( /*aca no hay nada*/, error => console.log(error) );
  .finally((arg) => funcionalidad)
```



## Promesas. ¿Qué son?

_[...es un objeto que representa la terminación o el fracaso de una operación asíncrona...]_ [Promesas- MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)

Una promesa siempre devuelve otra promesa. SIEMPRE. 
La unica forma de finalizarla es con un .finally que es lo ultimo que queres hacer con esta promesa.  

Existen dos formas de trabajar las promesas. Pura y con los metodos puros de javascript ( .then, .catch, .finally) y el otro metodo de javascript un poco mas amigable a la vista (async-await, try-catch)

_(buscar Promise.all)_

- _Promesas como tal_  
Existen tres metodos
```js
.then(Resuelto, Rechazado)
.catch( Rechazado )
.finally( Resuelto )
```
```js
fetch('https://restcountries.com/v3.1/all')
  .then( pepe => /*return*/ pepe.json() , /*error*/ )
  .then( pepa => console.log(pepa.name.common) , /*error*/)
  .catch( /*aca no hay nada*/, error => console.log(error) );
  .finally((arg) => funcionalidad)
```

- _Async-Await, Try-Catch_
Existen una forma de trabajarlos  
```js
...
try{
  const patito = await fetch('https://restcountries.com/v3.1/all')
  let element = patito.json()
  elelement.name.common
} catch(error) {
  console.log(error)
}
...
```

#### Con Axios

La gran ventaja de axios son los metodos que podes utilizar para los metodos de http `"get","put","post","delete"` donde simplemente se los evoca como si fueren un metodo de Axios  

```js
---------------------------------------------------------------------
axios.get(URL, /*no tan necesario -->*/ cabecera:{})
/*En .get, el primer parametro pasado será la direccion url, y el segundo sera para configuraciones de cabecera si es que es necesario por motivos de tokens o semejantes*/
---------------------------------------------------------------------
axios.post(URL, body:{}, /*no tan necesario -->*/ cabecera:{})
/*En .post, el primer parametro es igual que en .get, pero el segundo parametro es el "body" que se pasa para el post, y recien el tercer parametro es la cabecera, usualmente token */
---------------------------------------------------------------------
axios.put(URL, body:{}, /*no tan necesario -->*/ cabecera:{})
/*El put es exactamente igual que el post*/
---------------------------------------------------------------------
axios.delete(URL, /*no tan necesario -->*/ cabecera:{})
/*el delete es exactamente igual que el get*/
---------------------------------------------------------------------
```

- _Promesas como tal_  
Existen tres metodos
```js
.then(Resuelto, Rechazado)
.catch( Rechazado )
.finally( Resuelto )
```
------
```js
axios.get('https://restcountries.com/v3.1/all')
  .then( pepa => console.log(pepa.name.common) , /*error*/)
  .catch( /*aca no hay nada*/, error => console.log(error) );
  .finally((arg) => funcionalidad)
```

- _Async-Await, Try-Catch_
Existen una forma de trabajarlos  
```js
...
try{
  const patito = await axios.get('https://restcountries.com/v3.1/all')
  elelement.name.common
} catch(error) {
  console.log(error)
}
...
```


## Metodos de Promesas

### .then( (_param_) => {funcionalidad} , (_error_) => {funcionalidad}} )
### .catch (error => funcionalidad)
### .finally (success => funcionalidad)


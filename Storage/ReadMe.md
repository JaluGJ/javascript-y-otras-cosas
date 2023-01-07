# Storage

> _Acá vamos a ver un poquito de lo que es esta API de almacenamiento que utiliza nuestro navegador._


Storage es, por así decirlo, un lugar  en el navegador donde se pueden guardar datos o información relevante para el correcto funcionamiento de nuestra pagina web y existen dos lugares (los mas utilizados) para guardar esta información.
**Sesion Storage** y **Local Storage**

>¿Cuál es la diferencia más relevante?  

Simple,la información guardada en **localStorage** perdura en el tiempo, y es accesible desde distintas ventanas del navegador web, mientras que, **sessionStorage** se limita a simplemente la ventana que la ejecuta y la abre. Una vez cerrada la pestaña o la ventana, se borran los datos guardados en esa sesión. 

>¿A qué se debe esto?  

Simple. Por cuestiones de seguridad. Al utilizar sessionStorage, permitis que tu información no quede mucho tiempo disponible en el navegador Y en caso de cerrar una pestaña, adrede o no, tu cuenta se cierra, permitiendo que nadie tenga acceso luego, si es que se sienta en la misma computadora.

## Cómo se usa?

Otra cosa re simple. Los metodos son aplicables tanto en uno como en el otro.

### **(local/session)Storage.setItem("key", "value")**

---

Para guardar información simplemente se usa el metodo "setItem" con el que primer parametro será el mismo con el que obtendras la información de alli. Es decir, vas a utilizarlo como el nombre de la propiedad o clave _(Al igual que un objeto)_

ejemplo: 

```js
//vengo con un dato o un valor que quiero guardar
let value= "soy un estring"

localStorage.setItem("que soy", value)
```

>_Todo codigo alfanumerico lo transforma en una string, asíque, mucho cuidad cuando quieras obtener la informacion de allí y sea solo un numero. necesitaras parsearlo._

Cuando se quiere guardar un objeto o una estructura de datos diferente a una string, estamos **OBLIGADOS** a pasarlo a una string, y, el mejor metodo para hacer es con _JSON.stringify(obj)_

En el ejemplo siguiente se puede ver claramente como enviar la información y pasar el objeto a un string.

```js
let obj = { foo: 'bar' };
localStorage.setItem('obj', JSON.stringify(obj));

//Esta string tendra la siguiente estructura al guardarse:
//   "{"foo"; "bar"}"
```

Al momento de obtener la información de parte del localStorage, va a ser necesario parser esta información desde el constructor JSON, porque sino, no vasa poder trabajar la información con comodidad. Tambien, la respuesta, que se encontrará en la key **obj**, será un string de lo que trabajes, hasta que lo parsees. _(JSON.parse(obj))_


### **(local/session)Storage.getItem("key")**

---

El metodo utilizado para obtener la información desde el storage, tambien es bastante simple y logico. Este obtiene la infromación de aquella propiedad cuyo nombre coincida con el nombre pasado como parametro. 

En el siguiente ejemplo, continuado del anterior, obtendremos aquello que se haya guardado en el localStorage en la key `"obj"`

```js
let storedObj = JSON.parse(localStorage.getItem('obj'));
```

Desde aquí vas a obtener la string resultante que se guardó en el localStorage. para pasar esta string a el objeto correspondiente, es necesario parsearlos (es decir, intentar transformarlo en el tipo de dato que se pretende. en este caso, un JSON, _u objeto o array pa' los amigos_).

### (local/session)Storage.clear()

> _Bastante "transparente" el metodo. ja_

```js
localStorage.clear();
```


Simplemente lo que hace es vaciar COMPLETAMENTE todo aquello guardado en la storage. Al menos, lo publico guardado en el storage. Con simplemente ejecutar el comando, o la linea de codigo, sucede lo pretendido.

### (local/session)Storage.removeItem("key")

```js
localStorage.removeItem("obj");
```

Lo mismo que en el anterior caso, la diferencia que puede borrar por completo una propiedad o key especifica por completo. Es decir, que también desaparece la propiedad, el nombre de la propiedad, etc. Como que ya no existe en el objeto este parametro. 

Si se intenta acceder al item luego de aplicar este metodo, obtendrá un error de respuesta.



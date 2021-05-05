## Consigna Pixel-art

Sobre la base de este proyecto que vimos, sumar todo lo que puedan de estas propuestas (en todos los casos, la idea es que agreguen una cabecera con las herramientas que propongo, y abajo se arme la cuadrícula):

1. Agregar dos inputs type `number` para definir cantidad de filas y de columnas, con un botón "Reiniciar" que tome esos valores y redibuje la cuadrícula acorde (al inicio de la app, la cuadrícula es de 20x20).

2. Agregar otro input `number` para el tamaño de lados de cada cuadro (inicia en 20 también). Cada vez que cambie el valor (evento `change`), se aplica el cambio sobre los atributos `width` y `height` de CSS de los cuadros, sin reiniciar el dibujo. Recuerden que el valor del input lo tienen en la propiedad `value`. Por si les es útil, lean esta nota al pie sobre [el objeto this](#objeto-this).

3. Agregar un input `color` para cambiar el color de fondo de los cuadros (se aplica sin reiniciar dibujo).

> El input tipo `color` dibuja lo que llamamos un _color picker_ (un selector de colores), que nos permite elegir un color con una interfaz muy amigable, y que también nos permite acceder a la selección en su propiedad `value` (en formato #RRGGBB).

4. Agregar un input `color` para cambiar el color con el que se pinta un cuadro (tampoco reinicia dibujo y solo cambia el color de los cuadros que se pinten después).

5. Cambiar la lógica de pintado y borrado para usar dos botones de herramienta lápiz y goma. Crear esos dos botones como elementos `img` (en lugar de usar button) chicos que tengan como imagen un ícono de lápiz y otro de goma. Al seleccionar el lápiz se habilita esa funcionalidad (hacer click en un cuadro lo pinta con el color vigente) y para que se note, el botón de goma se grisa (seteando opacity a 0.5). Con el botón de goma (que hace que al hacer click se pinte el cuadro con el color de fondo -borrado-) que sea igual: "grisa" el botón de lápiz. Si pueden y quieren, una alternativa es que en lugar de grisar el botón deshabilitado, cambien el color de fondo del botón (si usaron una imagen transparente va a quedar bien) para marcar de alguna manera (negro/blanco, verde/rojo) cuál es la herramienta activa.

> Como en este caso, un botón no tiene por qué ser un elemento `button`. Puede ser un `img`, `div`, `a`, etc. Básicamente cualquier elemento que admita el evento `click`.

>Para la imagen: Para que los botones hechos con imágenes queden bien, tenemos que hacer que la imagen (que va a tener que tener fondo transparente) se escale al tamaño necesario y centrada (y quizás sobre un fondo de color). Para eso pueden usar estas reglas:

```css
  background-image: url("lapiz.png")
  background-color: #abcdef;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
```

6. Agregar un input tipo `checkbox` para decidir si se muestra o no la línea de borde de los cuadros. El input `checkbox` indica si está o no seleccionado por su propiedad `checked` (`true`/`false`) y se puede monitorar el cambio con el evento `change`.

#### El objeto THIS
<a id="objeto-this"></a>

Sin profundizar demasiado, vamos a decir que el objeto `this` varía según el _contexto_ y representa al objeto/contexto que lo contiene. Por ejempo:
- suelto en el código global, `this` representa al objeto _global_ (en el caso del navegador, `window`).
- En una función puede depender del tipo de función (común o arrow) y de si indicamos que nuestro código se procese en "modo estricto" (ver en la guía).
- Dentro de un método (función como propiedad de un objeto) representa al objeto que lo contiene. En un evento representa al elemento sobre el que se disparó el evento.

Ese último caso es lo que nos puede resultar útil poner en práctica en este ejercicio (aunque no es necesario). Por ejemplo, si yo declaro este listener:

```js
  const inputSize = document.getElementById("input-size");

  inputSize.addEventListener("change", function() {
    // Muestro por consola el valor del input después de cambiar
    console.log(this.value);
  })
```

puedo usar el elemento `this` dentro del callback de la función para referirme al input por el que se disparó el evento (funciona para cualquier evento sobre cualquier elemento). Esto puede ser muy útil y ahorrar mucho código, porque muchas veces en los callbacks de los eventos necesitamos traer o cambiar algo del elemento sobre el que se dispara el evento.

Importante: si la función se escribe como _arrow function_ el comportamiento del objeto `this` es distinto (podríamos simplificar que representa al objeto `this` de su contenedor). En el caso del evento que escribimos de ejemplo, si el callback se escribe como arrow function:

```js
  const inputSize = document.getElementById("input-size");

  inputSize.addEventListener("change", () => {
    console.log(this.value);
  })
```

la consola mostraría `undefined`, porque en ese caso `this` equivale al objeto `window` (que sería el `this` del código global en el que está escrito el addEventListener), por lo tanto `window.value` es `undefined`.

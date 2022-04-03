# Captura y propagación (bubbling)  
## Gema Nataly Meraz Sánchez 19100218 
--------------------------------------

Las tres fases de la propagación de eventos en JavaScript son esenciales para comprender cómo usar eventos. Estas fases son:
1. **La fase de captura del evento** - *el evento desciende al elemento.*
2. **La fase objetivo** - *el evento alcanza al elemento.*
3. **La fase de propagación del evento** - *el evento se propaga hacia arriba del elemento.*

En esencia, el evento primero desciende a través de los elementos principales hasta que alcanza el elemento de destino (fase de captura). Cuando el evento alcanza el objetivo, se dispara allí (fase objetivo) y luego vuelve a subir por la cadena (fase burbujeante), llamando a los controladores en el camino.

El elemento objetivo se refiere al lugar exacto que está desencadenando el evento. Por ejemplo, si hace clic en un botón dentro de un `div`, la etiqueta `button` correspondiente sería el objetivo. Se puede acceder a este elemento como `event.target` y no cambiará a lo largo de las fases de propagación del evento.

![Imagen de las fases](https://miro.medium.com/max/724/1*GLU36VFddFRhA8n_4FGjzw.png)

Un detector de eventos es básicamente una función que espera a que ocurra un evento. Ese evento puede ser cualquier cosa como un evento de clic del mouse, enviar un formulario, presionar teclas de un teclado, etc.
Un detector de eventos contiene tres parámetros y se puede definir utilizando la siguiente sintaxis.

>`element`.addEventListener(`eventName`,`callbackFunction`, {capture : boolean});

* `elemento`: el elemento al que se adjunta un detector de eventos.
* `eventName`: Pueden ser eventos de 'clic', 'tecla arriba', 'tecla abajo', etc.
* `callbackFunction`: esta función se activa después de que sucedió el evento.
* {capture: boolean}: indica si el evento estará en la fase de captura o en la fase de propagación (opcional)

## **Captura**

*La fase de captura es raramente usada. Normalmente es invisible a nosotros.* 
La captura de eventos es la primera fase que ocurre cuando el evento se mueve hacia abajo por los elementos desde la parte superior hasta el objetivo del evento, como una cascada. Rara vez se usa cuando se manejan eventos, y la mayoría de las veces ocurre entre bastidores. Si se coloca un controlador, generalmente se hace durante la fase de propagación del evento, porque cuanto más cerca esté un elemento del objetivo, más contexto tendrá el elemento.

Cuando los controladores de eventos se configuran con `onClick`(o un diferente `on<event>`) o `addEventListener(event, handler)`, solo la fase de destino y la fase de propagación del evento lo detectarán. Si queremos capturar un evento durante la fase de captura, necesitamos agregar explícitamente `{capture: true}`o solo el implícito  true al final del detector de eventos.

>element.addEventListener("click", e => alert('Capturing'), {capture: true})   
>// or this way also works  
>element.addEventListener("click", e => alert('Capturing'), true)

Aunque oficialmente hay tres fases, la segunda fase “objetivo” que ocurre cuando *event.target* alcanza el elemento, no se maneja por separado como las demás. Tanto la captura de eventos como los controladores de propagación de eventos activarán esta fase automáticamente cuando terminen y comiencen con el elemento de destino.

## **Propagación (bubbling)**
El principio de propagación es simple. Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador en cada uno de ellos:
> *<*form onclick="alert('form')"*>* FORM    
>  *<*div onclick="alert('div')"*>* DIV    
>    *<*p onclick="alert('p')"*>* P *<*/p *>*   
>  *<*/div *>*       
> *<*/form *>*

Un clic en el elemento del interior `<`p`>` primero ejecuta onclick:
1. En ese `<`p`>`.
2. Luego en el `<`div`>` de arriba.
3. Luego en el `<`form`>` de más arriba.
4. Y así sucesivamente hasta el objeto *document*.

**Este proceso se conoce como “propagación” porque los eventos “se propagan” desde el elemento más al interior, a través de los padres, como una burbuja en el agua.**







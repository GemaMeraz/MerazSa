# Ajax
## Gema Nataly Meraz Sánchez 19100218

### ¿Qué es Ajax?

AJAX significa Asynchronous JavaScript And XML, permite recuperar contenido del servidor de forma asíncrona, sin una actualización de página. Por lo tanto, permite actualizar el contenido de una página web sin volver a cargarla.  

Realizar peticiones al servidor y esperar respuesta puede consumir tiempo. Para agilizar los desarrollos web surgió Ajax (aunque hoy día ya no es una tecnología ligada a XML con lo cual no pueden asociarse las siglas a estos términos), una tecnología que busca evitar las demoras propias de las peticiones y respuestas del servidor mediante la transmisión de datos en segundo plano usando un protocolo específicamente diseñado para la transmisión rápida de pequeños paquetes de datos.

Con Ajax, se hace posible realizar peticiones al servidor y obtener respuesta de este en segundo plano (sin necesidad de recargar la página web completa) y usar esos datos para, a través de JavaScript, modificar los contenidos de la página creando efectos dinámicos y rápidos.


<img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-ajax/sta-je-ajax.jpg " width="400px" height="250px">


Cuando realizamos peticiones AJAX disponemos del mismo sistema aunque usamos verbos para comunicarnos con el servidor.

* **GET:** Leer.
* **POST:** Crear.
* **PUT:** Actualizar.
* **DELETE:** Borrar.

 AJAX se introdujo por una razón y que su aplicación mejoró significativamente la comunicación entre la página específica y el servidor. Más precisamente, en la década de 1990, los sitios web se hacían principalmente con HTML, lo que de hecho significa que toda la red funcionaba muy lentamente, ya que era necesario recargar cada página si se realizaba una solicitud en particular. Todo esto repercutía en la calidad del trabajo de Internet y la velocidad de carga, y ahora podemos decir con certeza que era un método de trabajo altamente ineficiente.  





### ¿Cómo funciona?

El sistema generalmente comprende:

* HTML/XHTML para el lenguaje principal y CSS para la presentación.
* El Modelo de objetos del documento (DOM) para datos de visualización dinámicos y su interacción.
* XML para el intercambio de datos y XSLT para su manipulación. Muchos desarrolladores han comenzado a reemplazarlo por JSON porque es más similar a JavaScript en su forma.
* El objeto XMLHttpRequest para la comunicación asíncrona.
* Finalmente, el lenguaje de programación JavaScript para unir todas estas tecnologías.

En el esquema de comunicación tradicional: el cliente solicita una página web completa al servidor. El servidor recibe la petición, se toma su tiempo para preparar la respuesta y la envía. El resultado, una pequeña demora debido al tiempo que tarda en llegar la petición al servidor, el tiempo que éste tarda en preparar la respuesta, y el tiempo que tarda en llegar la respuesta más recargarse en el navegador.

Por el contrario, en el esquema de comunicación usando Ajax: el cliente tiene una página web cargada. El cliente sigue trabajando y en segundo plano le dice al servidor que le envíe un paquete de datos que le hacen falta. El servidor procesa la petición. Ahora la respuesta es mucho más rápida; no tiene que elaborar una página web completa, sino sólo preparar un paquete de datos. Por tanto el tiempo de respuesta es más rápido. El servidor envía el paquete de datos al cliente y el cliente los usa para cambiar los contenidos que se estaban mostrando en la página web.


<img src="https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01193E_1.png " width="500px" height="650px">


|        Modelo Tradicional           |  Modelo Ajax               |
|-------------------------------------|----------------------------|
|1. Se envía una solicitud HTTP desde el navegador web al servidor.  | 1. El navegador crea una llamada de JavaScript que luego activará XMLHttpRequest.|
|2. El servidor recibe y, posteriormente, recupera los datos.| 2. En segundo plano, el navegador web crea una solicitud HTTP al servidor.|
|3. El servidor envía los datos solicitados al navegador web.| 3. El servidor recibe, recupera y envía los datos al navegador web.|
|4. El navegador web recibe los datos y vuelve a cargar la página para que aparezcan los datos.| 4. El navegador web recibe los datos solicitados que aparecerán directamente en la página. No se necesita recargar.|
|Durante este proceso, los usuarios no tienen más remedio que esperar hasta que se complete todo el proceso. No solo consume mucho tiempo, sino que también supone una carga innecesaria en el servidor.|


### Páginas consultadas.
* https://code.tutsplus.com/es/tutorials/how-to-use-ajax-in-php-and-jquery--cms-32494
* https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=882:ique-es-y-para-que-sirve-ajax-ventajas-e-inconvenientes-javascript-asincrono-xml-y-json-cu01193e&catid=78&Itemid=206
* https://developer.mozilla.org/es/docs/Web/Guide/AJAX/Getting_Started
* https://www.hostinger.mx/tutoriales/que-es-ajax#:~:text=AJAX%20significa%20JavaScript%20as%C3%ADncrono%20y,al%20servidor%20en%20segundo%20plano.
* https://programadorwebvalencia.com/cursos/javascript/ajax/

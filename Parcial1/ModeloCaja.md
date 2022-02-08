# Modelo de Caja 
#### Gema Nataly Meraz Sánchez  19100218  


-------  


Los elementos que se encuentran en una pagina estan separados por cajas, este modelo una característica importante del lenguaje de hojas de estilos CSS. El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.  

Estas cajas son invisible al usuario y estas cajas se pueden aplicar ciertas propiedades para ubicar los elementos respecto a otros.  

Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.  

<img src = https://3con14.biz/css/_data/04_Modelo_cajas/modelo_cajas1.png width = "350" >

*Un ejemplo de la vista de cajas en una página*

## **Las partes que conforman un modelo de cajas**  
![Imagen](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)  

1. **Margen:** El margen es la capa más externa, que envuelve el contenido, el relleno y el borde como un espacio en blanco entre este cuadro y otros elementos. 
2. **Borde:** Es el límite que separa el interior del exterior del elemento. 
3. **Padding:** Es el margen interno o relleno, que se aplica del borde hacia adentro es decir, es el espacio libre opcional existente entre el contenido y el borde.
4. **Contenido:** se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)  

## **Propiedades**  
Podemos modificar las cajas utilizando algunas propiedades como por ejemplo:  
Las propiedades del margen especifican el ancho del área del margen de una caja. La propiedad resumida =='margin'== determina el margen para los cuatro lados mientras que las otras propiedades sólo determinan su lado respectivo. Estas son  
* margin-top
* margin-right
* margin-bottom
* margin-left

De igual manera para el borde y para el relleno existen otras propiedades que se pueden modificar para hacer más personalizadas las cajas

Hay propiedades ue controlan el flujo del contenido en una caja.  
* overflow
* box-sizing

Estas son solo algunas.

## **Tamaño**  
Para dar tamaños específicos a los diferentes elementos de un documento HTML, podemos asignarle valores a las propiedades width (ancho) y height (alto) dependiendo del tamaño que se necesite. Otras propiedades para modificar el tamaño:  
* width: min-width y max-width 
* height: min-height y max-height.

## **Posicionamiento de cajas**  
 Se puede diferenciar dos tipos de elementos HTML, en base a cómo se representan en pantalla. Estos son:    
1. **Block:** Muestra un elemento como si fuera un elemento de bloque. Cada elemento se posiciona uno debajo del otro.
2. **inline:** Visualiza un elemento en forma de elemento en línea. Es decir, uno al lado del otro, pero no mantiene las propiedades del elemento, como alto, ancho, margen etc.  


![Imagen](https://javadesde0.com/wp-content/uploads/block-vs-inline-tags-html.png) 

Fuentes bibliograficas 
* https://lenguajecss.com/css/modelo-de-cajas/que-es/  

* https://www.diegocmartin.com/modelo-de-cajas-y-posicionamiento-css/  

* https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model  

* https://uniwebsidad.com/libros/css/capitulo-4

* http://contenidos.sucerman.com/nivel3/web2/unidad3/leccion3.html

* https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model#referencia



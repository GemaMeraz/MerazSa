$(document).ready( function() {
    $("#btnAJAX").click(ajaxFunction);

    function ajaxFunction() {
    
        var ajaxRequest;
        ajaxRequest = new XMLHttpRequest();
    
    
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.readyState == 4)                                
            { document.getElementById("resultado").innerHTML = ajaxRequest.responseText; } 
        };
    
        ajaxRequest.open("GET","BotonAjax.php",true);  
        ajaxRequest.send();                                  
    }

    $('#btnJSON').click(function() {
        $.post('Formulario.php',{},function(data){
    
              console.log(data);
              $('#nomProducto').val(data.nomProducto);
              $('#idProducto').val(data.idProducto);
              $('#marcaProd').val(data.marcaProd);
              $('#catProd').val(data.catProd);
              $('#contProd').val(data.contProd);
              $('#imgProducto').val(data.imgProducto);
              $('#desProd').val(data.desProd);
              $('#precioProd').val(data.precioProd);
    
          },'json');
    });


    $('#btnP').click(function(){
        let promesa = new Promise (function(resolve, reject){
            var solicitud=new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if(solicitud.readyState == 4 && solicitud.status == 200){
                 resolve(solicitud.responseText);   
                }};
                solicitud.open("GET", "Promesa.txt", true );
                solicitud.send();
        });
        promesa.then(function(value){document.getElementById("resultado").innerHTML = value;});
    });


    document.getElementById("btnFetch").addEventListener("click", function() {
        let promesa = fetch('Formulario.php');
        promesa.then(respuesta => respuesta.json() ).then(datos => console.log(datos)); //función flecha return implicito
    });

});





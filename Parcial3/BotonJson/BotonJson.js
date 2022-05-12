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
        $.post('BotonJson.php',{},function(data){
    
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

});





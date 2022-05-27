$(document).ready( function() {
    // $('#btn1').click(function()
    //     {
    //      $('#alerta1').show(); 
    //     });
    //     $('#btnCloseAlert').click(function() {
    //       $('#alerta1').hide();
    //     });


    // $("#btnAJAX").click(ajaxFunction);

    // function ajaxFunction() {
    
    //     var ajaxRequest;
    //     ajaxRequest = new XMLHttpRequest();
    
    
    //     ajaxRequest.onreadystatechange = function() {
    //         if (ajaxRequest.readyState == 4)                                
    //         { document.getElementById("resultado").innerHTML = ajaxRequest.responseText; } 
    //     };
    
    //     ajaxRequest.open("GET","../php/BotonAjax.php",true);  
    //     ajaxRequest.send();                                  
    // }

    // $('#btnJSON').click(function() {
    //     $.post('../php/Formulario.php',{},function(data){
    
    //           console.log(data);
    //           $('#idProducto').val(data.idProducto);
    //           $('#nomProducto').val(data.nomProducto);
    //           $('#marcaProd').val(data.marcaProd);
    //           $('#catProd').val(data.catProd);
    //           $('#contProd').val(data.contProd);
    //           $('#proveedor').val(data.proveedor);
    //           $('#desProd').val(data.desProd);
    //           $('#precioProd').val(data.precioProd);
    
    //       },'json');
    // });


    // $('#btnP').click(function(){
    //     let promesa = new Promise (function(resolve, reject){
    //         var solicitud=new XMLHttpRequest();
    //         solicitud.onreadystatechange = function() {
    //             if(solicitud.readyState == 4 && solicitud.status == 200){
    //              resolve(solicitud.responseText);   
    //             }};
    //             solicitud.open("GET", "Promesa.txt", true );
    //             solicitud.send();
    //     });
    //     promesa.then(function(value){document.getElementById("resultado").innerHTML = value;});
    // });


    // document.getElementById("btnFetch").addEventListener("click", function() {
    //     let promesa = fetch('../php/Formulario.php');
    //     promesa.then(respuesta => respuesta.json() ).then(datos => console.log(datos)); //función flecha return implicito
    // });


    $('#btnConsulta').click(function(){
        let parid=prompt("Teclee el ID a consultar");

        $.post('../php/conexion.php',{par1:parid},function(data){
            refrescar(data);
        }, 'json' );
    });


    function refrescar(objeto){
        console.log(objeto);
        $('#idProducto').val(objeto.idProducto);
        $('#nomProducto').val(objeto.nomProducto);
        $('#marcaProd').val(objeto.marcaProd);
        $('#catProd').val(objeto.catProd);
        $('#contProd').val(objeto.contProd);
        $('#proveedor').val(objeto.proveedor);
        $('#desProd').val(objeto.desProd);
        $('#precioProd').val(objeto.precioProd);
    }

});





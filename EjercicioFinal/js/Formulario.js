$(document).ready( function() {
  
    $('#btnConsulta').click(function(){
      Swal.fire({
        title: 'Consultar',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          id:'dato'
        },
        showCancelButton: true,
        confirmButtonText: 'Consultar',
        showLoaderOnConfirm: true,
       
      }).then((result) => {
        if (result.isConfirmed) {
          let parid= $("#dato").val();
          $.post('../php/conexion.php',{par1:parid},function(data){
            refrescar(data);
        }, 'json' );
        }
      })
        

       
    });

    $('#btnAgregar').click(function(){
        let idProducto =$('#idProducto').val();
        let nomProducto = $('#nomProducto').val();
        let marcaProd = $('#marcaProd').val();
        let catProd = $('#catProd').val();
        let contProd = $('#contProd').val();
        let proveedor = $('#proveedor').val();
        let desProd = $('#desProd').val();
        let precioProd = $('#precioProd').val();

        $.post('../php/agregar.php', {id:idProducto, nom:nomProducto, ma:marcaProd, cat:catProd, cont:contProd, pr:proveedor, de:desProd, pre:precioProd});

        Swal.fire({
            /*position: 'top-end',*/
            icon: 'success',
            title: 'La información se ha agregado',
            showConfirmButton: false,
            timer: 1500
          })
        

        
    });
    

    $('#btnModificar').click(function(){
        let idProducto =$('#idProducto').val();
        let nomProducto = $('#nomProducto').val();
        let marcaProd = $('#marcaProd').val();
        let catProd = $('#catProd').val();
        let contProd = $('#contProd').val();
        let proveedor = $('#proveedor').val();
        let desProd = $('#desProd').val();
        let precioProd = $('#precioProd').val();

        Swal.fire({
            title: '¿Desea actualizar la información?',
            /*text: "You won't be able to revert this!",*/
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Se ha actualizado la información',
                'success'
              )
              
            }
            $.post('../php/modificar.php', {id:idProducto, nom:nomProducto, ma:marcaProd, cat:catProd, cont:contProd, pr:proveedor, de:desProd, pre:precioProd});
          })
    });
   
    $('#btnEliminar').click(function(){
        let v = $('#idProducto').val();

        
         const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
               cancelButton: 'btn btn-danger'
             },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
             title: '¿Deseas eliminar este registro?',
             icon: 'warning',
             showCancelButton: true,
             confirmButtonText: 'Eliminar',
             cancelButtonText: 'Cancelar',
             reverseButtons: true
           }).then((result) => {
             if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                 'Se eliminó',
                 '',
                 'success'
                 
               )
               $.post('../php/eliminar.php',{par1:v},function(data){
                refrescar(data);
            }, 'json' );
             }
             
             else if (
              
               result.dismiss === Swal.DismissReason.cancel
            ) {
               swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                 'error'
              )
            }


          })

        
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

    $('#btnLimpiar').click(function(){
      document.getElementById('idProducto').value = "";
       document.getElementById('nomProducto').value = "";
       document.getElementById('marcaProd').value = "";
       document.getElementById('catProd').value = "";
       document.getElementById('contProd').value = "";
       document.getElementById('proveedor').value = "";
       document.getElementById('desProd').value = "";
       document.getElementById('precioProd').value = "";
    });

});





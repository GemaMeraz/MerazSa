<?php
$registro['idProducto'] ='tc145';
$registro['nomProducto']  ='Computadora';
$registro['marcaProd']   ='HP';
$registro['catProd'] ='Tecnologia';
$registro['contProd']       ='1 pieza';
$registro['proveedor'] ='Anderson';
$registro['desProd']     ='Computadora portatil en color plateado';
$registro['precioProd']     ='16,500';

$registroJson = json_encode($registro);
echo $registroJson;
?>
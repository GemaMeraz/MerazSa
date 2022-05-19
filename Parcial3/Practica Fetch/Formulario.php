<?php
$registro['nomProducto']  ='Computadora';
$registro['idProducto'] ='10456';
$registro['marcaProd']   ='HP';
$registro['catProd'] ='Tecnologia';
$registro['contProd']       ='1 pieza';
$registro['Proveedor'] ='Anderson';
$registro['desProd']     ='Computadora portatil en color plateado';
$registro['precioProd']     ='16,500';

$registroJson = json_encode($registro);
echo $registroJson;
?>
<?php
$iduser=$_POST['par1'];
$hostname ='localhost';
$database ='gm19100218';
$username = 'root';
$password = '';
$port = '3306';

try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e){
    echo "Error de conexión a la base de datos";
    echo $e->getMessage();
    exit();
}
    /*Agregar*/
    $idProducto=$_POST['id'];
    $nomProducto=$_POST['nom'];
    $marcaProd=$_POST['ma'];
    $catProd=$_POST['cat'];
    $contProd=$_POST['cont'];
    $proveedor=$_POST['pr'];
    $desProd=$_POST['de'];
    $precioProd=$_POST['pre'];


    try{
        $consultaSql = "INSERT INTO producto (idProducto,nomProducto, marcaProd, catProd, contProd, proveedor, desProd, precioProd) VALUES ('$idProducto', '$nomProducto','$marcaProd','$catProd','$contProd','$proveedor','$desProd','$precioProd')";
        $consulta=$con -> prepare($consultaSql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
    } catch (PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e-> getMessage();
    }


    
?>

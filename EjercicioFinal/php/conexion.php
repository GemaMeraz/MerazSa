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

try{
    $consultaSql = "select * from producto where idProducto=".$iduser;
    $consulta=$con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
} catch (PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e-> getMessage();
}

echo json_encode($resultado);
?>
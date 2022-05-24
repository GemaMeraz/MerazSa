create database GM19100218;
use GM19100218;

create table producto
(
    nomProducto varchar(30),
    idProducto varchar(10),
    marcaProd  varchar(20),
    catProd    varchar(20),
    contProd   varchar(25),
    Proveedor  varchar(30),
    desProd    text,
    precioProd  float,
    primary key(idProducto) 
);

insert into producto (nomProducto, idProducto, marcaProd,catProd,contProd,Proveedor,desProd,precioProd)
values('laptop','tc158','dell','tecnología','1 pieza', 'Dell México', 'Laptop 15 pulgadas, color negro','20000.00');

insert into producto (nomProducto, idProducto, marcaProd,catProd,contProd,Proveedor,desProd,precioProd)
values('telefono huawei','tl782','huawei','telefonía','1 pieza', 'huawei', 'telefono 6 pulgadas, color gris metalico','15000.70');
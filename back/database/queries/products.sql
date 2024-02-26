create table productsCatalog (
	id serial primary key, 
	nombreProducto varchar(50),
	categoriaProducto varchar(30),
	tipoProducto varchar(40),
	dimensionesProducto varchar(30),
	variantesProducto varchar(20), 
	marcaProducto FOREIGN key references brandsCatalog(id) varchar(30),
	udsInStokc int,
	fechaLlegadaStock date
);

/*====================================COLECCIONES================================================*/
create table colecciones (
	id SERIAL primary key, 
	nombreColeccion varchar(20),
	collectionYear int
); 

drop table colecciones ; 

insert into colecciones ( nombreColeccion , collectionYear) 
values

	('AW' , 2024),
	('FW' , 2024),
	('PF' , 2024),
	('SS' , 2025),
	('AW' , 2025),
	('FW' , 2025),
	('PF' , 2025),
	('SS' , 2025)
	
returning * ; 
/*====================================COLECCIONES================================================*/



/*====================================MARCAS================================================*/
create table brandsCatalog (
	id serial
	, nombreMarca varchar(50) primary key 
	, quantityInStock int 
);

drop table brandsCatalog ; 


insert into brandscatalog (nombreMarca , quantityinstock ) 
values  
	('Guess',125),
  	('Diesel',3500),
  	('Birkenstock',276),
  	('Moschino',1447),
  	('Brooks',1987),
  	('Calvin Klein',726),
  	('Valentino',1345),
  	('EA7',542),
  	('Adidas',1893),
  	('Nike',1567),
  	('Asics',899),
  	('Armani Jeans',2012),
  	('Coach',450),
  	('Chiara Ferragni',1678),
  	('DAY ET',893),
 	('DKNY',2210),
  	('Emporio Armani',635),
  	('Dr. Martens',1789),
  	('Gant',1256),
  	('FJALLRAVEN',1043),
  	('Herschel',2567),
  	('Champion',732),
  	('Boss',   1598),
  	('Icebug', 2089)  
		  
returning * ;
/*====================================MARCAS================================================*/

/*====================================PRODUCTOS================================================*/
create table productsCatalog (
	id serial, 
	nombreProducto varchar(50),
	categoriaProducto varchar(30),
	tipoProducto varchar(40),
	dimensionesProducto varchar(30),
	variantesProducto varchar(20), 
	udsInStokc int,
	fechaLlegadaStock date,
	marcaProducto varchar(50), 
	PRIMARY KEY(marcaProducto),
   	CONSTRAINT fk_marcaProducto
      FOREIGN KEY(nombreMarca) 
        REFERENCES brandscatalog(nombreMarca)
);
/*====================================PRODUCTOS================================================*/


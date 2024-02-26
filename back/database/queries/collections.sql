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



create table brandsCatalog (
	id serial primary key
	, nombreMarca varchar(50)
	, quantityInStock int 
); 




drop table brandsCatalog ; 


insert into brandscatalog (nombreMarca , quantityinstock ) 
values  
	
	('Guess',             125),
  	('Diesel',            3500),
  	('Birkenstock',       276),
  	('Moschino',             1447),
  	('Brooks',                1987),
  	('Calvin Klein',          726),
  	('Valentino',             1345),
  	('EA7',                   542),
  	('Adidas',                1893),
  	('Nike',                  1567),
  	('Asics',                 899),
  	('Armani Jeans',          2012),
  	('Coach',                 450),
  	('Chiara Ferragni',       1678),
  	('DAY ET',                893),
 	('DKNY',                  2210),
  	('Emporio Armani',        635),
  	('Dr. Martens',           1789),
  	('Gant',                  1256),
  	('FJALLRAVEN',            1043),
  	('Herschel',              2567),
  	('Champion',              732),
  	('Boss',                  1598),
  	('Icebug',                2089)  
		  
returning * ; 


 
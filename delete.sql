============================delete part======================

create table users(
id INTEGER Not null Primary key AUTO_INCREMENT,
email text not null,
password text not null,
createdAt timestamp default now()
);

create table orders(
id INTEGER Not null Primary key AUTO_INCREMENT,
productId INTEGER not null,
userId INTEGER not null,
quantity INTEGER not null,
payment int not null default 0,
createdAt timestamp default now()
);


create table products(id INTEGER Not null Primary key AUTO_INCREMENT,
name text not null,
category text not null,
price INTEGER not null default 10000,
createdAt timestamp default now()
);



	INSERT INTO users (email, password) VALUES 
("abc@relevel.com", "abcPassWord"),
("xyz@relevel.com", "xyzPassWord"),
("mno@relevel.com", "mnoPassWord"),
("srk@relevel.com", "srkPassWord"),
("relevel@relevel.com", "relevelPassWord");

	INSERT INTO products (name, category, price) VALUES 
("Pixel 4b", "MobilePhone", 30000),
("Pixel 4", "MobilePhone", 34000),
("Sony Bravia", " Television ", 40000),
("Dell", "Laptop", 50000),
("Lenovo", "Laptop", 35000),
("Samsung s21", "MobilePhone", 120000);

	INSERT INTO orders (productId, userId, quantity) VALUES
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2); 

delete from products where name='Samsung s21';
select * from products; 


      /* Output:   run (onecompiler.com )

id	name	category	price	createdAt
1	Pixel 4b	MobilePhone	30000	2022-08-10 05:19:06
2	Pixel 4	MobilePhone	34000	2022-08-10 05:19:06
3	Sony Bravia	 Television 	40000	2022-08-10 05:19:06
4	Dell	Laptop	50000	2022-08-10 05:19:06
5	Lenovo	Laptop	35000	2022-08-10 05:19:06  */
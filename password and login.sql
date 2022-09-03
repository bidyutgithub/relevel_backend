=======================password and login===================================
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

select * from users where
email="relevel@relevel.com" and password="relevelPassWord"
                   /* Output:

                      id	email	password	createdAt
                     5	relevel@relevel.com	relevelPassWord	2022-08-10 09:37:29   */
=====================
//ata ke loggedIn r not login a use kora hoy

//select case when true then 'loggedIn' else 'not loggedIn' end as result
// from users where
//email="relevel@relevel.com" and password="relevelPassWord"
                             //Output:result
                                     loggedIn
======================
//ata o use korte pari
 
 select if(true,'loggedIn','not loggedIn');
===================================
//jodi email and password tik thake tahole ata use kora hobe

select 'loggedIn' as result from user where
email="relevel@relevel.com" and password="relevelPassWord"

==========================

select if(      //jodi email and password match na hoy tahole ata use kora hobe
	(select email from user where
	  email="relevel@relevel.com" and password="relevelPassWord")Is NULL,
	  'bad credentails','loggedIn'

);
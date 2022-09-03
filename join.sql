

===================cross join================================

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

select products.name,user.email from
users cross join products;
========================================================================
====================inner join==========================================

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

	INSERT INTO products (id,name, category, price) VALUES 
(1,"Pixel 4b", "MobilePhone", 30000),
(2,"Pixel 4", "MobilePhone", 34000),
(3,"Sony Bravia", " Television ", 40000),
(4,"Dell", "Laptop", 50000),
(5,"Lenovo", "Laptop", 35000),
(6,"Samsung s21", "MobilePhone", 120000);
(7,"Samsung a21", "MobilePhone", 15000);



	INSERT INTO orders (productId, userId, quantity) VALUES
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2);
 

select * from products as t1 inner join orders t2 on t1.id=t2.productId

           //output- product te 7 ta row ache but 6 ta row common ache user e
               to 6 ta row e asbe   
               
// run (extendclass.com/mysql) only run this line
    select * from products as t1 inner join orders t2 on t1.id=t2.productId
   

 ------- select * from users inner join orders as t2 on users.id = t2.userId inner join products as t3 on t3.id = t2.productId  
  
  
  
    =================================================================
===================left outer join================================

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

	INSERT INTO products (id,name, category, price) VALUES 
(1,"Pixel 4b", "MobilePhone", 30000),
(2,"Pixel 4", "MobilePhone", 34000),
(3,"Sony Bravia", " Television ", 40000),
(4,"Dell", "Laptop", 50000),
(5,"Lenovo", "Laptop", 35000),
(6,"Samsung s21", "MobilePhone", 120000);
(7,"Samsung a21", "MobilePhone", 15000);



	INSERT INTO orders (productId, userId, quantity) VALUES
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2);
 

select * from products  left outer join orders on products.id=order.productId

//output-// run (extendclass.com/mysql) only run this line

    select * from products  left outer join orders on products.id=order.productId

==============================================================
==================right outer join=========================================

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

	INSERT INTO products (id,name, category, price) VALUES 
(1,"Pixel 4b", "MobilePhone", 30000),
(2,"Pixel 4", "MobilePhone", 34000),
(3,"Sony Bravia", " Television ", 40000),
(4,"Dell", "Laptop", 50000),
(5,"Lenovo", "Laptop", 35000),
(6,"Samsung s21", "MobilePhone", 120000);
(7,"Samsung a21", "MobilePhone", 15000);



	INSERT INTO orders (productId, userId, quantity) VALUES
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2);
 

select * from products  right outer join orders on products.id=order.productId

//output-// run (extendclass.com/mysql) only run this line

    select * from products  right outer join orders on products.id=order.productId

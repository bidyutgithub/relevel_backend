/*============  Problem Statement=====================
Write a query to get all the products and their details, user email
which are added in the cart (using joins).
*/



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


select users.email,products.name,products.category,products.price,orders.quantity from users as users inner join orders as orders on users.id=orders.userId
inner join products as products on products.id = orders.productId

          //or use  either

select t1.email,t2.name,t2.category,t2.price,t3.quantity from users as t1 inner join orders as t3 on t1.id=t3.userId
inner join products as t2 on t2.id = t3.productId

      /*
        Output:

         email	          name	     category	   price	  quantity
        abc@relevel.com   Pixel 4b	   MobilePhone	30000	    2
        abc@relevel.com	  Sony Bravia  Television 	40000	    3
        mno@relevel.com	  Dell	       Laptop	    50000	    2
        xyz@relevel.com	  Lenovo	   Laptop	    35000	    1
        srk@relevel.com	  Pixel 4	   MobilePhone	34000	    2

      */

===========================================================
=================problem 2===============

//problem
 /*  Write a query to get the user and total price who has added the
products which total cost is highest of all of them (using joins and sub
query).  */



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

                                                    //use group By(t2.price*t3.quantity)

select t1.email,t2.name,t2.category,t2.price,t3.quantity, (t2.price*t3.quantity) as totalCost from users as t1 inner join orders as t3 on t1.id=t3.userId
inner join products as t2 on t2.id = t3.productId

/*
  Output:

email	             name	      category	      price	     quantity	  totalCost
abc@relevel.com	    Pixel 4b	  MobilePhone	   30000	     2	         60000
abc@relevel.com	    Sony Bravia	  Television 	   40000	     3	       120000
mno@relevel.com	    Dell	      Laptop	       50000	     2           100000
xyz@relevel.com	    Lenovo	      Laptop	       35000	     1	       35000
srk@relevel.com	    Pixel 4    	  MobilePhone	   34000	     2	       68000
*/
=======================how to find highest cost  in cart product============================

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


select innerTable.email,sum(innerTable.totalCost) as highestCost, group_concat(innerTable.name) as cart_product from
(select t1.email,t2.name,t2.category,t2.price,t3.quantity, (t2.price*t3.quantity) as totalCost from users as t1 inner join orders as t3 on t1.id=t3.userId
inner join products as t2 on t2.id = t3.productId)   as innerTable group by innerTable.email

/*
Output:

email	         highestCost	 cart_product
abc@relevel.com	   180000	      Pixel 4b,Sony Bravia
mno@relevel.com	   100000	      Dell
srk@relevel.com	   68000	      Pixel 4
xyz@relevel.com    35000	       Lenovo

*/
=========== top highest cost  in table

select t1.email, t3.price * t2.quantity as highestCost from users as t1 inner join orders as t2 on t1.id=t2.userId 
inner join products as t3 on t3.id = t2.productId where t3.price * t2.quantity in (select max(t3.price*t2.quantity)from users as t1 inner join orders as t2 on t1.id= t2.userId 
inner join products as t3 on t3.id = t2.productId)
/*
Output:

email	highestCost   abc@relevel.com	120000

*/
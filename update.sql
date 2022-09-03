==================update use===============================


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

 alter table products add column rating INTEGER default 5;

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

//select @@sql_safe_updates;        //output- 0      asbe   
//SET sql_safe_updates=1         

//ekane where mathod use kora hoyni to puro input tae update hobe r
 
update orders set quantity=quantity+1;
select productId,userId,quantity from orders;

//where mathod
// jodi where mathod use kora hoy tahole  jata select korbo satae update hobe

update orders set quantity=quantity+1 where id=4;
swlwct id,quantity from orders;


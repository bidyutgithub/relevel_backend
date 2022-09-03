-- create//DDL
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert//DML
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales'),(0004,'bidyut','sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0003, 'goutam', 'Sales');

-- fetch //DQL
SELECT * FROM EMPLOYEE WHERE dept = 'Sales';



//OUTPUT -run on the (onecompiler.com)  sakhane giya run korte hobe
================================================================


--create
create table product(id INTEGER Not null Primary key AUTO_INCREMENT,
name text not null,
category text not null,
price INTEGER not null default 10000,
createAt timestamp default now()
);

--insert
INSERT INTO product(name,category,price)VALUES('tv','electronics',4000);
INSERT INTO product(name,category,price)VALUES('tv2','electronics',4000);
INSERT INTO product(name,category)VALUES('tv','electronics');

--fatch
select* from product;

//select id,category,name from product;    // ata o likhte pari amake jata dorker

     //OUTPUT -run on the (onecompiler.com)  sakhane giya run korte hobe
====================================================================================

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

select * from products;   //ei product er jaygay change korte parbo

      // //OUTPUT -run on the (onecompiler.com)  sakhane giya run korte hobe



// group by  category the product should be sorted base on the price in assending order

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
    
    SELECT name,category,price FROM products
    GROUP BY category,name,id order by price;
                /* 
                Output:

                  name	category	price
                  Pixel 4b	MobilePhone	   30000
                  Pixel 4	MobilePhone	   34000
                  Lenovo	Laptop	       35000
                  Sony Bravia Television   40000
                  Dell	Laptop	           50000
                  Samsung s21 MobilePhone  120000
                */
=========group by output dorker hole ata use kora jabe======
 
//use GROPU_CONCAT

SELECT GROUP_CONCAT(name) as name, category, sum(price) as price FROM products
GROUP BY category order by price;
               /* 
    name	                   category	              price
Sony Bravia	                  Television 	          40000
Dell,Lenovo	                  Laptop             	  85000
Pixel 4b,Pixel 4,Samsungs21   MobilePhone	          184000
               */
  OR USR

  SELECT GROUP_CONCAT(name) as name, category, GROUP_CONCAT(price) as price FROM products
GROUP BY category order by price;
           /*
name	                   category	              price
Sony Bravia	                  Television 	          40000
Dell,Lenovo	                  Laptop             	  50000,35000
Pixel 4b,Pixel 4,Samsungs21   MobilePhone	          30000,34000,120000 
           */




=========ei product er modha mobile phone prduct er  modha mobile er max price dekte hobe
//how

select max(price)from products;   
        //output -- max price MobilePhone  120000

        or user

select name ,price from products where price in (select max(price) from products);
       //output--name               price
              //  samsung s21         120000
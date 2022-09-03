npm init
npm install express --save
npm install sequelize --save
npm install body-parser --save
npm install mysql2 --save
npm install dotenv --save
 npm i bcryptjs     //(install)



npx sequelize init  //config folder comimg
npm install sequelize-cli

npx sequelize init
npx sequelize db:craete
=================================================
//model created (categories)
npx sequelize model:generate --name Categories--attributes name:text,description:text

//get api:
localhost:2500/ecom/api/v1/categories
localhost:2500/ecom/api/v1/categories/1

put api:
localhost:2500/ecom/api/v1/categories

{
    "name:"bank",
    "description":"about bank & payment"
}

//delete api:
localhost:2500/ecom/api/v1/categories/1
==================================
//create module products:
npx sequelize model:generate --name Products --attri
butes name:text,cost:integer,description:text,quantity:integer

post api:
localhost:2500/ecom/api/v1/products
{
    "name":"Mobile Cover",
    "description":" All Type Mobile Cover",
    "cost":120,
    "quantity":100
}


//signup link in postman
http://localhost:2500/ecomm/api/v1/auth/signup


7. install packages
    npm i jsonwebtoken


//verify token ki kore use kora hoy postman e 
  ei name file save kora ache image(access token verify token) & link in postman( http://localhost:2500/ecom/api/v1/products )




  //test my programming
  npm i --save-dev jest cross-env supertest

step wise commond

1. npm init   //(package.json) folder coming

2. npm i express sequelize sequelize-cli mysql2  //(package-lock.json & node module) folder coming

3. npx sequelize init   //(config,migration,models,seeders) folder coming

4. npx sequelize db:create   //(database revision class created in mysql server)


//model created &migration created

        1. npx sequelize model:generate --name Users --attributes name:t
         ext 
             //(   New model was created at E:\backed devloper\revision\models\users.js .
                   New migration was created at E:\backed devloper\revision\migrations\20220824164940-create-use  )

       2.  npx sequelize model:generate --name Companies --attributes name:text

           //(  New model was created at E:\backed devloper\revision\models\companies.js .
                New migration was created at E:\backed devloper\revision\migrations\20220824165308-create-companies.js . )
 
 5. //all migrate folder creating in database
     npx sequelize model:generate

     //migrate status chaek
     npx sequelize db:migrate:status 

     //delete database
     npx sequelize db:migrate:undo

6.    seeders file created
     1. npx sequelize seed:generate --name add-companies
     2. npx sequelize seed:generate --name add-users
     
     //seeders file created in database
      
   npx sequelize db:seed:all   //(all file coming in database)

  // if delete -seeders file created in database
      npx sequelize db:seed:undo
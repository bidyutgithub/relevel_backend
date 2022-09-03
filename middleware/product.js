
const{Categories} = require('../models')
async function validateProductData(req,res,next){
   const productData = req.body;

   if(!productData.name){
    res.status(400).send({msg: "name is missing in product data"})
      return;  
 }
 if(productData.CategoryId){
  
    const result = await Categories.findByPk(productData.CategoryId);      //pk means primary key
          if(result){
              next()
          }else{
            res.status(400).send({msg: "CategoryId dose not exit i category table"})
            return; 
          }

}else{
    res.status(400).send({msg: "CategoryId is missing in product data"})
     return; 
}

}



module.exports = {validateProductData}
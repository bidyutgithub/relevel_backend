const express = require('express')
const { createProduct,getAllProduct,getProductOnId,updateProduct,deleteProduct, filterBasedOnProduct} =require('../controller/product')

const{ validateProductData, verifyToken, isAdmin } =require('../middleware')
const routes =express.Router()


routes.post('/ecom/api/v1/products',[validateProductData,verifyToken, isAdmin], createProduct)

routes.get('/ecom/api/v1/products', getAllProduct)

routes.get('/ecom/api/v1/products/filter', filterBasedOnProduct)

routes.get('/ecom/api/v1/products/:id', getProductOnId)

routes.put('/ecom/api/v1/products/:id',[verifyToken, isAdmin], updateProduct)

routes.delete('/ecom/api/v1/products/:id',[verifyToken, isAdmin], deleteProduct)


module.exports={productRoutes : routes}  
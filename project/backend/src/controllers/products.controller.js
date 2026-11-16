import prisma from "../config/prisma.js"

export const createProduct = async (req, res) =>{


try{
   const {name, Sku, price, description, quantity, categoryId} = req.body
   if( !name || !Sku || price ===undefined || !description || quantity ===undefined || !categoryId){
    return res.status(400).json({message: "All fields requierd!"})
   }

   const result = await prisma.product.create({data:{
    name, Sku, price, description, quantity, categoryId
   }})

   if(!result){
    return res.status(400).json({message: "Error while creating the product!"})
   }
   res.status(201).json({
    ok:true,
    sucess:true,
    product:result
   })


}catch(error){
    console.log("Error", error)
    res.status(500).json({message: "internal server Error!"})
}




}

export const getProducts = async (req, res)=>{
try{
 const result = await prisma.product.findMany({orderBy: {createAt:"desc"}})
 if(!result){
    return res.status(404).json({message: "No products found!"})
 }

 res.status(200).json(result)
  

}catch(error){
    res.status(500).json({message: "Internal server error!"})

}
}

export const getSignleProducts = async (req, res)=>{
try{

     const {id} = await req.params
   const result= await prisma.product.findUnique({where:{id}})
   
   if(!result){
    return res.status(404).json({message: "Product not found"})
   }

 if(!result){
    return res.status(404).json({message: "No products found!"})
 }

 res.status(200).json(result)
  

}catch(error){
    res.status(500).json({message: "Internal server error!"})

}
}

export const updateProduct = async (req, res)=>{
try{
   const {id} = await req.params
   const {name, Sku, price, description, quantity, categoryId} = req.body

   const product = await prisma.product.findUnique({where:{id}})
   
   if(!product){
    return res.status(404).json({message: "Product not found"})
   }
  
   if( !name || !Sku || price ===undefined || !description || quantity ===undefined || !categoryId){
    return res.status(400).json({message: "All fields requierd!"})
   }


   const updateProduct = await prisma.product.update({
    where:{
        id   },
         data:{
         name, Sku, price, description, quantity, categoryId
         
    }
   });
    if(!updateProduct){
        return res.status(400).json({message: "Failed to update the product!"})
    }

    res.status(200).json(updateProduct)
  

  
}catch(error){
    res.status(500).json({message: "Internal server error!"})
}
}

export const deleteProduct = async (req, res)=>{
try{

    const {id} = req.params

    const product = await prisma.product.findUnique({where: {id}})
    if(!product){
        return res.status(404).json({message: "product not found!"})
    }

    const result = await prisma.product.delete({where: {id}})
    if(!result){
        return res.status(400).json({message: "Failed to delete the product!"})
    }

    res.status(200).json({
        ok:true,
        sucess:true,
        message: "Product deleted successfully"})

}catch(error){
    res.status(500).json({message: "Internal server error!"})
}
}
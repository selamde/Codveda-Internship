import prisma from "../config/prisma.js"

export const getCategories = async (req, res)=>{
try{

const result = await prisma.category.findMany({
    orderBy:{
        createAt: "desc"
    }
})

if(!result){
    res.status(404).json({message: "categories not found"})
}

res.status(200).json(result)

}catch(error){
res.status(500).json({message: "Internal server error!"})
}
}

export const addCategorie = async (req, res)=>{
    try{
        //   console.log("Request body:", req.body);
    const {name, description} = req.body
    // const newCategory = new category({name, description})
    const result = await prisma.category.create({data:{name, description}})

    if(!result){
       return res.status(400).json({message: "Failed to create new category"})
    }

    res.status(201).json({message: "Category create Successfully"})

    }catch(error){
 res.status(500).json({message: "Internal server error!"})
    }
}
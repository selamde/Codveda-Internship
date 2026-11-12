import express from  "express"
import { createProduct, deleteProduct, getProducts, getSignleProducts, updateProduct } from "../controllers/products.controller.js"

const router = express.Router()


// GET	/api/products	List products
router.get("/", getProducts )

// POST	/api/products	Create product
router.post("/", createProduct)


// PATCH	/api/products/:id	Update product
router.patch("/:id", updateProduct )

// DELETE	/api/products/:id	Delete product
router.delete("/:id", deleteProduct)

//get single product
router.get("/:id", getSignleProducts);


export default router
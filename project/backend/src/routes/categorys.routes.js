import express from "express"
import { addCategorie, getCategories } from "../controllers/categorys.controller.js"


const router = express.Router()


// GET	/api/categories	List categories
router.get("/", getCategories)


// POST	/api/categories	Create category
router.post("/", addCategorie)


export default router
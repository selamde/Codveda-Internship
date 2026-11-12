import express from "express"
import { createStockMovement, getStockMovement } from "../controllers/stockmovements.controller.js"


const router = express.Router()


// GET	/api/stock-movements	Movement history
router.get("/api/stock-movements", getStockMovement)


// POST	/api/stock-movements	Add stock movement
 router.post("/api/stock-movements", createStockMovement)


 export default router


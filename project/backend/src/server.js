import express from "express"
import { connectDb } from "./config/db.js";


const app = express();

app.use(express.json());

const port = process.env.PORT || 5000


// POST	/api/auth/register	Register user
// POST	/api/auth/login	Login
// GET	/api/auth/me	Current user


// GET	/api/products	List products
app.get("/api/products", (req, res)=>{
    const {} = req.body
    res.status(200).json("Getting all products")
})

// POST	/api/products	Create product
app.post("/api/products", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// PATCH	/api/products/:id	Update product
app.patch("/api/products/:id", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// DELETE	/api/products/:id	Delete product
app.delete("/api/products/:id", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// GET	/api/categories	List categories
app.get("/api/categories", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// POST	/api/categories	Create category
app.post("/api/categories", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// GET	/api/stock-movements	Movement history
app.get("/api/stock-movements", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

// POST	/api/stock-movements	Add stock movement
app.post("/api/stock-movements", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})


// GET	/api/dashboard/stats
app.get("/api/dashboard/stats", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

connectDb().then(()=>{
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
})


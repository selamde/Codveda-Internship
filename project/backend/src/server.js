import express from "express"
import { connectDb } from "./config/db.js";
import stockMovmentRoutes from "./routes/stockmovements.routes.js"
import productsRoutes from "./routes/products.routes.js"
import categoriesRoutes from "./routes/categorys.routes.js"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors({
   origin: "http://localhost:5173" 
}))

app.use((req, res, next) =>{
    console.log(`Reg method ${req.method} url ${req.url}`)
    next()

})



const port = process.env.PORT || 5000

// 4. Register routes
app.use("/api/products", productsRoutes )
app.use("/api/stock-movements", stockMovmentRoutes)
app.use("/api/categories", categoriesRoutes)


// POST	/api/auth/register	Register user
// POST	/api/auth/login	Login
// GET	/api/auth/me	Current user







// GET	/api/dashboard/stats
app.get("/api/dashboard/stats", (req, res)=>{
    res.status(200).json("Getting all prosucts")
})

connectDb().then(()=>{
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
})


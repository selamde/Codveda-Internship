import type { Product } from "@/types/product";


const APIURL = "https://localhost:5000/api"
export const getProducts = async (): Promise<Product[]> =>{
const response = await fetch(`${APIURL}/products`)

if(!response.ok){
    throw new Error("Failed to fetch the product")
}

return response.json()
}
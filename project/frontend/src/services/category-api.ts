import type { Category } from "@/types/category";

const APIURL = "http://localhost:5000/api"

export const getCategories = async (): Promise<Category[]> =>{
    const response = await fetch(`${APIURL}/categories`)

    if(!response.ok){
         throw new Error("Failed to fetch the category")
    }

    return response.json()

}
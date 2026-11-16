import type { Product } from "@/types/product";


const APIURL = "http://localhost:5000/api"
export const getProducts = async (): Promise<Product[]> =>{
const response = await fetch(`${APIURL}/products`)

if(!response.ok){
    throw new Error("Failed to fetch the product")
}

return response.json()
}


export const createProduct = async (product: Product ): Promise<Product> =>{

    const response = await fetch(`${APIURL}/products`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(product)
    })

    const result = await response.json();

    if(!result.ok){
        throw new Error( result.messsage || "Failed to create the product")
    }


    return result.product



}


export const deleteProduct = async (id: string): Promise<void> =>{

    const response = await fetch(`${APIURL}/products/${id}`, {
        method: "DELETE",
        headers:{
            "content-type": "application/json"
        },
    })

    const result = await response.json()

    if(!result.ok){
        throw new Error(result.messsage|| "Failed to delete the product")
    }

    return result.product


}
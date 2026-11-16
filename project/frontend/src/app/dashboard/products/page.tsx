import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCategories } from '@/hooks/use-categories'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '@/services/product-api'
import { toast } from 'sonner'

const Products = () => {
  const queryClient = useQueryClient();
  const{
    data: categories = [],
    isLoading,
    error
  } = useCategories();

  const [form, setForm] = useState({
    name: "",
    Sku: "",
    price: "",
    description: "",
    quantity:"",
    categoryId: ""
  });


  const mutation = useMutation({
    mutationFn: createProduct,

    onSuccess: async ()=>{

      await queryClient.invalidateQueries({
        queryKey:["products"]
      })

      setForm({
     name: "",
     Sku: "",
     price: "",
     description: "",
     quantity:"",
     categoryId: ""
      })

      toast.success("Sucecss", {description: "your product added sucessfully!"})
    

    },
    onError: (error) =>{
      console.log("Error: ", error.message)
      toast.error("Error", {description: "Error while creating the product"})
    }
  })


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    mutation.mutate({
    name: form.name,
    Sku: form.Sku,
    price: Number(form.price),
    description: form.description,
    quantity: Number(form.quantity),
    categoryId: form.categoryId
    })


    

   
    
  }

  return (
    <div className="flex items-center justify-center py-5">
             
                   <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className='font-bold'>Add Product</CardTitle>
        <CardDescription>
          Enter product details
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter roduct name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">Sku</Label>
              <Input
                id="sku"
                type="text"
                placeholder="Sku"
                value={form.Sku}
                onChange={(e) => setForm({...form, Sku: e.target.value})}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">price</Label>
              <Input
                id="price"
                type="text"
                placeholder="10000"
                value={form.price}
                onChange={(e)=> setForm({...form, price: e.target.value})}
                required
              />
            </div>
              
 
    <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Product description"
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="text"
                placeholder="100"
                value={form.quantity}
                onChange={(e) => setForm({...form, quantity: e.target.value})}
                required
              />
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <Label htmlFor="reviewer">Category</Label>

              {
                error?   (<div>Error loading the product</div>) : (
                   <Select
                // defaultValue={categories.map((item)=>{item.cte})}
              //   items={categories.map((category)=>({
              //     label: category.name,
              //  value:category.name
              //   }))}
                value={form.categoryId}
                 onValueChange={(value) => setForm({...form, categoryId: value ?? ""})}
              >
                <SelectTrigger id="reviewer" className="w-full">
                  <SelectValue placeholder={
                    isLoading? "Loading Categories...": "Select Category"
                  } />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category) => (
          <SelectItem key={category.name} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
                )
              }
             
             
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={mutation.isPending}>
         
          {mutation.isPending? "Creating..." : "Create"}
        </Button>
        </form>
      
        
        
      
      </CardContent>
      
    </Card>
                </div>
                
              
  )
}

export default Products
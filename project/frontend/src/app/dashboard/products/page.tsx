import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Products = () => {
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
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Product name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">Sku</Label>
              <Input
                id="sku"
                type="text"
                placeholder="Sku"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">price</Label>
              <Input
                id="price"
                type="text"
                placeholder="10000"
                required
              />
            </div>
              
 
    <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Product description"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="text"
                placeholder="100"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">category</Label>
              <Input
                id="category"
                type="text"
                placeholder="category"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Create Product
        </Button>
        
      </CardFooter>
    </Card>
                </div>
                
              
  )
}

export default Products
to use shad cn ui
first install tail wind css
update vite.config:
path from 'path'

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
})

and on tsconfig.app:
on the compiler option add:
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"]
},

trouble connecting to the database:
Your Node.js application cannot resolve MongoDB's SRV records using your router's default DNS (192.168.1.1), but it works perfectly with Google's DNS (8.8.8.8).

import dns from "node:dns";

dotenv.config();

// Fix MongoDB SRV DNS resolution
dns.setServers(["8.8.8.8", "8.8.4.4"]);

@@index():
In a Prisma schema, @@index() is a block-level attribute that defines a database index on one or more fields of a model.
An index creates a sorted data structure (such as a B-tree) in your underlying database, allowing queries to locate matching records quickly without scanning every row in a table. Unlike @unique or @@unique, @@index() speeds up read queries without enforcing uniqueness on the values.

to communicate with the database use prisma client:
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

the server was crushing so i changed the provider:
generator client {
provider = "prisma-client-js"
output = "../generated/prisma"
}

datasource db {
provider = "mongodb"
// url = env("DATABASE_URL")
}

@db.ObjectId is a Prisma field attribute that tells Prisma to store a field as a MongoDB ObjectId instead of a regular string.

Let's break it down.

1. What is ObjectId in MongoDB?
   MongoDB uses a special data type called ObjectId to uniquely identify documents.

For example, a MongoDB document:
{
"\_id": ObjectId("673abc123456789012345678"),
"name": "Laptop",
"price": 25000
}

//update on the data-table use effect

This useEffect synchronizes your local table data with the latest data received from the parent component.

Let's break it down.
React.useEffect(() => {
setData(initialData)
}, [initialData])

1. What is initialData?
   In your DataTable component:
   export function DataTable({
   data: initialData,
   }: {
   data: z.infer<typeof schema>[]
   }) {

You're receiving products from the parent component and naming that prop initialData.

For example:
<DataTable data={products} />

2. What does setData(initialData) do?
   Remember you have:
   const [data, setData] = React.useState(() => initialData)

This creates local state.

Initially, your table receives 10 products.

Later, you delete one product. React Query fetches the updated products, and now the parent passes 9 products.

However, useState does not automatically update when props change.

That's why we use:
setData(initialData)

It updates your local state with the latest products. 3. What does [initialData] mean?
This is the dependency array.
}, [initialData])

It tells React:

- Run this effect after the component mounts.
- Whenever initialData changes, run the effect again.
- Update the local data state.

4. Visual example
   Before deleting
   Parent: initialData
   3 products

Laptop

Mouse

Keyboard

After deleting Mouse
Parent: initialData
2 products

Laptop

Keyboard

useEffect detects the updated initialData and calls setData(initialData).

Table now shows 2 products

The important concept to remember

- useState stores local component data.
- Props receive data from a parent component.
- useEffect lets you synchronize local state when props change.
  In your project: React Query manages the server data, while your local data state manages the table data, including your drag-and-drop changes. The useEffect keeps them synchronized.

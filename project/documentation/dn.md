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

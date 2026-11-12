import mongoose from "mongoose"
import dotenv from "dotenv"
import dns from "node:dns"

dotenv.config()
// Fix MongoDB SRV DNS resolution
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database successfully connected!")

    }catch(error){
        console.error("Error connecting to the database!", error.message)
        process.exit(1)

    }

}

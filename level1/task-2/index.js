import express from "express"

const app = express()
app.use(express.json())



app.get("/api/getusers", (req, res)=>{
    
    res.status(200).json({message: "Geting all users"})
});

app.post("/api/createuser", (req, res)=>{
  
    res.status(200).json({message: "Creating a user"})
});

app.delete("/api/deleteuser/:id", (req, res)=>{
    const {id} = req.params;
    console.log(`Deleting a user with id: ${id}`)
    res.status(200).json({message: `Deleting a user with id: ${id}` })
});

app.put("/api/updateuser/:id", (req, res)=>{
    const {id} = req.params
    console.log(`Updating a user with id: ${id}`)
    res.status(200).json({message: `Updating a user with id: ${id}`})
});

app.get("/api/getuser/:id", (req, res)=>{
    const {id} = req.params
    console.log(`Geting a user with id: ${id}`);
    res.status(200).json({message: `Geting a user with id: ${id}` })
});


app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})
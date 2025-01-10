import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(cors());

const users = [
    {
        id:100,
        username:'prasanna_2004',
        email:'prasanna2004@gmail.com',
    },
    {
        id:101,
        username:'qwerty@52',
        email:'qwertypunda@gmail.com'
    }
]


app.get("/dashboard/:username",(req,res) =>
{
    console.log("I am called");
    const username = req.params.username;

    const user = users.find((user)=> user.username == username);
    console.log(user);
    if(user)
    {
        
        res.status(200).json(user);
    }else{
        res.json({message:'User not found'});
    }
})

app.listen(PORT,()=>
{
    console.log("Server is running on port "+PORT);
})
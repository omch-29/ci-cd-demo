import express from "express";
const app=express();
import sum from "./sum.js"




app.get("/home", async(req,res)=>{
    res.json({
        message:"hello",
    })
})


app.get("/getsum/:a/:b", async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})








app.listen(3000,()=>{
    console.log("listening on 3000");
})
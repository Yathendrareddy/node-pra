import express from "express"
import bodyParser from "body-parser"
import userRouter from "./router/user.js"
const server= express()
const port = 8888

server.use(bodyParser.json())
// server.get("/",(req,res)=>res.send("Hello Anil"))
server.use("/",userRouter)

server.listen(port)
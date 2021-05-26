let users = []

export const getUsers = (req,res)=>{
    console.log("Started Get")
    res.send(users)
}

export const createUsers = (req,res)=>{
    console.log("Started Create")
    users.push(req.body)
    res.send("ok")
}
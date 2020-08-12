const express = require("express")
const app = express()
app.use(express.urlencoded({urlencoded:true}))
app.use(express.json())

app.all("*",async(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
})

app.get("/user",async (req,res)=>{
    res.json({
        name:"张三"
    })
})

app.get("/role", async(req,res)=>{
    res.json({
        roleid:1,
        roles:["管理员","DBA"]
    })
})

app.get("/resources", async(req,res)=>{
    res.json({
        sid:1,
        list:["product","photo"]
    })
})

app.post("/user",async (req,res)=>{
    let data = req.body
    res.json(data)
})

app.put("/user",async (req,res)=>{
    let data = req.body
    res.json(data)
})

app.delete("/user",async (req,res)=>{
    let data = req.body
    res.json(data)
})

app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
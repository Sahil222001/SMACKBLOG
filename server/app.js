const express=require('express')
const app= express()

require('./config/db')
const SigninSchema=require("./models/RegInfo");
app.use(express.json())

app.use(
    express.urlencoded({ extended: true })
);
const port=process.env.PORT||4000;
const Register=require('./models/RegInfo')
app.listen(port,()=>{
    console.log(`server is listening on port. ${port}`)
})

app.get("/",(req,res)=>{
    res.send('HII');
})
app.post("/register",async(req,res)=>{
          try{
            
              if(req.body.password===req.body.cpassword)
              {
                const reguser=new SigninSchema({
                age:req.body.age,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password,
                cpassword:req.body.cpassword
                })
            await reguser.save();
            res.status(201)  
              }
            else{
                res.send("Password not matching")
            }
            
          }
          
          catch(e)
          {
              res.status(400).send(e)
          }
          
      })
    


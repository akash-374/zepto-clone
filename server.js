const express= require('express');
const app=express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>
{
    res.json({message:'hello, world!'});
});
app.post('/echo',(req,res)=>{
    const body=req.body;
    res.json({receviced: body});
});
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});
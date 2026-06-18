const router=require("express").Router();
const jwt=require("jsonwebtoken");

router.post("/login",(req,res)=>{

const {usuario,password}=req.body;

if(
usuario==="admin" &&
password==="1234"
){

const token=
jwt.sign(
{usuario},
process.env.JWT_SECRET,
{
expiresIn:"1h"
}
);

return res.json({
token
});

}

res.status(401).json({
mensaje:"Credenciales incorrectas"
});

});


router.get("/about",(req,res)=>{

res.json({

nombre:
"API Centro Médico",

descripcion:
"Gestiona pacientes y médicos"

});

});

module.exports=router;
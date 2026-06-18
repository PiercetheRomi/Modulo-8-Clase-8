const router=require("express").Router();

const auth=
require("../middleware/auth");

router.use(auth);

const medicos=[

{
id:1,
nombre:"Dr Perez"
},

{
id:2,
nombre:"Dra Soto"
}

];

router.get("/",(req,res)=>{

res.json(
medicos
);

});

module.exports=router;
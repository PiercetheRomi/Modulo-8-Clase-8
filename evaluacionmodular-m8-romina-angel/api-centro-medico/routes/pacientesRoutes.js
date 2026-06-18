const router=require("express").Router();

const auth=
require("../middleware/auth");

router.use(auth);

let pacientes=[];

router.get("/",(req,res)=>{

res.status(200)
.json(pacientes);

});

router.post("/",(req,res)=>{

const {nombre,edad}=req.body;

if(!nombre || !edad){

return res.status(400).json({
mensaje:"Nombre y edad son obligatorios"
});

}

const paciente={
id:Date.now(),
nombre,
edad
};

pacientes.push(paciente);

res.status(201)
.json(paciente);

});

router.put("/:id",(req,res)=>{

const id=
parseInt(req.params.id);

const index=
pacientes.findIndex(
p=>p.id===id
);

if(index===-1){

return res.status(404)
.json({
mensaje:"No encontrado"
});

}

pacientes[index]={
...pacientes[index],
...req.body
};

res.json(
pacientes[index]
);

});

router.delete("/:id",(req,res)=>{

pacientes=
pacientes.filter(
p=>
p.id!=req.params.id
);

res.sendStatus(204);

});

module.exports=router;
const router=
require("express").Router();

const multer=
require("multer");

const fs=
require("fs");

const auth=
require("../middleware/auth");

let archivos=[];

const storage=
multer.diskStorage({

destination:
"uploads/",

filename:(req,file,cb)=>{

const nombreLimpio =
Buffer
.from(
file.originalname,
"latin1"
)
.toString(
"utf8"
);

cb(
null,
Date.now()
+
"-"
+
nombreLimpio
);

}

});

const upload=
multer({

storage,

fileFilter:
(req,file,cb)=>{

if(
file.mimetype
!=="application/pdf"
){

return cb(
new Error(
"Solo PDF"
)
);

}

cb(null,true);

}

});

router.post(
"/upload",

auth,

upload.single(
"archivo"
),

(req,res)=>{

archivos.push(
req.file.filename
);

res.status(201)
.json({

mensaje:
"PDF subido"

});

}

);

router.get(
"/files",

auth,

(req,res)=>{

res.json(
archivos
);

}

);

module.exports=router;
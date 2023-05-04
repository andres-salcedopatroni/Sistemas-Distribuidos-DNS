var express = require('express');
var router = express.Router();
const dns=require('dns');

/* GET users listing. */
router.get('/dominio_ip4', function(req, res, next) {
    dns.lookup(req.query.dominio,4,
        (err,address,family)=>{
            res.json({"Dominio":req.query.dominio,"Direccion":address,"Protocolo":family});
        }
    );
});

router.get('/dominio_ip6', function(req, res, next) {
    dns.lookup(req.query.dominio,6,
        (err,address,family)=>{
            res.json({"Dominio":req.query.dominio,"Direccion":address,"Protocolo":family});
        }
    );
});

module.exports = router;

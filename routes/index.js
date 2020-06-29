var express = require('express');
var router = express.Router();
var soapcalculator = require('../services/soap-calculator')
var format = require('xml-formatter');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Calculadora SOAP'  }); 
  
})
/* POST home page. */
router.post('/',(req,res,next)=>{
  
  /*
  console.log(state);
  console.log("El codigo de estado es", estado);
  console.log("El resultado de la operacion en xml es",resXml)
  console.log(req.body)
  */
  const num2 = req.body['num2']
  const num1 =req.body['num1'];
  const oper = req.body['oper']
  
  const solve =soapcalculator.resolucion(num1,num2,oper).then((state)=>{
  var resXml = state[1];
  var estado= state[0]; 
  var reqXml=state[2];
  var respXml=state[3];
  //res.render('index', { title: 'Calculadora SOAP',cuerpo : 'Operacion suma', resultado :resXml  });
  respXml=format(respXml,{
    indentation: '\t', 
    filter: (node) => node.type !== 'Comment', 
    collapseContent: true, 
    lineSeparator: '\n'
})
  reqXml=format(reqXml,{
    indentation: '\t', 
    filter: (node) => node.type !== 'Comment', 
    collapseContent: true, 
    lineSeparator: '\n'
})
  res.send({'respuesta': resXml,'estado': estado,'reqXml':reqXml,'respXml':respXml})
  
}).catch((err)=>{console.log(err)});

  })

  module.exports = router;
  
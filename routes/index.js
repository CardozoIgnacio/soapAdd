var express = require('express');
var router = express.Router();
var soapcalculator = require('../services/soap-calculator')



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
  */
  const num2 = req.body['num2']
  const num1 =req.body['num1'];
  const solve =soapcalculator.resolucion(num1,num2).then((state)=>{
  var resXml = state[1];
  var estado= state[0]; 
  res.render('index', { title: 'Calculadora SOAP',cuerpo : 'Operacion suma', resultado :resXml  });
  
});

  })

  module.exports = router;
  
  
 const soapRequest = require('easy-soap-request');
 const fs = require('fs');
 const soap = {}
 const xml2js = require('xml2js')
 

// Setear url y los cabazales
 const url = 'http://www.dneonline.com/calculator.asmx ';
 const sampleHeaders = {
   'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0',
   'Content-Type': 'text/xml;charset=UTF-8',
   'soapAction': "http://tempuri.org/Add"

  };


//Genero una peticion asincrona hacia el servicio soap
const respuesta =  async (num1,num2) => {
    //Cargar el codigo XML de la suma
    var xml = fs.readFileSync('./path/soap/code.xml');
  
   //Remplazo las variables con los datos suministrados por la pagina
    xml =xml.toString().replace('?',num1)
    xml =xml.toString().replace('!',num2)
   
    //Realizo la peticion Soap
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); 
    const { headers, body, statusCode } = response;
 
    //Obtengo los resultados del la respuesta
    var parser = new xml2js.Parser();
    parser.parseString(body,(err,result)=>{
     
     //console.log(result['soap:Envelope']['soap:Body'][0]['AddResponse'][0]['AddResult']);
     solucion = result['soap:Envelope']['soap:Body'][0]['AddResponse'][0]['AddResult'][0]
     //console.log("Resuelto")
    })
   
    return [statusCode, solucion]
 };

 soap.resolucion=respuesta
 module.exports= soap
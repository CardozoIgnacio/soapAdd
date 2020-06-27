const soapRequest = require("easy-soap-request");
const fs = require("fs");
const soap = {};
const xml2js = require("xml2js");

const xmlEditor = require("./xmlResult");

// Setear url y los cabazales
const url = "http://www.dneonline.com/calculator.asmx ";
const sampleHeaders = {
  "user-agent":
    "Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0",
  "Content-Type": "text/xml;charset=UTF-8",
  // 'soapAction': "http://tempuri.org/Add"
};

//Genero una peticion asincrona hacia el servicio soap
const respuesta = async (num1, num2, oper) => {
  //Cargar el codigo XML de la suma
  var xml;
  switch (oper) {
    case "suma":
      xml = fs.readFileSync("./code/soap/codeadd.xml");
      break;
    case "resta":
      xml = fs.readFileSync("./code/soap/codeSub.xml");
      break;
    case "div":
      xml = fs.readFileSync("./code/soap/codeDiv.xml");
      break;
    case "mult":
      xml = fs.readFileSync("./code/soap/codeMul.xml");
      break;
    default:
      console.log("Error!!!");
      break;
  }

  //Remplazo las variables con los datos suministrados por la pagina
  xml = xml.toString().replace("?", num1);
  xml = xml.toString().replace("!", num2);

  //Realizo la peticion Soap
  const { response } = await soapRequest({
    url: url,
    headers: sampleHeaders,
    xml: xml,
    timeout: 1000,
  });
  const { headers, body, statusCode } = response;

  //console.log(body)
  var solucion;
  switch (oper) {
    case "suma":
      solucion = xmlEditor.addResult(body);
      break;
    case "resta":
      solucion = xmlEditor.subResult(body);
      break;
    case "div":
      solucion = xmlEditor.divResult(body);
      break;
    case "mult":
      solucion = xmlEditor.mulResult(body);
      break;
    default:
      console.log("Error!!!");
      break;
  }

  //Obtengo los resultados del la respuesta
  //Mejorar usando DOM
  /*
    var parser = new xml2js.Parser();
    parser.parseString(body,(err,result)=>{
       solucion = result['soap:Envelope']['soap:Body'][0]['AddResponse'][0]['AddResult'][0]
    })*/

  return [statusCode, solucion];
};

soap.resolucion = respuesta;
module.exports = soap;

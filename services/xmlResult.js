var  resultado= {};
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function parse(datoxml) {
    var domParse = new JSDOM(datoxml,{contentType:'text/xml'})
    return domParse.window.document
 }

const  sumaResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    return resultado=xmlDom.querySelector('AddResult').innerHTML
    
 }

 const  restaResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    return resultado=xmlDom.querySelector('SubtractResult').innerHTML
 }

const  divResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    return resultado=xmlDom.querySelector('DivideResult').innerHTML
 }

const  multResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    return resultado=xmlDom.querySelector('MultiplyResult').innerHTML
 }



 resultado.addResult=sumaResult
 resultado.subResult=restaResult
 resultado.divResult=divResult
 resultado.mulResult=multResult
module.exports=resultado
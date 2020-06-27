var  resultado= {};
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function parse(datoxml) {
    var domParse = new JSDOM(datoxml,{contentType:'text/xml'})
    return domParse.window.document
 }

const  sumaResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    resultado=xmlDom.querySelector('AddResult').innerHTML
 }

 const  restaResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    resultado=xmlDom.querySelector('AddResult').innerHTML
 }

const  divResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    resultado=xmlDom.querySelector('AddResult').innerHTML
 }

const  multResult= (datoXml)=>{
    var xmlDom=  parse(datoXml);
    resultado=xmlDom.querySelector('AddResult').innerHTML
 }



 resultado.addResult=sumaResult
module.exports=resultado
const solucionHtml = document.getElementById("solucion")
const num1Nodo= document.getElementById("num1")
const num2Nodo= document.getElementById("num2")
const operNodos= document.getElementsByName("oper")
const respuestas = document.getElementById("respuestas")

function resultado() {
    //Obtengo los datos del formulario
    let num1 = num1Nodo.value
    let num2 = num2Nodo.value
    let oper =""
    for (let i = 0; i <operNodos.length; i++) {
        let element = operNodos[i];
        if (element.checked=== true) {
            oper = element.value
        }
        
    }
    

    var formData = new FormData();
 
    
    formData.append('datos', num1);
    formData.append('num2', num2 );
    formData.append('oper', oper);
    
    
    fetch('/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {"num1" : num1,"num2" :num2,"oper": oper})
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        //console.log('Success:', response);
        //XML enviado al servidor
        var br= document.createElement("hr")
        respuestas.prepend(br)

        var requestXml = document.createElement("pre")
        var descReq= document.createElement("h2")
        var divreq = document.createElement("div")

        
        requestXml.innerText=response.reqXml
        //console.log(response.reqXml)
        descReq.innerText="Request enviada al servidor"
        
        divreq.prepend(requestXml)
        divreq.prepend(descReq)
        respuestas.prepend(divreq)

        //XMl resupesta del servidor
        var resupestaXml = document.createElement("pre")
        var descRes=document.createElement("h2")
        var divres = document.createElement("div")

        
        resupestaXml.innerText=response.respXml
        descRes.innerText="Respuesta enviada por el servidor"
        
        divres.prepend(resupestaXml)
        divres.prepend(descRes)
        respuestas.prepend(divres)
        
        num1Nodo.value="";
        num2Nodo.value="";
        
        
    });
       
}
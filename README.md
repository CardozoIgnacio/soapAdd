# Soap

## Implementacion de servicio Soap

Utilizando los servicios suministrados por http://www.dneonline.com/calculator.asmx

## Archivo WSDL

Descripcion de los servicios suministrados http://www.dneonline.com/calculator.asmx?WSDL

### Operación suma

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:Add>
         <tem:intA>? </tem:intA>
         <tem:intB>?</tem:intB>
      </tem:Add>
   </soapenv:Body>
</soapenv:Envelope>
```

### Operación division 

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:Divide>
         <tem:intA>?</tem:intA>
         <tem:intB>?</tem:intB>
      </tem:Divide>
   </soapenv:Body>
</soapenv:Envelope>
```

### Operación multiplicacion

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:Multiply>
         <tem:intA>?</tem:intA>
         <tem:intB>?</tem:intB>
      </tem:Multiply>
   </soapenv:Body>
</soapenv:Envelope>
```

### Operación resta 

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:Subtract>
         <tem:intA>?</tem:intA>
         <tem:intB>?</tem:intB>
      </tem:Subtract>
   </soapenv:Body>
</soapenv:Envelope>
```


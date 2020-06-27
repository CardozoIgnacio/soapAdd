<!--TOC--> 
# Soap

## Implementacion de servicio Soap

Utilizando los servicios suministrados por http://www.dneonline.com/calculator.asmx

## Archivo WSDL

Descripcion de los servicios suministrados http://www.dneonline.com/calculator.asmx?WSDL

### Pedidos

#### Operación suma

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

####  Operación division 

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

####  Operación multiplicacion

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

####  Operación resta 

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

### Respuestas

#### Respuesta suma

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <AddResponse xmlns="http://tempuri.org/">
         <AddResult>?</AddResult>
      </AddResponse>
   </soap:Body>
</soap:Envelope>
```

#### Respuesta division

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <DivideResponse xmlns="http://tempuri.org/">
         <DivideResult>?</DivideResult>
      </DivideResponse>
   </soap:Body>
</soap:Envelope>
```

#### Respuesta multiplicacion

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <MultiplyResponse xmlns="http://tempuri.org/">
         <MultiplyResult>?</MultiplyResult>
      </MultiplyResponse>
   </soap:Body>
</soap:Envelope>
```

#### Respuesta resta

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <SubtractResponse xmlns="http://tempuri.org/">
         <SubtractResult>?</SubtractResult>
      </SubtractResponse>
   </soap:Body>
</soap:Envelope>
```



    function MenuChoice()

{
if (document.getElementById("menu").value == "Click me to to add a customer to the customer table.")
{
document.getElementById("section1").style.visibility = "visible";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
section1();
}
else if (document.getElementById("menu").value == "Click me to change the Ship to address on a customer order.")
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "visible";
document.getElementById("section3").style.visibility = "hidden";
section2();
}

else if (document.getElementById("menu").value == "Click me to delete a customer from the database.")   
{ 
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "visible";
section3();
 }
 
else  
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";

}
}
 
function section1()

{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
//Collect Customer data from web page
var customerid = document.getElementById("CustID").value;
var customername = document.getElementById("CustName").value;
var customercity = document.getElementById("CustCity").value;
//Create the parameter string
var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity +'"}';
//Checking for AJAx operation return
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var result = JSON.parse(objRequest.responseText);
OperationResult(result);
}
}

//Start AJAX request
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(newcustomer);
}
function OperationResult(output)
{
if (output.WasSuccessful == 1)
{
document.getElementById("result").innerHTML = "The operation was successful!"
}
else
{
 
document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
}
}

 
function section2()
 {
    
 var objRequest = new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

 //collect customer data from the web page
 var ordernum = document.getElementById("ordernumber").value;
 var shipadd = document.getElementById("shippingaddress").value;
 var shippingcity = document.getElementById("shipcity").value;
 var shippingname = document.getElementById("shipname").value;
 var shippingcode = document.getElementById("shipcode").value;

 //Create the parameter string
 var updateaddress = '{"OrderID":"' + ordernum + '","ShipAddress":"' + shipadd + '","ShipCity":"' + shippingcity + '","ShipName":"' + shippingname + '","ShipPostcode":"' + shippingcode + '"}';
   
 // Checking for AJAX operation return and status
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status ==200)
 {
 var result2 = JSON.parse(objRequest.responseText);
 OperationResult2(result2);
 }
 }

 //Start AJAX request
 objRequest.open("POST", url, true);
 objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 objRequest.send(updateaddress);



 function OperationResult2(output2)
 {
   if (output2 == 1)

  
    
    {
 
        document.getElementById("result2").innerHTML = "The operation was successful!";
    }
    
   else if (output2 == 2)

    
    {
        
        document.getElementById("result2").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object";
    }
    
    else if (output2 == 3)

       
       {
           
           document.getElementById("result2").innerHTML = "Operation failed because a record with the supplied Order ID could not be found";
           
       }

 
    else 
    {
       document.getElementById("result2").innerHTML = "The operation failed with an unspecified error!";
    }
 
 }
 }
    
      
            function section3()
      {
      var objRequest = new XMLHttpRequest();
      var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
      url += document.getElementById("CustID3").value;
     
      
      //Checking for AJAx operation return
      objRequest.onreadystatechange = function()
      {
      if (objRequest.readyState == 4 && objRequest.status == 200)
      {
      var result = JSON.parse(objRequest.responseText);
     
      OperationResult3(result);
     
      }
     
      }
     
      //Start AJAX request
      objRequest.open("GET", url, true);
      objRequest.send();
     
      }
     
      function OperationResult3(output3)
     
      {
      if (output3.DeleteCustomerResult.WasSuccessful == 1)
      {
      document.getElementById("result3").innerHTML = "Customer was successfully deleted from the customer list.";
      }
      else
      {
      document.getElementById("result3").innerHTML = "The operation was not successful!";
      }
     
      }

 
 
        




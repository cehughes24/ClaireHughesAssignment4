
     
   
    function MenuChoice()

{
if (document.getElementById("menu").value == "Show me Customer Name, Customer ID, and City.")
{
document.getElementById("section1").style.visibility = "visible";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("Section3").style.visibility = "hidden";
section1();
}
else if (document.getElementById("menu").value == "Show me Product Names and Quantities ordered.")
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "visible";
document.getElementById("Section3").style.visibility = "hidden";
section2();
}

else if (document.getElementById("menu").value == "Show me Order Date, Order ID, Ship Address, Ship City, Ship Name, Ship Post Code, and Shipped Date.")   
{ 
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("Section3").style.visibility = "visible";
Section3();
 }
 
else  
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById ("Section3").style.visibility = "hidden";

}
}
   


 
 
 function section1()
 {
 var objRequest = new XMLHttpRequest() ; // Create AJAX request object

 // Create URL and Query string 
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";



 // Checks that the object has returned data 
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText) ;
 GenerateOutput(output) ; 
 }
 }

 //Initiate the server request 
 objRequest.open("GET", url, true) ;
 objRequest.send() ; 



 function GenerateOutput(result)
 {
 var count = 0 ;
 var displaytext = "<table><tr><th>Customer Name</th><th></th><th>Customer ID</th><th></th><th>City</th></tr>" ;

 //Loop to extract data from the response object
 for (count=0; count < result.GetAllCustomersResult.length; count++)
 {
 displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CompanyName + " </td><td>" + "</td><td> " + result.GetAllCustomersResult[count].CustomerID + " </td><td>" + "</td><td> " + result.GetAllCustomersResult[count].City + "</td></tr>"; 

 }


 displaytext += "</table>" ;
 document.getElementById("displaycustomerlist").innerHTML = displaytext; 

 }
 }



function section2()
 {
 var objRequest = new XMLHttpRequest() ; // Create AJAX request object

 // Create URL and Query string 
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
 url += document.getElementById("custid").value ;


 // Checks that the object has returned data 
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText) ;
 GenerateOutput(output) ; 
 }
 }

 //Initiate the server request 
 objRequest.open("GET", url, true) ;
 objRequest.send() ; 


 function GenerateOutput(result)
 {
 var count = 0 ;
 var displaytext = "<table><tr><th>Product Name</th><th></th><th>Quantities Ordered</th></tr>" ;

 //Loop to extract data from the response object
 for (count=0; count < result.length; count++)
 {
 displaytext += "<tr><td>"+ result[count].ProductName + " </td><td>" + "</td><td> " + result[count].Total + "</td></tr>" ;

 }


 displaytext += "</table>" ; 
 document.getElementById("section2display").innerHTML = displaytext; 

 }
 }


function Section3()
{

var objRequest = new XMLHttpRequest(); //Create AJAX request object
//Create URL and Query string
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
url += document.getElementById("custid").value;
//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var output = JSON.parse(objRequest.responseText);
GenerateOutput(output);
}
}
//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput(result)
{
var count = 0;
//var displaytext = "";
var displaytext = "<table><tr><th>Order Date</th><th></th><th>Order ID</th><th></th><th>Ship Address</th><th></th><th>Ship City</th><th></th><th>Ship Name</th><th></th><th>Ship Post Code</th><th></th><th>Shipped Date</th></tr>" ;

//Loop to extract data from the response object
for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
{
   // displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " + result.GetOrdersForCustomerResult[count].OrderID  + ", " + result.GetOrdersForCustomerResult[count].ShipAddress + ", " + result.GetOrdersForCustomerResult[count].ShipCity + ", " + result.GetOrdersForCustomerResult[count].ShipName + ", " + result.GetOrdersForCustomerResult[count].ShipPostcode + ", " + result.GetOrdersForCustomerResult[count].ShippedDate +"<br>";
//displaytext += "<tr><td>"+ result.GetOrdersForCustomerResult[count].OrderDate + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].OrderID   + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipAddress + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShipCity + " </td><td>" + "</td> <td>"+ result.GetOrdersForCustomerResult[count].ShipName " </td><td>" + "</td><td> " result.GetOrdersForCustomerResult[count].ShipPostcode + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShippedDate + " </td></tr>";

displaytext += "<tr><td>"+ result.GetOrdersForCustomerResult[count].OrderDate + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].OrderID   + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipAddress + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipCity + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipName + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipPostcode + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShippedDate + " </td></tr>"; 

}
displaytext += "</table>" ;
document.getElementById("orderdisplay").innerHTML = displaytext;

}
 
    
    
    
 

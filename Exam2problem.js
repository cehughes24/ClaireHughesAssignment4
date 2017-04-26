
        
        
        function MenuChoice()
        
        {
        if (document.getElementById("menu").value == "Click me to get all categories.")
        {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
        section1();
        }
        else if (document.getElementById("menu").value == "Click me to create a category.")
        {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
        section2();
        }
        
        else if (document.getElementById("menu").value == "Click me to update a category.")   
        { 
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
        section3();
         }
         else if (document.getElementById("menu").value == "Click me to delete a category.")   
        { 
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "visible";
        document.getElementById("section5").style.visibility = "hidden";
        section4();
         }
         else if (document.getElementById("menu").value == "Click me to see about the author.")   
        { 
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "visible";
        section5();
         }
         
        else  
        {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
        
        }
        }
         
         function section1()
         {
         var objRequest = new XMLHttpRequest() ; // Create AJAX request object
        
         // Create URL and Query string 
         var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";
        
        
        
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
         var displaytext = "<table><tr><th>Category ID</th><th></th><th>Category Name</th><th></th><th>Category Description </th></tr>" ;
        
         //Loop to extract data from the response object
         for (count=0; count < result.GetAllCategoriesResult.length; count++)
         {
         displaytext += "<tr><td>" + result.GetAllCategoriesResult[count].CID + " </td><td>" + "</td><td> " + result.GetAllCategoriesResult[count].CName + " </td><td>" + "</td><td> " + result.GetAllCategoriesResult[count].CDescription + "</td></tr>"; 
        
         }
        
        
         displaytext += "</table>"; 
         document.getElementById("section1").innerHTML = displaytext; 
        
         }
         }
        
         function section2()
        
        {
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
        //Collect Customer data from web page
        var catid = document.getElementById("CatID").value;
        var catdescrip = document.getElementById("CatDescrip").value;
        
        //Create the parameter string
        var newcategory = '{"CName":"' + catid + '","CDescription":"' + catdescrip +'"}';
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
        OperationResult2(result);
        }
        }
        
        //Start AJAX request
        objRequest.open("POST", url, true);
        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        objRequest.send(newcategory);
        }
        function OperationResult2(output)
        {
        if (output.WasSuccessful == 1)
        {
        document.getElementById("section2").innerHTML = "The operation was successful!"
        }
        else
        {
         
        document.getElementById("section2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
        }
        }
       
       
       function section3()
 {
    
 var objRequest = new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";

 //collect customer data from the web page
 var catname = document.getElementById("CatID3").value;
 var newcatname = document.getElementById("CatDescrip3").value;
 

 //Create the parameter string
 var updatedescip = '{"CID":"' + catname + '","CDescription":"' + newcatname +'"}';
   
 // Checking for AJAX operation return and status
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status ==200)
 {
 var result3 = JSON.parse(objRequest.responseText);
 OperationResult3(result3);
 }
 }

 //Start AJAX request
 objRequest.open("POST", url, true);
 objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 objRequest.send(updatedescip);
 }

   //function OperationResults3 ()
 function OperationResult3(result3)
 {
  // if (output3 == 1)
  if (result3.WasSuccessful ==1)

  
    
    {
 
        document.getElementById("result3").innerHTML = "The operation was successful!";
    }
    
   else if (result3 == -2)

    
    {
        
        document.getElementById("result3").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object";
    }
    
    else if (result3 == -3)

       
       {
           
           document.getElementById("result3").innerHTML = "Operation failed because a record with the supplied Order ID could not be found";
           
       }

 
    else 
    {
       document.getElementById("result3").innerHTML = "The operation failed with an unspecified error!";
    }
 
 }
 
                function section4()
            
             {
            window.confirm ("Are you sure you want to delete this category?");
                             
             var objRequest = new XMLHttpRequest();
             var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
             url += document.getElementById("CatID4").value;
            
             
             //Checking for AJAx operation return
             objRequest.onreadystatechange = function()
             {
             if (objRequest.readyState == 4 && objRequest.status == 200)
             {
             var result = JSON.parse(objRequest.responseText);
            
             OperationResult4(result);
            
             }
            
             }
             
            
             //Start AJAX request
             objRequest.open("GET", url, true);
             objRequest.send();
            
             }
            
             function OperationResult4(output4)
            
             {
             if (output4.DeleteCategoryResult.WasSuccessful == 1)
             {
             document.getElementById("result4").innerHTML = "Customer was successfully deleted from the customer list.";
             }
             else
             {
             document.getElementById("result4").innerHTML = "The operation was not successful!";
             }
            
             }
             
             
       
            function section5()
            {
               //hardcoded in the HTML.           
            }



function MonthPayment()

{

var LoanTerm = new Number(document.getElementById("LoanTerm").value);
var PercentRate = new Number(document.getElementById("PercentRate").value);
var Borrowed = new Number(document.getElementById("Borrowed").value);
var Rate;
var Answer1; 
var Answer2;
var Answer3;
var Answer4;
var RoundedMonthPaymentAnswer;

            //math for month payment
        Rate = PercentRate / 1200;
        Months = 12 * LoanTerm;
        Answer1 = Math.pow(1 + Rate,Months);
        Answer2 = Answer1 - 1;
        Answer3 = Rate / Answer2;
        Answer4 = Answer3 + Rate;
        MonthPayment = Answer4 * Borrowed;
        var RoundedMonthPaymentAnswer = MonthPayment.toFixed(2); //rounds month payment
   
        
        document.getElementById("MonthDisplay").innerHTML = RoundedMonthPaymentAnswer;  //display the month payment
        
           
      
       
       
    }
    
    function Table()
    
   
		
		{
        var result = "<table><tr><th>Monthly Payment</th><th>Interest</th><th>Principal</th><th>Balance</th></tr>";  //Create a table header       
        var LoanTerm = new Number(document.getElementById("LoanTerm").value);
        var PercentRate = new Number(document.getElementById("PercentRate").value);
        var Borrowed = new Number(document.getElementById("Borrowed").value);
        var Rate;
        var Answer1; 
        var Answer2;
        var Answer3;
        var Answer4;
        var MonthPayment;
        var Months;
        var Interest;
        var PaidPrincipal;
      
        
        
        
        //math to get month payment that is used for table calculations
        Rate = PercentRate / 1200;
        Months = 12 * LoanTerm;
        Answer1 = Math.pow(1 + Rate,Months);
        Answer2 = Answer1 - 1;
        Answer3 = Rate / Answer2;
        Answer4 = Answer3 + Rate;
        MonthPayment = Answer4 * Borrowed;
       
       
       
        
        //math loop for the table
       
        for(var j = 0; j < Months; j++){
	// 4 equations
            Interest = (Rate * Borrowed); // Automatically updated when the loop hits it 
            PaidPrincipal = MonthPayment - Interest; // Automatically updated when the loop hits it    
        //  Principal gives us remaining balance           
            Principal = Borrowed - PaidPrincipal;// Automatically updated when the loop hits it
            Borrowed = Principal;
            
	
                
            
            
			//Add this to the results table 
         result += "<tr><td>" + (j + 1) + "</td><td>" + Interest +  "</td><td>" + PaidPrincipal + "</td><td>"  + Principal + "</td></tr>";  //Create Table rows 		 
            
                   
                       
          
           
            
         
        } 
        
        	result += "</table>";
            document.getElementById("TableDisplay").innerHTML = result;
        }
   


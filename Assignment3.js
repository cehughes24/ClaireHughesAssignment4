
function NextDate() 
{
	//Date entered in first box [Date] 
    var startdate = new Date(document.getElementById("initialdate").value); //Get start Date from user 
	//Date entered in first box [String]
	var startdateS = new String(document.getElementById("initialdate").value); //Get start Date from user 
	//Days between meetings entered in second box [Number]
    var daystonext = Number(document.getElementById("meetinginterval").value); //number of days to next event
    
	//Regex for date validation
	var express = /(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/;
	
	//Checking for valid date, returns false if invalid, true if valid 
	if(express.test(startdateS) == false){
			//Alert user that date is invalid 
			window.alert("Not a valid date");
	//Otherwise perform calculations 
	} else{
		//calculate date for next meeting 
		calcdate = startdate.toDateString(startdate.setDate(startdate.getDate() + daystonext)); //Next date calculation 
		//Update label for new date 
		document.getElementById("daystillmeetingdisplay").innerHTML = calcdate;  //display the date in a label 
	}
}

    function CalculateNumbers() 
{ 
	//Amound of meetings, set in box 3 [Number]
    var numberstocalc = Number(document.getElementById("desiredmeetings").value);  //Collect the number of meetings to be calculated 
	//Table head for results 
    var result = "<table><tr><th>Meeting Date</th><th>Result</th></tr>";  //Create a table header 
	//Copy of start date in first box [Date]
	var startdate2 = new Date(document.getElementById("initialdate").value);
	//Copy of start date in frist box [String]
	var startdate2S = new String(document.getElementById("initialdate").value);
	//Copy of days between meeings in second box [Number]
	var daystonext2 = Number(document.getElementById("meetinginterval").value); //number of days to next event
	
	//Regex for date validation
	var express2 = /(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/;
	
	//Chacking for valid date, returns false if invalid, true if valid 
	if(express2.test(startdate2S) == false)
	{
		//Alert user if date is invalid
		window.alert("Not a valid date");
	//Otherwise perform calculations 
	} else{
		//Loop amound of times as entered in box 3
		for (var i = 0; i < numberstocalc; i++) 
		{ 
			//Add days between meetings to prev date to get updated date 
			startdate2.setDate(startdate2.getDate() + daystonext2);
			//Add this to the results table 
			result += "<tr><td>" + (i + 1) + "</td><td>" + startdate2 + "</td></tr>";  //Create Table rows 
		} 
			result += "</table>"; 
			document.getElementById("numberdisplay").innerHTML = result; 
	}
} 

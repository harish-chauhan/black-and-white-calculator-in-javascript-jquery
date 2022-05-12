const operators = ["+", "-","/","*","(",")","%","."];

function display(data){

		
	if(operators.includes(data)){
		
		let str = document.getElementById("result").value;

		if(operators.includes(str.charAt(str.length-1)))
		{
			let last_str = str.slice(0,-1);
			last_str+=data;
			document.getElementById("result").value =last_str;
		}
		else{
			document.getElementById("result").value += data;
		}

	}else{
	document.getElementById("result").value += data;}
}



function clearScreen(){

    document.getElementById("result").value = "";

}

function del() {
	var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}


function calculate(){
	var currentvalue =document.getElementById("result").value;
	var solvedvalue = eval(currentvalue);
	document.getElementById("result").value = solvedvalue;
}


window.onload = function() {
  document.getElementById("result").focus();
  document.getElementById("result").value = "";
}

 function getfocus(){
	document.getElementById("result").focus();
}

function isNumberKey(evt) {


    const charCode = (evt.which) ? evt.which : event.keyCode;
    if (( charCode > 57 || charCode < 40 ))
        return false;

	 if(operators.includes(evt.key)){
		var str1 = document.getElementById("result").value;
		
		if(operators.includes(str1.charAt(str1.length-1))){
			

			let last_str1 = str1.slice(0,-1);
			
			last_str1 += evt.key;
			document.getElementById("result").value = last_str1;
			return false
		}
		}
		
	return true;
	}

   

		


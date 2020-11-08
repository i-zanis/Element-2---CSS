//assigning regex values to a variable, use of const over let to prevent reassignment
const validationRe = { 
/*regex for international names, includes symbols such as a "-" and a 
space to separate the name from the surname*/
name: /[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, 
/*regex for wide range of international phone number including signs like + and () */
tel: /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/, 
/*regex for optimal email*/
email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ };

//function to check if the form is empty
function checkValue(obj, message) { 
	if (obj.value == "") { 
		alert(message); 
		obj.focus(); 
		return false; 
	} 
	return true; 
}

//function to test the regex in the forms
function testValue(obj, message, re) { 
	if (!re.test(obj.value)) { 
		alert(message); 
		obj.focus(); 
		return false; 
	} 
	return true; 
}

//function that assigns tha values from the form and validates
function validateForm() { 
	const form = document.forms.orderForm; 
	const name = form["form-name"]; 
	const address = form["form-address"]; 
	const tel = form["form-tel"]; 
	const email = form["form-email"]; 
	const message = form["form-message"];
	//checkValue to check for empty fields and entering corresponding messages as arguments
	if (!checkValue(name, "Please enter a name.")) 
		return false; 
	if (!checkValue(address, "Please enter a a postal address.")) 
		return false; 
	if (!checkValue(tel, "Please enter a telephone number.")) 
		return false; 
	if (!checkValue(email, "Please enter an email address.")) 
		return false; 
	if (!checkValue(message, "Please enter a message.")) 
		return false;
	//testValue to check for invalid entries
	if (!testValue(name, "This is not a valid name.", validationRe.name)) { 
		return false; 
	}
	if (!testValue(tel, "This is not a valid telephone number.", validationRe.tel) ) { 
		return false; 
	}
	if (!testValue(email, "This is not a valid email address.", validationRe.email) ) { 
		return false; 
	} 
}



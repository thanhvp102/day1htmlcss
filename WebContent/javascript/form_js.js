function test() {
	var file = document.getElementById('file').files[0];
	var image = document.getElementById("image");
	image.src = "image/"+file.name;
}
function isCheckNull() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	if (first_name == "" && last_name == "") {
		alert("empty first name last name");
		return false;
	}else if(first_name == "" ||first_name.length<3){
		alert("empty first name or first name >=3 ");
		return false;
	}else if(last_name==""|| last_name.length<3){
		alert("empty last name  last name >=3");
		return false;
	}
	return true;
//	var male=document.getElementById("male");
//	var female=document.getElementById("female");
//	var bybike=document.getElementById("bybike");
//	var bycar=document.getElementById("bycar");
//	if(male.checked==false && female.check==false){
//		alert("check male || female");
//	}	
}
function isCheckPhone(){
	var phone=document.getElementById("phone_number1").value +
	document.getElementById("phone_number2").value +
	document.getElementById("phone_number3").value;
	if(phone.length=="10"){
		for( i=0; i< phone.length;i++){
			if(phone.charAt(i) < "0" || phone.charAt(i) > "9" ){
				alert("please input number");
				break;
				return false;
			}
		}
	}else{
		alert("input 10 number phone");
		return false;
	}
	return true;
			
}

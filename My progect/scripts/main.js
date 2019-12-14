function plus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1+num2;
    document.getElementById('out').innerHTML = result;
}


function minus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	result = num1-num2;
    document.getElementById('out').innerHTML = result;
}

document.getElementById("ref").addEventListener("click",type);
function type() {
alert("script");
}
document.querySelector("#ged").addEventListener("click",point);
function point() {
alert("computer");
}
document.getElementById(elementld:"body").addEventListener(type:"click",displayDate);
function displayDate() {
}
function isEmail(){
 var str = document.getElementById("web").value;
 var status = document.getElementById("red");
 var re = /#!$%&’*+-/=?^_`{}|~@/i;
 if (re.test(str)) status.innerHTML = "Адрес правильный";
 else status.innerHTML = "Адрес неверный";
 if(isEmail(str)) status.innerHTML = "Поле пустое";
 }

 function colorChange()
 {
     document.getElementsByClassName("1")[0].style.backgroundColor = '#b518b0';
 }


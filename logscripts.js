var tryAgain = document.querySelector('.tryagn');
tryAgain.style.display = "none";

var tryAgainBtn = document.querySelector('#tryagainbtn');
var loginBtn = document.querySelector('#loginid');
var loginForm = document.querySelector(".loginform");

var unameField = document.querySelector("#userid");
var passField = document.querySelector("#passcode");

//links
var homepage="home.html";

var left=3;

//prevent default behavior and restrist from refreshing
loginForm.addEventListener('submit', function(e){
	e.preventDefault();
})

function validateLogin() {

	if (unameField.value=="Shubham" && passField.value=="india") {
		alert("you are successfully logged in");
		window.location.href=homepage;
	}
	else
	{
		tryAgain.style.display="block";
		loginBtn.disabled=true;
		loginBtn.style.color="pink";
	}
}

function dismissTryagn()
{
	tryAgain.style.display="none";
	tryAgainBtn.style.background="red";
	loginBtn.disabled=false;
	passField.style.borderColor = 'red';
	unameField.style.borderColor = 'red';
	passField.style.borderRadius ="5px";
	unameField.style.borderRadius ="5px";
	if(left==3)
	{
		attemptNum();
	}
	else if(left>=1)
	{
		attemptNumupdated();
	}
	else
	{
		attemptNumupdated();
		loginBtn.disabled=true;
		alert("your account is locked for 30min. Please, try later.");
	}
	left=left-1;
}

loginBtn.addEventListener('click', validateLogin);
tryAgainBtn.addEventListener('click', dismissTryagn);

var node = document.createTextNode("Attempt left: "+left);

function attemptNum(){
	var attempt = document.createElement("p");
	attempt.appendChild(node);
	var element = document.querySelector("section");
	element.appendChild(attempt);
}

function attemptNumupdated(){
	var attemptnew = document.querySelector("p");
	var nodeupdate = document.createTextNode("Attempt left: " + left);
	attemptnew.replaceChild(nodeupdate,node);
	node=nodeupdate;
}

var accept = document.querySelector("#accept-btn");
var reject = document.querySelector("#reject-btn");
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let message=document.getElementById("message").value.trim();

    let result=document.getElementById("result");

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name==="" || email==="" || message===""){
        result.style.color="red";
        result.innerHTML="Please fill all fields.";
        return;
    }

    if(!emailPattern.test(email)){
        result.style.color="red";
        result.innerHTML="Invalid Email Address.";
        return;
    }

    result.style.color="green";
    result.innerHTML="Form Submitted Successfully!";

    document.getElementById("contactForm").reset();

});

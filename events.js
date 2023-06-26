function show(){
    var x= document.getElementById("fname").value;
    if(x.length <= 8){
    document.getElementById("fnameresult").innerHTML ="please enter atleast 8 characters"
    document.getElementById("fnameresult").style.color= "red"
    }
    else{
        alert("First name has taken")
    }

    var y=document.getElementById("sname").value;
    if(y.length == 3){
        alert("Second name has taken")
    }
    else{
         document.getElementById("snameresult").innerHTML="please enter atleast 4 characters"
        document.getElementById("snameresult").style.color="red"
    }
       
    

    var z=document.getElementById("phoneno").value;
    if(z.length ==10){
        alert("phone number has verified");
    }
    else{
        document.getElementById("phoneresult").innerHTML="your phone number is invalid"
        document.getElementById("phoneresult").style.color="red"
        
    }

    var a=document.getElementById("email").value;
    if(a.search("@, .com")){
        alert("email verified")
    }
    else{
        document.getElementById("emailresult").innerHTML="ok"
        document.getElementById("emailresult").style.color="red"
    }

    var b=document.getElementById("passcode").value;
    if(b.length >= 10){
        alert("passcode has taken");
    }
    else{
        document.getElementById("passcoderesult").innerHTML="your passcode has not strong"
        document.getElementById("passcoderesult").style.color="red"
        
    }



}

// function show(){
   
function Generate(){

 var ran= document.getElementById("ranNum").innerHTML= Math.floor((Math.random() * 1000000) + 1);
 document.getElementById("timeOut").innerHTML="Refreshing the page in 5 sec..";
 window.localStorage.setItem('name', ran);
    
 
}

window.setTimeout(myfunction,5000); 

function myfunction()
{    
       document.getElementById("mainDiv").style.display="none";
       
       var x=document.createElement("H1");
       var t=document.createTextNode("Guess The Number");
       x.appendChild(t);
       document.getElementById("newHeading").appendChild(x);

       var y=document.createElement("INPUT");
       y.setAttribute("type","text");
       document.getElementById("input").appendChild(y);
       
       
       var a=document.createElement("BUTTON");
       var b= document.createTextNode("Guess");
       a.appendChild(b);
       document.getElementById("guess").appendChild(a);
      
       
       
       var c=document.createElement("BUTTON");
       var d= document.createTextNode("Replay");
       c.appendChild(d);
       document.getElementById("replay").appendChild(c);
       c.addEventListener("click",function(){
           document.getElementById("newDiv").style.display="none";
           document.getElementById("mainDiv").style.display="block";
        })
        
        a.addEventListener('click',function(){
            var UserInput=document.querySelector('input[type="text"]').value;
            if(!UserInput)
            window.alert("Guess a Number");
            else{
             
                    var randomNumber= window.localStorage.getItem('name');
                    var match = 0;
                    var freq = new Array(10).fill(0);
                    while(randomNumber > 0) {
                        var digit = randomNumber % 10;
                        freq[digit]++;
                        randomNumber = Math.floor(randomNumber/10);
                    }
                    while(UserInput > 0) {
                        var userDigit = UserInput % 10;
                        if(freq[userDigit]) {
                            match++;
                            freq[userDigit]--;
                        }
                        UserInput = Math.floor(UserInput/10);
                    }
                    var s=document.createElement("H2");
                    var u=document.createTextNode(match +" "+ "Correct Guess");
                    
                    s.appendChild(u);
                    document.getElementById("newDiv").appendChild(s);
             
                
                }
           });
}

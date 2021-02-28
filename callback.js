function countdown(sec,elem)
    {
        var element=document.getElementById(elem);
        element.innerHTML="please wait for "+sec+" seconds"
        if(sec<1){
            //clearTimeout(timer);
            element.innerHTML='<h2>happy independence day</h2>';
            
            
        }
        
       
        sec--;
        var timer=setTimeout('countdown('+sec+',"'+elem+'")',1000);
    }
    countdown(10,)
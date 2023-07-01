
const output =document.getElementById("output");
 const secondscr = document.getElementById("secondout");
function Valid(pre,ele){

if((ele=='+' || ele=='-' || ele=='*' || ele=='/') && (pre=='+' || pre=='-' || pre=='*' || pre=='/')){
    return false;
}
return true;

}

let counter=0;
let pre=0;
function handelclick(ele){
     if(ele == "c"){
        output.innerHTML="0";
        secondscr.innerHTML="";
        counter=0;
        return;
    }

    else if(ele=="ce"){
        output.innerHTML="0";
        counter=0;
    }
    else if(ele == "del"){  
        
        output.innerHTML= output.innerHTML.slice(0,-1);
         if(output.innerHTML.length==0){
            output.innerHTML="0";
        }
       
        counter--;
    }

    else if(ele=="cube"){
        let key = eval(output.innerHTML);
        secondscr.innerHTML = Math.pow(key,3);

        output.innerHTML="0";
        
    }
    else if(ele=="equal"){   

        secondscr.innerHTML = eval(output.innerHTML);
        output.innerHTML="0";
        counter=0;
    }

    else if(ele=="sequre"){
        let key = eval(output.innerHTML);
        secondscr.innerHTML = key * key;

        output.innerHTML="0";

    }
    else if(ele=="root"){
        let key = eval(output.innerHTML);
        secondscr.innerHTML = Math.sqrt(key);

        output.innerHTML="0";

    }
    else if(ele=="fraction"){
        let key = eval(1/output.innerHTML);
        secondscr.innerHTML = key

        output.innerHTML="0";

    }
    else if(ele=="factorial"){
    let key = eval(output.innerHTML);
       let ans=1;
       for(; key>= 1 ; key-- ){
            ans = ans*key;

       }
        secondscr.innerHTML=ans;
        output.innerHTML="0";

    }
   
   else{
    if(output.innerHTML==0){
        output.innerHTML="";
    }
   
    if (counter == 0 && (ele=='+' || ele=='-' || ele=='*' || ele=='/')){
        output.innerHTML='0';
        return;
    }
  

    if(Valid(pre,ele)){
    output.innerHTML+= ele;
     pre=ele;
    counter++;
    }
      
    else{
        output.innerHTML= output.innerHTML.slice(0,-1);
        output.innerHTML+=ele;
        pre=ele;
    }
    
}

}
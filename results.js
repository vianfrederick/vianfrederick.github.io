var seconds2 = parseInt(localStorage.getItem("SECONDS"));
var milliSeconds3 = parseInt(localStorage.getItem("MILLISECONDS"));
document.querySelector(".container3").innerHTML="Your time is " + seconds2 +':'+ milliSeconds3;

var ele=seconds2 +'.'+ milliSeconds3;

var counter=getCookie('count');

if (!counter)
{
	counter=0;
}
counter=parseInt(counter) + 1
document.cookie = "user" + counter + "=" + ele;
document.cookie = "count="+counter;

var s=document.cookie;
//alert(document.cookie);//

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}




































/*
var TOP = parseInt(localStorage.getItem("top"));
var RUNNER = parseInt(localStorage.getItem("runner"));
var THIRD = parseInt(localStorage.getItem("third"));
var FOURTH = parseInt(localStorage.getItem("fourth"));
var FIFTH = parseInt(localStorage.getItem("fifth"));

if (Nettime >= TOP){

   localStorage.setItem("top", Nettime);
}
else{
  if(Nettime >= RUNNER ){
    localStorage.setItem("runner", Nettime);
  }
  else{
    if(Nettime >= THIRD){
      localStorage.setItem("third", Nettime);
    }
    else{
      if(Nettime >=FOURTH){
        localStorage.setItem("fourth",Nettime);
      }
      else{
        localStorage.setItem("fifth",Nettime);
      }
    }
  }
}*/

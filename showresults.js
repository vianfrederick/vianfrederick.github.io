document.querySelector(".container4").innerHTML = "Your best scores ";

var x=document.cookie;
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
var arrayofelements=[];
for(var i = 0; i <ca.length; i++)
{
	var c=ca[i];
	var ind=c.indexOf('=');
	if (c.indexOf('count') == 0)
	{

	}
	else
	{
		arrayofelements.push(c.substring(ind + 1, c.length))
	}
}
arrayofelements.pop()
arrayofelements.sort()
//alert(arrayofelements)//

var l=arrayofelements.length;

/*if (l<5)
{
	for(var j=0;j<arrayofelements.length;j++)
	{
		var newelement=arrayofelements[j];
		print(var)
	}
}
else
{
	for(var j=0;j<5;j++)
	{
		var newelement=arrayofelements[j];
		print(var)
	}
}*/

var arrayInUse =[];
for(var k=0; k<l; k++){
     arrayInUse.push(parseFloat(arrayofelements[k]));
}

arrayInUse.sort(function(a,b) {return a - b});

switch (arrayInUse.length) {
	case 1: document.querySelector(".tops").innerHTML = arrayInUse[0];
	       break;

	case 2:document.querySelector(".tops").innerHTML = arrayInUse[0];
	       document.querySelector(".runners").innerHTML = arrayInUse[1];
				 break;

 case 3 : document.querySelector(".tops").innerHTML = arrayInUse[0];
          document.querySelector(".runners").innerHTML = arrayInUse[1];
					document.querySelector(".thirds").innerHTML = arrayInUse[2];
					break;

case 4:  document.querySelector(".tops").innerHTML = arrayInUse[0];
         document.querySelector(".runners").innerHTML = arrayInUse[1];
				 document.querySelector(".thirds").innerHTML = arrayInUse[2];
				 document.querySelector(".fourths").innerHTML = arrayInUse[3];
				 break;

case 5: document.querySelector(".tops").innerHTML = arrayInUse[0];
        document.querySelector(".runners").innerHTML = arrayInUse[1];
				document.querySelector(".thirds").innerHTML = arrayInUse[2];
				document.querySelector(".fourths").innerHTML = arrayInUse[3];
				document.querySelector(".fifths").innerHTML = arrayInUse[4];
        break;

	default:  document.querySelector(".tops").innerHTML = arrayInUse[0];
	        document.querySelector(".runners").innerHTML = arrayInUse[1];
					document.querySelector(".thirds").innerHTML = arrayInUse[2];
					document.querySelector(".fourths").innerHTML = arrayInUse[3];
					document.querySelector(".fifths").innerHTML = arrayInUse[4];


}

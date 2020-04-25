var milliSeconds=0;
var count61=0;
var seconds=0;
var nettime;
var timeStatus = "stopped";
var interval;
var count=0;
var count1=0;
var key=1;
var finalButton;
var initialButton;
var count3 = 0;
var key1 =21;
var count4=0;
var count5=0;
function stopWatch() {
  milliSeconds++;
  if(milliSeconds/1000 ==1){
    milliSeconds=0;
    seconds++;
  }
  document.querySelector("h2").innerHTML = seconds +':'+ milliSeconds;
  localStorage.setItem("SECONDS", seconds);
  localStorage.setItem("MILLISECONDS", milliSeconds);
  nettime = (seconds*1000) + milliSeconds;
  localStorage.setItem("NETTIME", nettime);
}

function checkCorrectButton(buttonNumber){
if(buttonNumber <20){
buttonNumber=buttonNumber+1;

  document.querySelectorAll("button")[buttonNumber-1].addEventListener("click", changeButton);
   key=key+1;
}
  else{

    if (count3 >= 20)
    {
      if(buttonNumber == 21){
        document.querySelector("button").style.visibility = "hidden";
        document.querySelectorAll("button")[1].addEventListener("click", secondRound);
      count4 = document.querySelectorAll("button")[1].innerHTML;}

      else{
    buttonNumber = buttonNumber - 20;
    buttonNumber=buttonNumber+1;
    document.querySelectorAll("button")[buttonNumber-3].style.visibility ="hidden";
    document.querySelectorAll("button")[buttonNumber-2].addEventListener("click", secondRound);
  count4 = document.querySelectorAll("button")[buttonNumber-2].innerHTML;}
}
}
  }



function changeButton(){

initialButton = parseInt(this.innerHTML);
if(initialButton <= 20){
count3 = count3 + 1;
  finalButton = initialButton + 20;
  this.innerHTML = finalButton;
if(key<20){
  checkCorrectButton(key);}
  }
  if(initialButton == 21)
  {if(count3>=20){
    checkCorrectButton(key1);}
  }


}

function secondRound(){
count4 = parseInt(count4);
count4 = count4 + 1;

if(count4 == 41){
  count5 = 40;
  document.querySelectorAll("button")[19].style.visibility = "hidden";
  clearInterval(interval);
  displayResults();
}

if (count4 <=40){
checkCorrectButton(count4);}
}
//document.querySelector("button").addEventListener("click", startTime);


document.querySelector("button").addEventListener("click", changeButton);
document.querySelector(".results2").addEventListener("click",localStorage.setItem("count6", count61));



function startStopTime(startOrStop)
{

  startOrStop = parseInt(startOrStop);
  count1++;
  if(startOrStop == 1){
    if(count1 == 1){
    interval = setInterval(stopWatch,1);}
  }
  if (startOrStop == 40){

      if(count5 == 40){clearInterval(interval);}

  }

}

function displayResults(){

  setTimeout(function(){
  window.location.replace("Results.html");
}, 100);
}

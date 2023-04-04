

var count = 0;
var quiznav = document.querySelector('.quizgo');
var quesentry = document.querySelector('.form-items');
quiznav.hidden= true;
function clickFunc() {
  count += 1;
  
  var click = document.getElementById('clicks').innerHTML = count;
  var btn = document.querySelector('.btn');
  
  
  if (count==3){
    btn.textContent= 'SUMBIT';
    
  }
  if(count > 3) { // placed inside the click function
    btn.disabled = true;
    quiznav.hidden= false;
    
    
  }
}


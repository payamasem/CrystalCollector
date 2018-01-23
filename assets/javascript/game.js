$(document).ready(function(){
  
  var Random = Math.floor(Math.random()*101+19)
  // Random number to get (between 19-20)//
  
  $('#randomNumber').text(Random);
  // random number //
 
  var number1 = Math.floor(Math.random()*11+1)
  var number2 = Math.floor(Math.random()*11+1)
  var number3 = Math.floor(Math.random()*11+1)
  var number4 = Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel //
  // Random number has to be between 1 - 12 //
  

  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
 
  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//RESET NUMBER FUNCTION//
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*11+1);
      number2= Math.floor(Math.random()*11+1);
      number3= Math.floor(Math.random()*11+1);
      number4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 


// WIN FUNCTION //
function winner(){
alert("You're a winner! Keep playing!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}



// LOSE FUNCTION //
function loser(){
alert ("You're a loser! Try again!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}


// sets up click for blue jewel //
  $('#blue').on('click', function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      //if or else event//
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  

//sets up click for green jewel//
  $('#green').on('click', function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      //if or else event//
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  

//sets up click for red jewel//
  $('#red').on('click', function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
        //if or else event//
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })

//sets up click for yellow jewel//
  $('#yellow').on('click', function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        //if or else event//
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }


  });   
}); 
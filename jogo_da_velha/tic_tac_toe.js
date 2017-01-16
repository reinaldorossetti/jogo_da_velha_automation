moviment = "X";
var isFirefox = typeof InstallTrigger !== 'undefined';// Firefox 1.0+
countX = '0';
countY = '0';
ce11 = '', ce12 = '', ce13 = '',ce21 = '', ce22 = '', ce23 = '', ce31 = '', ce32 = '', ce33 = '';

function move(cell){
  
  if (isFirefox === true){
    var cellClicked = document.getElementById(cell).textContent;
  }
  else{
    var cellClicked = document.getElementById(cell).innerText;
  }
  if (cellClicked == "X" || cellClicked == "O"){
    alert("Oops, this box has been selected!");
  }
  else{

    // bug fix in firefox with textContent
    var elem = document.getElementById(cell);
    elem.innerText = moviment;
    elem.textContent = moviment;

    // bug fix in winner wrong.
    test_winner = moviment

    if (moviment == "X"){
      moviment = "O";
      elem.style.color = "Red";
    }else{
      moviment = "X";
      elem.style.color = "Blue";
    }
    getWinner();
  }
}

function getWinner(){

  getElementById();

  if (((ce11 !== '') && (ce12 !== '') && (ce13 !== '') && (ce11 == ce12) && (ce12 == ce13)) ||
    ((ce11 !== '') && (ce22 !== '') && (ce33 !== '') && (ce11 == ce22) && (ce22 == ce33)) ||
    ((ce11 !== '') && (ce21 !== '') && (ce31 !== '') && (ce11 == ce21) && (ce21 == ce31)) ||
    ((ce21 !== '') && (ce22 !== '') && (ce23 !== '') && (ce21 == ce22) && (ce22 == ce23)) ||
    ((ce31 !== '') && (ce32 !== '') && (ce33 !== '') && (ce31 == ce32) && (ce32 == ce33)) ||
    ((ce12 !== '') && (ce22 !== '') && (ce32 !== '') && (ce12 == ce22) && (ce22 == ce32)) ||
    ((ce13 !== '') && (ce23 !== '') && (ce33 !== '') && (ce13 == ce23) && (ce23 == ce33)) ||
    ((ce31 !== '') && (ce22 !== '') && (ce13 !== '') && (ce31 == ce22) && (ce22 == ce13))){
      // fix winner change variable moviment to test_winner
      alert("The winner is '" + test_winner + "'");
    if (test_winner == "X"){
      countX++;
    }else{
      countY++;
    }
          playAgain();
    }
  else {
    if (ce11 != '' && ce12 != '' && ce13 != '' &&
      ce21 != '' && ce22 != '' && ce23 != '' &&
      ce31 != '' && ce32 != '' && ce33 != ''){
        alert("There wasn't winner");
        playAgain();
    }
  }
}
// function playAgain empty elements
function playAgain(){
  for (var i=1; i<=3; i++){
    for (var j=1; j<=3; j++){
      celName = 'c' + i + j
      if (isFirefox === true){
      document.getElementById(celName).textContent = '';
      }
      else{
      document.getElementById(celName).innerText = '';
    }
    }
  }
  alert("New Game! score X: "+ countX + " score O: "+  countY);
  moviment = "X";
}

// function playAgain empty elements and reset score
function resetScore(){
  countX = 0
  countY = 0
  for (var i=1; i<=3; i++){
    for (var j=1; j<=3; j++){
      celName = 'c' + i + j
      if (isFirefox === true){
      document.getElementById(celName).textContent = '';
      }
      else{
      document.getElementById(celName).innerText = '';
    }
    }
  }
  alert("New Game! score X: "+ countX + " score O: "+  countY);
  moviment = "X";
}

function getElementById(){

  if (isFirefox === true){
      ce11 = document.getElementById('c11').textContent;
      ce12 = document.getElementById('c12').textContent;
      ce13 = document.getElementById('c13').textContent;
      ce21 = document.getElementById('c21').textContent;
      ce22 = document.getElementById('c22').textContent;
      ce23 = document.getElementById('c23').textContent;
      ce31 = document.getElementById('c31').textContent;
      ce32 = document.getElementById('c32').textContent;
      ce33 = document.getElementById('c33').textContent;
  }
  else{
      ce11 = document.getElementById('c11').innerText;
      ce12 = document.getElementById('c12').innerText;
      ce13 = document.getElementById('c13').innerText;
      ce21 = document.getElementById('c21').innerText;
      ce22 = document.getElementById('c22').innerText;
      ce23 = document.getElementById('c23').innerText;
      ce31 = document.getElementById('c31').innerText;
      ce32 = document.getElementById('c32').innerText;
      ce33 = document.getElementById('c33').innerText;
    }


}
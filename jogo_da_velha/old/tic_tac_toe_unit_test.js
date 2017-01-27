moviment = "X";
var isFirefox = typeof InstallTrigger !== 'undefined';// Firefox 1.0+
countX = '0';
countY = '0';
player = ''
test_winner = ''
cellClicked =''
window.getWinner = {
  test: function (ce11,ce12,ce13,ce21,ce22,ce23,ce31,ce32,ce33,player){
    test_winner = player
    //getElementById()

    if (((ce11 !== '') && (ce12 !== '') && (ce13 !== '') && (ce11 == ce12) && (ce12 == ce13)) ||
      ((ce11 !== '') && (ce22 !== '') && (ce33 !== '') && (ce11 == ce22) && (ce22 == ce33)) ||
      ((ce11 !== '') && (ce21 !== '') && (ce31 !== '') && (ce11 == ce21) && (ce21 == ce31)) ||
      ((ce21 !== '') && (ce22 !== '') && (ce23 !== '') && (ce21 == ce22) && (ce22 == ce23)) ||
      ((ce31 !== '') && (ce32 !== '') && (ce33 !== '') && (ce31 == ce32) && (ce32 == ce33)) ||
      ((ce12 !== '') && (ce22 !== '') && (ce32 !== '') && (ce12 == ce22) && (ce22 == ce32)) ||
      ((ce13 !== '') && (ce23 !== '') && (ce33 !== '') && (ce13 == ce23) && (ce23 == ce33)) ||
      ((ce31 !== '') && (ce22 !== '') && (ce13 !== '') && (ce31 == ce22) && (ce22 == ce13))){
          // fix winner change variable moviment to test_winner
          alert = ("The winner is: " + test_winner);
          console.log(alert)
      if (test_winner == "X"){
        countX++;
      }else{
        countY++;
      }
            return alert
      }


    else {
      if (ce11 != '' && ce12 != '' && ce13 != '' &&
        ce21 != '' && ce22 != '' && ce23 != '' &&
        ce31 != '' && ce32 != '' && ce33 != ''){
        alert = ("There wasn't winner");
        return alert
      }
      else{
          alert = ("Continue game!");
          return alert
     }
    }
  }
  }

window.getMove = {
  move: function (moviment, Content, isFirefox){

  if (isFirefox === true){
    var cellClicked = Content;
  }
  else{
    var cellClicked = Content;
  }
  if (cellClicked == "X" || cellClicked == "O"){
    msg = ("Oops, this box has been selected!");
    return msg
  }
  else{

    // bug fix in firefox with textContent
    //var elem = document.getElementById(cell);
    //elem.innerText = moviment;
    //elem.textContent = moviment;

    // bug fix in winner wrong.
    test_winner = moviment

    if (moviment == "X"){
      moviment = "O";
    }else{
      moviment = "X";
    }
    return moviment
  }
}}
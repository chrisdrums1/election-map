var newPolitician = function(name, partyColor){
  var politician = {};

  politician.name = name;

  politician.partyColor = partyColor;

  politician.electionResults = null;

  politician.voteTotals = 0;

  politician.tallyVotes = function(){
    this.voteTotals = 0
    for (var i = 0; i < this.electionResults.length; i++){
      this.voteTotals = this.voteTotals + this.electionResults[i];
    }
  }

  return politician;

};

var politician1 = newPolitician("Mike McGee", [132, 17, 11]);

var politician2 = newPolitician("Nancy New", [245, 141, 136]);

politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

politician1.electionResults[9] = 1;
politician2.electionResults[9] = 28;
politician1.electionResults[4] = 17;
politician2.electionResults[4] = 38;
politician1.electionResults[43] = 11;
politician2.electionResults[43] = 27;

politician1.tallyVotes();
politician2.tallyVotes();

var winner;
  if (politician1.voteTotals < politician2.voteTotals){
    winner = politician2.name;
  }
  else if (politician1.voteTotals > politician2.voteTotals){
    winner = politician1.name;
  }
  else {
    winner = "Draw";
};

var countryTable = document.getElementById('countryResults');

countryTable.children[0].children[0].children[0].innerText = politician1.name;
countryTable.children[0].children[0].children[1].innerText = politician1.voteTotals;
countryTable.children[0].children[0].children[2].innerText = politician2.name;
countryTable.children[0].children[0].children[3].innerText = politician2.voteTotals;
countryTable.children[0].children[0].children[4].innerText = "WINNER";
countryTable.children[0].children[0].children[5].innerText = winner;

var statesTable = document.getElementById('stateResults');

var statesTableHeader = statesTable.children[0].children[0];
var stateName = statesTableHeader.children[0];
var stateShort = statesTableHeader.children[1];

var statesTableBody = statesTable.children[1];
var name1 = statesTableBody.children[0].children[0];
var result1 = statesTableBody.children[0].children[1];
var name2 = statesTableBody.children[1].children[0];
var result2 = statesTableBody.children[1].children[1];
var winnerText = statesTableBody.children[2].children[0];
var winnerName = statesTableBody.children[2].children[1];

result1.innerText = null;
result2.innerText = null;
winnerName.innerText = null;
stateName.innerText = null;
stateShort.innerText = null;

name1.innerText = politician1.name;
name2.innerText = politician2.name;

var setStateResults = function(state){
    theStates[state].winner = null;
    if (politician1.electionResults[state] < politician2.electionResults[state]){
      theStates[state].winner = politician2;
    }
    else if (politician1.electionResults[state] > politician2.electionResults[state]){
      theStates[state].winner = politician1;
    }
  var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
        winnerName.innerText = theStates[state].winner.name;
    } else {
        theStates[state].rgbColor = [11,32,57];
        winnerName.innerText = "Draw";
    }
  stateName.innerText = theStates[state].nameFull;
  stateShort.innerText = theStates[state].nameAbbrev;
  result1.innerText = politician1.electionResults[state];
  result2.innerText = politician2.electionResults[state];
 };

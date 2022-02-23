const url = "https://raw.githubusercontent.com/Jdaoudd/NFL-Teams/main/NFL%20Teams.csv"
//accessed from code.org

const urlConference = getColumn(url, 1);
const urlDivision = getColumn(url, 2);
const urlTeam = getColumn(url, 3);
const urlCity = getColumn(url, 4);
const urlStadium = getColumn(url, 5);
const urlCapacity = getColumn(url, 6);
const urlCoach = getColumn(url, 7);
const urlImage = getColumn(url, 8);

//This function has the user enter what state they live in, and then the code will display the closest team to them, based on the chosen state. If there are no teams in the chosen states the program would return "There are not any teams in this state"

//selectedState {string} - Whatever state the user types in, the program would return the team in that state

//return {list} - All NFL teams in the selected state

function getState(selectedState){
  selectedState=selectedState.toLowerCase();
  var teams = [];
  for(var i in urlCity){
    if (urlCity[i].toLowerCase().includes(selectedState)){
      teams.push(urlTeam[i]);
    }
    }
  if (teams.length > 0){
    return teams;

  }
else{
  return "There are not any teams in this state";
}
}
console.log(getState("ohio"));






//This function has the user choose any conference from the NFL. The program would display every team in the chosen conference. So if they pick the AFC, it will show every team in the AFC, and if they pick the NFC, it will show every team in the NFC. If the conference does not exist the program would return "This conference does not exist"

//selectedConference{string} - Whatever conference the user types in, the program would return the teams in that conference

//return {list} - All the NFL teams in the selected conference
function getConference(selectedConference){

selectedConference=selectedConference.toLowerCase();
  var conference = [];
  for(var i in urlDivision){
    if (urlConference[i].toLowerCase().includes(selectedConference)){
      conference.push(urlTeam[i]);
    }
    }
  if (conference.length > 0){
    return conference;

  }
else{
  return "This conference does not exist";

  
}
  
}
console.log(getConference("nfc"))

//This function has the user choose any division from the NFL. The program would display every team in the chosen division. For example, if they pick the AFC North, it will show the Bengals, Steelers, Browns, and the Ravens. If the division does not exist the program would return "This division does not exist"

//selectedConference{string} - Whatever division the user types in, the program would return the teams in that division

//selectedDivision {string} - Whatever division the user types in, it will display every team in that division. You also have to enter the conference 

//return {list} All NFL teams in the chosen division
function getDivision(selectedConference, selectedDivision){

selectedConference=selectedConference.toLowerCase();
selectedDivision=selectedDivision.toLowerCase();
  var conferenceTeams = [];
  for(var i in urlConference){
    if (urlConference[i].toLowerCase().includes(selectedConference) && urlDivision[i].toLowerCase().includes(selectedDivision) ){
      conferenceTeams.push(urlTeam[i]);
    }
    }
  if (conferenceTeams.length > 0){
    return conferenceTeams;

  }
else{
  return "This division does not exist";
}
}
console.log(getDivision("NFC",  "West"));





//This function has the user pick any team from the NFL, and the program would return the stadium name, the capacity, and the logo for the chosen team. If the team does not exist the program would return "This team does not exist"

//selectedStadium{string} - Whatever NFL team the user types in, the program would return the stadium, capacity, and logo, corresponding to that team.

//return {list} - The stadium, capacity, and logo based on the selected team
function getStadium(selectedStadium){
selectedStadium=selectedStadium.toLowerCase();
  var stadium = [];
  for(var i in urlStadium){
    if (urlTeam[i].toLowerCase().includes(selectedStadium)){
      stadium.push(urlStadium[i]);
      stadium.push(urlCapacity[i]);
      stadium.push(urlImage[i]);
      
    }
    }
  if (stadium.length > 0){
    return stadium;
    
  }
else{
  return "This team does not exist";
}
  
}
console.log(getStadium("Washington Commanders"));


//This function has the user pick any team from the NFL. Depending on the team chosen, it would display the details for that team. (Conference, Division, City, Stadium, Capacity, Head Coach, and the Image). If the team does not exist the program would return "This team does not exist"

//selectedTeam {string} - Whatever team the user enters, the program would return the details of the selected team. (Conference, Division, Team, City, Stadium, Capacity, Head Coach, and Logo) 

//return {list} - The details of the NFL team
function getTeam(selectedTeam){
  selectedTeam=selectedTeam.toLowerCase();
  var teams = [];
  for(var i in urlTeam){
    if (urlTeam[i].toLowerCase().includes(selectedTeam)){
      teams.push(urlConference[i]);
      teams.push(urlDivision[i]);
      teams.push(urlStadium[i]);
      teams.push(urlCapacity[i]);
      teams.push(urlCity[i]);
      teams.push(urlCoach[i]);
      teams.push(urlImage[i]);
    }
    }
  
  if (teams.length > 0){
    return teams;
  }
    
else{
  return "This team does not exist";
}
  
}
console.log(getTeam("Bengals"));





function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

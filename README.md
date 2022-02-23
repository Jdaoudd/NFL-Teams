# NFL-Teams


#### This function has the user enter what state they live in, and then the code will display the closest team to them, based on the chosen state. If there are no teams in the chosen states the program would return "There are not any teams in this state"
##### @param selectedState {string} - whatever state the user types in, the program would return the team in that state
##### @return teams {list} - All NFL teams in the selected state


**`function getState(selectedState)`**


#### This function has the user choose any conference from the NFL. The program would display every team in the chosen conference. So if they pick the AFC, it will show every team in the AFC, and if they pick the NFC, it will show every team in the NFC. If the conference does not exist the program would return "This conference does not exist"

#### @param selectedConference{string} - Whatever conference the user types in, the program would return the teams in that conference

#### @return teams {list} - All the NFL teams in the selected conference

**`function getConference(selectedConference)`**


#### This function has the user choose any division from the NFL. The program would display every team in the chosen division. For example, if they pick the AFC North, it will show the Bengals, Steelers, Browns, and the Ravens. If the division does not exist the program would return "This division does not exist"

#### @param selectedConference {string} - Whatever division the user types in, the program would return the teams in that division

#### @param selectedDivision {string} - Whatever division the user types in, it will display every team in that division. You also have to enter the conference 

#### @return selectedStadium {list} - All NFL teams in the chosen division

**`function getDivision(selectedConference, selectedDivision)`**


#### This function has the user pick any team from the NFL, and the program would return the stadium name, the capacity, and the logo for the chosen team. If the team does not exist the program would return "This team does not exist"

#### @param selectedStadium {string} - Whatever NFL team the user types in, the program would return the stadium, capacity, and logo, corresponding to that team.

#### @return selectedStadium {list} - The stadium, capacity, and logo based on the selected team

**`function getStadium(selectedStadium)`**


#### This function has the user pick any team from the NFL. Depending on the team chosen, it would display the details for that team. (Conference, Division, City, Stadium, Capacity, Head Coach, and the Image). If the team does not exist the program would return "This team does not exist"

#### @param selectedTeam {string} - Whatever team the user enters, the program would return the details of the selected team. (Conference, Division, Team, City, Stadium, Capacity, Head Coach, and Logo)

#### @return selectedTeam {list} - The details of the NFL team

**`function getTeam(selectedTeam)`**








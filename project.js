document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("west").addEventListener("click", () => {
        resetButton();
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => listingWest(divisions))
        })
    document.getElementById("east").addEventListener("click", () => {
        resetButton();
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => listingEast(divisions))
        })
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        resetButton();
        let x = document.getElementById("searchByDivision").value;
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => divisionSearch(divisions, x))
        document.querySelector("form").reset();
    })
    document.getElementById("NBA").addEventListener("dblclick", () => {
        let audio = new Audio("Media/nba_on_nbc.mp3");
        audio.volume = 0.1;
        audio.play();
        document.getElementById("NBA").addEventListener("dblclick", () => {
            audio.pause();
            audio.currentTime = 0;
        })
    })
})

/* 
listingWest() takes in API information and lists teams in the western
 conference to the screen
 */
function listingWest(divisions) { 
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    title.innerText = "Western Conference";
    list.innerHTML = "";
    list.appendChild(title);
    let pic = document.createElement("img");
    pic.src = "Media/WesternNBA.webp";
    list.append(pic);
    allInfo.forEach(team => {
        if (team.conference === "West") {
            doIt(team);
        }
    })
}

/* 
listingEast() takes in API information and lists teams in the eastern 
conference to the screen
*/
function listingEast(divisions) { 
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    title.innerText = "Eastern Conference";
    list.innerHTML = "";
    list.appendChild(title);
    let pic = document.createElement("img");
    pic.src = "Media/EasternNBA.webp";
    list.append(pic);
    allInfo.forEach(team => {
        if (team.conference === "East") {
            doIt(team);
        }
    })
}

/* 
divisionSearch() takes in API information and user input from submit form
 and lists the inputted division of the NBA with teams, or 
 tells user to try again with suggestions of correct divisions
 */
function divisionSearch(divisions, inputInfo) { 
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    list.innerHTML = "";
    if (inputInfo === "Southeast" || inputInfo === "Atlantic" || inputInfo === "Central" || inputInfo === "Pacific" || inputInfo === "Southwest" || inputInfo === "Northwest") {
        title.innerText = inputInfo + " Division Teams: ";
        list.appendChild(title);
        let pic = document.createElement("img");
        pic.src = "Media/" + inputInfo + "NBA.png";
        list.append(pic);
        allInfo.forEach(team => {
            if (inputInfo === team.division) {
               doIt(team);
            }
        })
    }
    else {
        const p = document.createElement("p");
        p.textContent = "Please Try Again: Enter 'Southeast', 'Atlantic', 'Central', 'Pacific', 'Southwest', or 'Northwest' please!";
        list.appendChild(p);
    }   
}

/* doIt() creates a button for each team that is listed either 
after the western conference or eatern conference button is selected, 
or after user input. Also, this function lets each button list attributes 
about a selected team
*/
function doIt (team) {
    const list = document.querySelector("main");
    const p = document.createElement("p");
    const btn = document.createElement('button');
    btn.textContent = "More Info";
    btn.addEventListener("click", () => {
        const information = [];
        information[0] = "Abbreviation: " + team.abbreviation;
        information[1] = "City: " + team.city;
        information[2] = "Division: " + team.division;
        information[3] = "Mascot Name: " + team.name;
        p.textContent = team.full_name + " Information:  ";
        for (let j = 0; j < 4; j++) {
            if(j < 3) {
                p.append(information[j] + ",  ");
            }
            else {
                p.append(information[j]);
            }
        }
    })
    p.textContent = team.full_name + "   ";
    p.appendChild(btn);
    list.appendChild(p);
}

function resetButton () {
    let btn = document.createElement("button");
    btn.textContent = "Reset";
    const button1 = document.getElementById("west");
    const button2 = document.getElementById("east");
    const submitButton = document.getElementById("searchByDivision1");
    let reset = document.getElementById("topOfPage");
    reset.innerText = ""
    reset.append(btn);
    submitButton.setAttribute("disabled", true);
    let list = document.querySelector("main");
    btn.addEventListener("click", () => {
        btn.remove();
        list.innerHTML = "";
        reset.append(button1, button2);
        let pic = document.createElement("img");
        pic.src = "Media/NBATeams.png";
        list.append(pic);
        submitButton.removeAttribute("disabled");
    })
}
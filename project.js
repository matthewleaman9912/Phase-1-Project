
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("west").addEventListener("click", () => {
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => listingWest(divisions))
        })
    document.getElementById("east").addEventListener("click", () => {
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => listingEast(divisions))
        })
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        let x = document.getElementById("searchByDivision").value;
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => divisionSearch(divisions, x))
        document.querySelector("form").reset();
    })
    document.getElementById("NBA").addEventListener("dblclick", (event) => {
        let audio = document.getElementById("audio1");
        audio.play()
    })
})


function listingWest(divisions) {
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    title.innerText = "Western Conference";
    list.innerHTML = "";
    list.appendChild(title);
    allInfo.forEach(team => {
        if (team.conference === "West") {
            doIt(team);
        }
    })
}

function listingEast(divisions) {
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    title.innerText = "Eastern Conference";
    list.innerHTML = "";
    list.appendChild(title);
    allInfo.forEach(team => {
        if (team.conference === "East") {
            doIt(team);
        }
    })
}

function divisionSearch(divisions, inputInfo) {
    const list = document.querySelector("main");
    let title = document.createElement("h2");
    let allInfo = [];
    allInfo = divisions.data;
    list.innerHTML = "";
    if (inputInfo === "Southeast" || inputInfo === "Atlantic" || inputInfo === "Central" || inputInfo === "Pacific" || inputInfo === "Southwest" || inputInfo === "Northwest") {
        title.innerText = inputInfo + " Division Teams: ";
        list.appendChild(title);
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

function soundDeliver () {

}
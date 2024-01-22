
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("west").addEventListener("click", () => {
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(datas => listingWest(datas))
        })
    document.getElementById("east").addEventListener("click", () => {
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(datas => listingEast(datas))
        })
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        let x = document.getElementById("searchByDivision").value;
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => divisionSearch(divisions, x))
        document.querySelector("form").reset();
    })
})

//list = document.querySelector("main");


function listingWest(datas) {
    let demo = [];
    demo = datas.data;
    const list = document.querySelector("main");
    let title = document.createElement("h2")
    title.innerText = "Western Conference"
    list.innerHTML = "";
    list.appendChild(title);
    demo.forEach(team => {
        if (team.conference === "West") {
            doIt(team)
        }
    })
}

function listingEast(datas) {
    let demo = [];
    demo = datas.data;
    const list = document.querySelector("main");
    let title = document.createElement("h2")
    title.innerText = "Eastern Conference"
    list.innerHTML = "";
    list.appendChild(title);
    demo.forEach(team => {
        if (team.conference === "East") {
            doIt(team)
        }
    })
}

function divisionSearch(divisions, inputInfo) {
    let allInfo = [];
    allInfo = divisions.data;
    const list = document.querySelector("main");
    let title = document.createElement("h2");
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
        const p = document.createElement("p")
        p.textContent = "Please Try Again: Enter 'Southeast', 'Atlantic', 'Central', 'Pacific', 'Southwest', or 'Northwest' please!"
        list.appendChild(p)

    }   
}

function doIt (team) {
    const list = document.querySelector("main");
    const p = document.createElement("p");
    const btn = document.createElement('button');
    btn.textContent = "More Info"
    btn.addEventListener("click", () => {
        const information = [];
        information[0] = "Abbreviation: " + team.abbreviation;
        information[1] = "City: " + team.city;
        information[2] = "Division: " + team.division;
        information[3] = "Mascot Name: " + team.name;
        p.textContent = team.full_name + " Information:  ";
        for (let j = 0; j < 4; j++) {
            if(j < 3) {
                p.append(information[j] + ",  ")
            }
            else {
                p.append(information[j])
            }
        }
    })
    p.textContent = team.full_name + "   ";
    p.appendChild(btn);
    list.appendChild(p);
}
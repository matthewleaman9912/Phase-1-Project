//const { forEach } = require("lodash");

let west = document.getElementById("west");
let east = document.getElementById("east");

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
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
    document.querySelector("form").addEventListener("submit", () => {
        fetch('https://www.balldontlie.io/api/v1/teams')
        .then(response => response.json())
        .then(divisions => divisionSearch(divisions))
    })
})




function listingWest(datas) {
    let demo = [];
    demo = datas.data;
    const list = document.querySelector("main");
    list.innerHTML = "";
    demo.forEach(team => {
        if (team.conference === "West") {
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
    })
}

function listingEast(datas) {
    let demo = [];
    demo = datas.data;
    const list = document.querySelector("main");
    list.innerHTML = "";
    demo.forEach(team => {
        if (team.conference === "East") {
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
    })
}

function divisionSearch(divisions) {
    
}
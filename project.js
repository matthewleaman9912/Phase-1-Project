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
    })




function listingWest(datas) {
    let demo = [];
    demo = datas.data;
    const list = document.querySelector("main");
    list.innerHTML = "";
    demo.forEach(team => {
        if (team.conference === "West") {
            const p = document.createElement("p");
            p.innerHTML = team.full_name;
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
            p.innerHTML = team.full_name;
            list.appendChild(p);
        }
    })
}
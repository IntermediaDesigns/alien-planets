import { alienPlanets } from "./alienPlanets.js";


let planetContainer = document.querySelector(".alienPlanetsContainer");


for (let i = 0; i < alienPlanets.length; i++) {
       let planetDiv = document.createElement('div');
       planetDiv.className = 'planet';

       let name = document.createElement('h4');
       name.textContent = `${alienPlanets[i].name}`;
       planetDiv.appendChild(name);

       let emoji = document.createElement('p');
       emoji.textContent = `${alienPlanets[i].emoji}`;
       planetDiv.appendChild(emoji);

       planetContainer.appendChild(planetDiv);
}


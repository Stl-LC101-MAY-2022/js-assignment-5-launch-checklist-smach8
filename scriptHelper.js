// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image) {
   let destinationLocation = document.querySelector("div[id=missionTarget]")
   destinationLocation.innerHTML = `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons:${moons} </li>
   </ol>
   <img src="${image}">`
   
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  if (testInput.value === "") {
    return "Empty";
  }
  if (isNaN(testInput.value)) {
    return "Not a Number";
  }
  if (!isNaN(testInput.value)) {
    return "Is a Number";
  }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log(new Date().getTime());
  let pilotValidation = validateInput(pilot);
  let pilotCheck = false;
  if (pilotValidation == "Not a Number") {
    pilotCheck = true;
  }
  let coPilotValidation = validateInput(copilot);
  let copilotCheck = false;
  if (coPilotValidation == "Not a Number") {
    copilotCheck = true;
  }
  let fuelLevelValidation = validateInput(fuelLevel);
  let fuelLevelCheck = false;
  if (fuelLevelValidation == "Is a Number") {
    fuelLevelCheck = true;
  }
  let cargoLevelValidation = validateInput(cargoLevel);
  let cargoLevelCheck = false;
  if (cargoLevelValidation == "Is a Number") {
    cargoLevelCheck = true;
  }

  let pilotStatus = list.querySelector("li[id=pilotStatus]");
  pilotStatus.innerHTML = `${pilot} is ready`;
  let copilotStatus = list.querySelector("li[id=copilotStatus]");
  copilotStatus.innerHTML = `${copilot} is ready`;

  let fuelStatus = list.querySelector("li[id=fuelStatus]");
  let launchStatus = document.querySelector("h2[id=launchStatus]");
  console.log(fuelLevel, fuelLevelCheck)
  if (fuelLevel.value < 10000) {
    fuelLevelCheck = false
  }
  let cargoStatus = list.querySelector("li[id=cargoStatus]");
  //let launchStatus = document.querySelector("h2[id=launchStatus]")
  if (cargoLevel.value >= 10000) {
  cargoLevelCheck = false
  }
  console.log (pilotCheck, copilotCheck, fuelLevelCheck, cargoLevelCheck)
  if (pilotCheck && copilotCheck && fuelLevelCheck && cargoLevelCheck) {
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is ready for launch";
  } else {
    alert("Not a Valid Input");
    launchStatus.innerHTML = "Shuttle not ready for launch";
    fuelStatus.innerHTML = "Too low to launch";
    launchStatus.style.color = "red";
    list.style.visibilty = "visible";
    cargoStatus.innerHTML = "Too Much Mass For The Launch";
  }
}


async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

   return planetsReturned;
}

function pickPlanet(planets) {
  let planetPicked = getRandomInt(0, planets.length - 1)
  return planets[planetPicked]
} function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
   if  (testInput.value === ""){
    return("Empty");  
} if (isNan(testInput.value)) {
    return ("Not a Number");
} if (!isNaN(testInput.value)){
    return ("Is a Number");
}
   

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotValidation = validateInput(pilot)
   if (pilotValidation !== "Empty" || pilotValidation !== "Is a Number") {
    alert(" Not a valid Input")
    
   }
   let coPilotValidation = validateInput(copilot)
   if (coPilotValidation !== "Empty" || coPilotValidation !== "Is a Number") {
    alert(" Not a valid Input")
   }
   let fuelLevelValidation = validateInput(fuelLevel)
   if (fuelLevelValidation !== "Empty" || fuelLevelValidation !== "Not a Number") {
    alert(" Not a valid Input")
   }
   let cargoLevelValidation = validateInput(cargoLevel)
   if (cargoLevelValidation !== "Empty" || cargoLevelValidation !== "Not a Number") {
    alert(" Not a valid Input")
   }
   let pilotStatus = list.querySelector("li[id=pilotStatus]")
   pilotStatus.innerHTML = `${pilot} is ready`
  let copilotStatus = list.querySelector("li[id=copilotStatus]")
    copilotStatus.innerHTML = `${copilot} is ready`

   let fuelStatus = list.querySelector("li[id=fuelStatus]")
   let launchStatus = document.querySelector("h2[id=launchStatus]")
   if (fuelLevel < 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launch"
    fuelStatus.innerHTML = "Too low to launch"
    launchStatus.style.color = 'red'
    list.style.visibilty = 'visible'

    let cargoStatus = list.querySelector("li[id=cargoStatus]")
   //let launchStatus = document.querySelector("h2[id=launchStatus]")
   if (cargoLevel >= 10000) {
    launchStatus.innerHTML = "Shuttle not ready for launh"
    cargoStatus.innerHTML = "Too Much Mass For The Launch"
    launchStatus.style.color = 'red'
    list.style.visibilty = 'visible'
   }
    else {
        launchStatus.style.color = 'green'
        launchStatus.innerHTML = "Shuttle is ready for launh"
    }

   }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
});

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { validateInput, formSubmission } = require("./scriptHelper");

   window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let faultyItems = document.querySelector("div[id=faultyItems]")
        
        formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput)
        });
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        
        let listedPlanetsResponse = myFetch()
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
           let desitnation = pickPlanet(listedPlanets)
           addDestinationInfo(document, desitnation.name, desitnation.diameter, desitnation.star, desitnation.distance, desitnation.moons, desitnation.image)
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        })
        });
        


   
   
;
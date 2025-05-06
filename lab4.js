saudiAirlines = {
    airlineName: "Saudi Airlines",
    country: "Saudi Arabia",
    fleetSize: 200,
    destinations: ["Jeddah", "Riyadh", "Dammam", "Medina","London", "Paris", "New York"],
    inOperation: true,
    bookFlight: function (destinations){
        if (this.destinations.includes(destinations)) {
            console.log(`Flight to ${destinations} is available. The flight is booked.`);
        }
        else {
            console.log(`Flight to ${destinations} is not available.`);
        }
    },
    addDestination: function (newDestination) {
        this.destinations.push(newDestination);
    },

    getSummary: function () {
return `${this.airlineName} operates in ${this.country}, has a ${this.fleetSize} planes and flies to ${this.destinations}`    },

}


saudiAirlines.bookFlight("Riyadh");
saudiAirlines.addDestination("Abha");

console.log(saudiAirlines.destinations);

console.log(saudiAirlines.getSummary());
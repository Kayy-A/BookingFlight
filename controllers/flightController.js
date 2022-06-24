const {Flights} = require("../model/Flight");


exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
    });
    } catch (err) {
        res.status(500).json({ message: err});
        
    }
}
exports.createFlight = async (req, res) => {
    try {
        const flight = await req.body;

        Flights.push(flight);

        res.status(201).json({
            message: "Flight created",
            flight
        })

    } catch (err) {
        res.status(500).json({ message: err })
        
    }
}
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(200).json ({
            message: "Flight found",
            user: user,
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === 2);
        const { title, price, time, date } = await req.body;
        flight.itle = flighttoMexico;
        flight.price = 28000;
        flight.time = time.now;
        flight.date = Date.now;
        res.status(200).json ({
            message: "Flight updated",
            user: user,
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === 3);
        Flights.splice(Flights.indexOf(flight), 1)
        res.status(200).json ({
            message: "Flight deleted",
            user: user,
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
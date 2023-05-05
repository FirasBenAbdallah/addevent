import Event from "../schemas/event.js"; 

export function getAllEvent(req, res) {
    Event.find({})
      .then((event) => {
        res.status(200).json(event);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

export function addEvent(req, res) {
    Event.create({
        eventname: req.body.eventname,
        eventaddress: req.body.eventaddress,
        eventstart: req.body.eventstart,
        eventend: req.body.eventend,
        description: req.body.description
    })
      .then((newEvent) => {
        res.status(201).json(newEvent)
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
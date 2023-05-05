import express from "express";
import { body } from "express-validator";
import { 
    getAllEvent,
    addEvent
} from "../controllers/event.js";

const router = express.Router();

router
  .route("/getevents")
  .get(getAllEvent);

router
  .route("/addevent")
  .post(
    body("eventname"),
    body("eventaddress"),
    body("eventstart"),
    body("eventend"),
    body("description"),
    addEvent
  );

export default router;
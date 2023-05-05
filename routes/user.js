import express from "express";
import { body } from "express-validator";
import {
  getAll,
  addOne,
  patchOne,
  deleteOne,
  getOne,
  putAll,
  login
} from "../controllers/user.js";

const router = express.Router();
router
  .route("/")
  .get(getAll);

router
  .route("/signup")
  .post(
    body("firstname"),
    body("lastname"),
    body("email"),
    body("birthdate"),
    body("address"),
    body("password"),
    body("confpassword"),
    body("photoDeProfile"),
    addOne
  );

router
  .route("/:email")
  .get(getOne)
  .delete(deleteOne)
  .put(putAll);
  // .patch(patchOne);

router
  .route("/modify/:email")
  .patch(patchOne);

router
    .route("/login")
    .post(
      body("email"),
      body("password"),
      login
    )
    
export default router;

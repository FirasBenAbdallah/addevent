import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    birthdate: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      // required: true,
      // unique: false,
      // trim: true,
    },
    confpassword: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    photoDeProfile: {
      type: String,
      // required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);

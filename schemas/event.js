import mongoose from "mongoose";

const { Schema, model } = mongoose;

const eventSchema = new Schema(
    {
      eventname: {
        type: String,
        required: true,
        // unique: false,
        // trim: true,
      },
      eventaddress: {
        type: String,
        required: true,
        unique: false,
        trim: true,
      },
      eventstart: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      eventend: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      description: {
        type: String,
        // required: true,
        // unique: true,
        trim: true,
      },
    //   photoDeProfile: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //   },
    },
    {
      timestamps: true,
    }
  );

export default model("Event", eventSchema);
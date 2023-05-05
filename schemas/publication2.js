import mongoose from "mongoose";
const { Schema, model } = mongoose;

const publication2 = new Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    description: {
      type: String,
    },
    pde: {
      type: String,
    },
  },
/*   {
    timestamps: true,
  } */
);

export default model("Publication2", publication2);

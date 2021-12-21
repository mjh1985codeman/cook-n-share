const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const creationSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    creationTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 75,
    },
    ingredients: {
      type: String,
      required: true,
    },
    creationDescription: {
      type: String,
      required: true,
    },
    directions: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Creation = model("Creation", creationSchema);

module.exports = Creation;

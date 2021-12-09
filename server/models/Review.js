const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: true,
      maxLength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reviewSchema;

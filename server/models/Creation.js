const { Schema, model } = require("mongoose");
const reviewSchema = require("./Review");
const dateFormat = require("../utils/dateFormat");

const creationSchema = new Schema(
  {
    creationText: {
      type: String,
      required: "You need to leave a creation!",
      minlength: 1,
      maxlength: 500000,
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
    reviews: [reviewSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

reviewSchema.virtual("reviewCount").get(function () {
  return this.reviews.length;
});

const Creation = model("Creation", creationSchema);

module.exports = Creation;

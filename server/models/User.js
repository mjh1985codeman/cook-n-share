const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

// //import creationSchema from Creation.js
const creationSchema = require("./Creation");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
    userCreations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Creation",
      },
    ],
    savedCreations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Creation",
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("creationCount").get(function () {
  return this.userCreations.length;
});

const User = model("User", userSchema);

module.exports = User;

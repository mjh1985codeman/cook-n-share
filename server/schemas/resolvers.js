const { User, Creation } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // pull specific user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("userCreations")
          .populate("savedCreations");
        return userData;
      }

      throw new AuthenticationError("You are not logged in");
    },

    //Here, we pass in the parent as more of a placeholder parameter. It won't be used, but we need something in that first parameter's
    //spot so we can access the username argument from the second parameter. We use a ternary operator to check if username exists.
    //If it does, we set params to an object with a username key set to that value. If it doesn't, we simply return an empty object.
    creations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Creation.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addCreation: async (parent, args, context) => {
      if (context.user) {
        const creation = await Creation.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { userCreations: creation._id } },
          { new: true }
        );

        return creation;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

const { Creation, User } = require("../models");

const creationController = {
  // create a creation
  createCreation({ body }, res) {
    Creation.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          {
            username: body.username,
          },
          { $push: { userCreations: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = creationController;

const { createCreation } = require("../../controllers/creation-controller");

const router = require("express").Router();

const { createCreation } = require("../../controllers/creation-controller");

// /api/creations
router.route("/").post(createCreation);

module.exports = router;

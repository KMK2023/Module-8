// Routes to include get, post, put, delete requests

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.usersController.getUser(res);
});

router.post("/", (req, res) => {
  Controllers.usersController.createUser(req.body, res);
});

router.get("/:id", (req, res) => {
  Controllers.usersController.getUserById(req.params.id, res);
});

router.put("/:id", (req, res) => {
  Controllers.usersController.updateUser(req.params.id, req.body, res);
});

router.delete("/:id", (req, res) => {
  Controllers.usersController.deleteUser(req.params.id, res);
});

module.exports = router;

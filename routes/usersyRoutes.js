// Routes to include get, post, put, delete requests

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.usersyController.getUsery(res);
});

router.post("/", (req, res) => {
  Controllers.usersyController.createUsery(req.body, res);
});

router.get("/:id", (req, res) => {
  Controllers.usersyController.getUseryById(req.params.id, res);
});

router.put("/:id", (req, res) => {
  Controllers.usersyController.updateUsery(req.params.id, req.body, res);
});

router.delete("/:id", (req, res) => {
  Controllers.usersyController.deleteUsery(req.params.id, res);
});

module.exports = router;

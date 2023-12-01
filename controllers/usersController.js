// This controller is for the blog posts and includes get, delete, put posts

"use strict";
const sequelize = require("sequelize");
const Models = require("../models");

// To get any post with find all inside the models, within the post
const getUser = (res) => {
  Models.Users.findAll({})
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};
// To create a new post inside the models, within the post
const createUser = (data, res) => {
  Models.Users.create(data)
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

// To get any post with a specific ID inside the models, within the post
const getUserById = (id, res) => {
  Models.Users.findOne({ where: { id: id } })
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

// To update a specific post inside the models, within the post
const updateUser = (id, data, res) => {
  Models.Users.update(data, { where: { id: id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

// To delete a specific post inside the models, within the post
const deleteUser = (id, res) => {
  Models.Users.destroy({ where: { id: id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};

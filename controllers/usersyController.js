// This controller is for the blog posts and includes get, delete, put posts

"use strict";
const sequelize = require("sequelize");
const Models = require("../models");

// To get any post with find all inside the models, within the post
const getUsery = (res) => {
  Models.Usersy.findAll({})
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};
// To create a new post inside the models, within the post
const createUsery = (data, res) => {
  Models.Usersy.create(data).then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

// To get any post with a specific ID inside the models, within the post
const getUseryById = (id, res) => {
  Models.Usersy.findOne({ where: { id: id } })
    .then(function (data) {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

// To update a specific post inside the models, within the post
const updateUsery = (id, data, res) => {
  Models.Usersy.update(data, { where: { id: id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

// To delete a specific post inside the models, within the post
const deleteUsery = (id, res) => {
  Models.Usersy.destroy({ where: { id: id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsery,
  createUsery,
  getUseryById,
  updateUsery,
  deleteUsery,
};

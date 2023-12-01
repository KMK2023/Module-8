// This controller is for the blog posts and includes get, delete, put posts

"use strict";
const sequelize = require("sequelize");
const Models = require("../models");

// To get any post with find all inside the models, within the post
const getPost = (res) => {
    Models.Posts.findAll({}).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}
// To create a new post inside the models, within the post
const createPost = (data, res) => {
    Models.Posts.create(data).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}

// To get any post with a specific ID inside the models, within the post
const getPostById = (id, res) => {
    Models.Posts.findOne({where: {id: id}}).then(function (data) {
        res.send(data)
    }).catch(err => {
        throw err
    })
}

// To update a specific post inside the models, within the post
const updatePost = (id, data, res) => {
    Models.Posts.update(data, {where: {id: id}}).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

// To delete a specific post inside the models, within the post
const deletePost = (id, res) => {
    Models.Posts.destroy({where: {id: id}}).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPost,
    createPost,
    getPostById,
    updatePost,
    deletePost
}
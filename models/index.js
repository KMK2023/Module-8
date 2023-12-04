"use strict";
const Usersy = require("./usersy");
const Posts = require("./posts");

async function init() {
  await Posts.sync();
  await Usersy.sync();
}

init();

module.exports = {
  Posts,
  Usersy,
};

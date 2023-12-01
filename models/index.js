"use strict";
const Users = require("./users");
const Posts = require("./posts");

async function init() {
  await Posts.sync();
  await Users.sync();
}

init();

module.exports = {
  Posts,
  Users,
};

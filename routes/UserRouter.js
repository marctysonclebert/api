const express = require("express");
const {
  addUser,
  getUsers,
  getUser
} = require("../controllers/UserControllers");

const userRouter = express.Router();

userRouter.route("/").post(addUser).get(getUsers);
userRouter.route("/:id").get(getUser);

module.exports = userRouter;

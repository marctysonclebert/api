const User = require("../models/UserModel");

const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
  //   res.status(200).json(req.body);
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).json(`User with id: ${id} not found...`);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addUser, getUsers, getUser };

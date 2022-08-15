const addUser = (req, res) => {
  res.status(201).json({});
};

const getUsers = (req, res) => {
  res.status(200).json([]);
};

const getUser = (req, res) => {
  res.status(200).json({});
};

module.exports = { addUser, getUsers, getUser };

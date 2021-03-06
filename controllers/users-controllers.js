const uuid = require("uuid/v4");

const HttpError = require("../models/http-error.js");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "gavin",
    email: "test@test.com",
    password: "password"
  }
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    return next(
      new HttpError("Could not create user, email already exists.", 422)
    );
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    return next(
      new HttpError("Could not identify user, credentials seem to be wrong.", 401)
    );
  }
  res.json({ message: "Logged in!" })
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;

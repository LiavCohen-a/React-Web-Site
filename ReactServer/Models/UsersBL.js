const usersModel = require("./UsersModel");

exports.GetAllUsers = function () {
  return new Promise((resolve, reject) => {
    usersModel.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetUserByID = function (UserID) {
  return new Promise((resolve, reject) => {
    usersModel.findById(UserID, (err, data) => {
      if (err) {
      } else {
        resolve(data);
      }
    });
  });
};

exports.UpdateUser = function (UserID, UserNewData) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndUpdate(UserID, UserNewData, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("User Was Updated");
      }
    });
  });
};

exports.AddUser = function (newUserData) {
  return new Promise((resolve, reject) => {
    let newuser = new usersModel({
      userName: newUserData.userName,
      password: newUserData.password,
    });
    newuser.save(function (err) {
      if (err) {
        resolve(err);
      } else {
        resolve("New User Was Create");
      }
    });
  });
};

exports.DeleteUser = function (UserID) {
  return new Promise((resolve, reject) => {
    usersModel.findByIdAndDelete(UserID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("User Was Deleted");
      }
    });
  });
};

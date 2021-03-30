const membersModel = require("./MembersModel");

exports.GetAllMembers = function () {
  return new Promise((resolve, reject) => {
    membersModel.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetMemberByID = function (MemberID) {

  return new Promise((resolve, reject) => {
    membersModel.findById(MemberID, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  });
};

exports.UpdateMember = function (MemberID, MemberNewData) {
  return new Promise((resolve, reject) => {
    membersModel.findByIdAndUpdate(MemberID, MemberNewData, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("Member Was Updated");
      }
    });
  });
};

exports.AddMember = function (newMemberData) {
  return new Promise((resolve, reject) => {
    let newMember = new membersModel({
      name: newMemberData.name,
      email: newMemberData.email,
      City: newMemberData.City,
    });
    newMember.save(function (err) {
      if (err) {
        resolve(err);
      } else {
        resolve("New Member Was Create");
      }
    });
  });
};

exports.DeleteMember = function (MemberID) {
  return new Promise((resolve, reject) => {
    membersModel.findByIdAndDelete(MemberID, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("Member Was Deleted");
      }
    });
  });
};

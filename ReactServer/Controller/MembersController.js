const membersBL = require("../Models/MembersBL");
const express = require("express");
const router = express.Router();

router.route("/").get(async function (req, resp) {
  let data = await membersBL.GetAllMembers();
  return resp.json(data);
});

router.route("/:id").get(async function (req, resp) {
  let memberID = req.params.id;
  let data = await membersBL.GetMemberByID(memberID);
  return resp.json(data);
});
router.route("/").post(async function (req, resp) {
  let newMemberData = req.body;
  let data = await membersBL.AddMember(newMemberData);
  return resp.json(data);
});
router.route("/:id").put(async function (req, resp) {
  let memberID = req.params.id;
  let newMemberData = req.body;
  let data = await membersBL.UpdateMember(memberID, newMemberData);
  return resp.json(data);
});
router.route("/:id").delete(async function (req, resp) {
  let memberID = req.params.id;
  let data = await membersBL.DeleteMember(memberID);
  return resp.json(data);
});

module.exports = router;

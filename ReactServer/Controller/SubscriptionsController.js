const SubscriptionsBL = require("../Models/SubscriptionsBL");
const express = require('express');
const router = express.Router();


router.route('/').get(async function(req,resp)
    {
        let data = await SubscriptionsBL.GetAllSubscriptions()
        
        return resp.json(data)
    })
router.route('/:id').get(async function(req,resp)
    {
        let SubID = req.params.id;
        let data = await SubscriptionsBL.GetSubscriptionsByID(SubID);
        return resp.json(data)
    })
router.route('/').post(async function(req,resp)
    {
        let newSubData = req.body;
        let data = await SubscriptionsBL.AddSubscriptions(newSubData)
        return resp.json(data)
    })
router.route('/:id').put(async function(req,resp)
    {
        let SubID = req.params.id;
        let newSubData = req.body;
        let data = await SubscriptionsBL.UpdateSub(SubID,newSubData)
        return resp.json(data)
    })
router.route('/:id').delete(async function(req,resp)
    {
        let SubID = req.params.id;
        let data = await SubscriptionsBL.DeleteSub(SubID)
        return resp.json(data)
    })
module.exports = router;
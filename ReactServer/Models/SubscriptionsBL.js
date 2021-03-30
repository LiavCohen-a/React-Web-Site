const subscriptionsModel = require("./SubscriptionsModel");
const express = require("express");

exports.GetAllSubscriptions =async function () {
  return new Promise((resolve, reject) => {
    subscriptionsModel.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetSubscriptionsByID =async function (SubID) {
  return new Promise((resolve, reject) => {
    subscriptionsModel.findById(SubID, (err, data) => {
      if (err) {
        reject(err);
      } else {
        
        resolve(data);
      }
    });
  });
};

exports.UpdateSub =async function(SubID,SubNewData)
{
    return new Promise( (resolve,reject)=>
    {
      subscriptionsModel.findByIdAndUpdate(SubID,SubNewData,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
              resolve("Subscription Was Updated")     
            }
        })
    })
}

exports.AddSubscriptions = function(newSubData)
{
    return new Promise((resolve,reject)=>
    {
        let subscriptions = new subscriptionsModel({
          movieID : newSubData.movieID , 
          memberID : newSubData.memberID,
          date : newSubData.date
          
        })
        subscriptions.save(function(err){
            if(err)
            {
                resolve(err)
            }
            else
            {
                resolve('New Subscriptions Create')
            }
        })       
    })
}

exports.DeleteSub= function(SubID)
{
    return new Promise((resolve,reject)=>
    {
        subscriptionsModel.findByIdAndDelete(SubID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Sub Was Deleted")
                
            }
        })
    })
}
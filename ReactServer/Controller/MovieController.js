const MoviesBL = require("../Models/MoviesBL");
const express = require('express');
const router = express.Router();


router.route('/').get(async function(req,resp)
    {
        let data = await MoviesBL.GetAllMovies()
        
        return resp.json(data)
    })
router.route('/:id').get(async function(req,resp)
    {
        let MovieID = req.params.id;
        let data = await MoviesBL.GetMovieByID(MovieID);
        return resp.json(data)
    })
router.route('/').post(async function(req,resp)
    {
        let newMovieData = req.body;
        let data = await MoviesBL.AddMovie(newMovieData)
        return resp.json(data)
    })
router.route('/:id').put(async function(req,resp)
    {
        let movieID = req.params.id;
        let newMovieData = req.body;
        let data = await MoviesBL.UpdateMovie(movieID,newMovieData)
        return resp.json(data)
    })
router.route('/:id').delete(async function(req,resp)
    {
        let movieID = req.params.id;
        let data = await MoviesBL.DeleteMovie(movieID)
        return resp.json(data)
    })
module.exports = router;
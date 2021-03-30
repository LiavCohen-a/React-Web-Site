const moviesModel = require("./MoviesModel");
const express = require("express");

exports.GetAllMovies = async function () {
  return new Promise(async (resolve, reject) => {
    moviesModel.find({}, async function (err, data) {
      if (err) {
        resolve(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.GetMovieByID = async function (id) {
  return new Promise((resolve, reject) => {
    moviesModel.findById(id, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.AddMovie = async function (Movie) {
  return new Promise((resolve, reject) => {
    let movie = new moviesModel({
      name: Movie.name,
      genres: [Movie.genres],
      premieredYear: Movie.premieredYear,
      imageUrl: Movie.imageUrl,
    });

    movie.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Movie Was Add !");
      }
    });
  });
};

exports.UpdateMovie = async function (id, newMovieData) {
  return new Promise((resolve, reject) => {
    moviesModel.findByIdAndUpdate(id, newMovieData, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Movie Was Updated !");
      }
    });
  });
};

exports.DeleteMovie = async function (id) {
  return new Promise((resolve, reject) => {
    moviesModel.findByIdAndDelete(id, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve("Movie Delete !");
      }
    });
  });
};

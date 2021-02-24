const Language = require('../models/Language')
const Genre = require('../models/Genre')
const Movie = require('../models/Movie')
 var mongoose = require('mongoose')
 const {v4 : uuidv4} = require('uuid')
 const newId = uuidv4()

module.exports = {
    langs: () => {
        // return all the languages unfiltered using Model
        return Language.find().then(langs => {
            return langs
        }).catch(err => {
            throw err
        })
    },
    createLanguage: (args) => {
        var uuid = uuidv4().replace(/-/g, "");
        const lang = new Language({
            _id: uuid,
            name: args.languageInput.name
        })

        // save new blog using model which will save in MongoDB
        return lang.save().then(result => {
            console.log(result)
            return result
        }).catch(err => {
            console.log(err)
            throw err
        })
    },

    genres: () => {
        // return all the blogs unfiltered using Model
        return Genre.find().then(genres => {
            return genres
        }).catch(err => {
            throw err
        })
    },
    createGenre: (args) => {
        var uuid = uuidv4().replace(/-/g, "");
        const genre = new Genre({
            _id: uuid,
            type: args.genreInput.type
        })

        // save new blog using model which will save in MongoDB
        return genre.save().then(result => {
            console.log(result)
            return result
        }).catch(err => {
            console.log(err)
            throw err
        })
    },

    movies: () => {
        // return all the movies unfiltered using Model
        return Movie.find().populate('language').populate('genre').then(movies => {
            return movies
        }).catch(err => {
            throw err
        })
    },


  filterMovies: (args) => {
    console.log(args);
    return Movie.find({genre: args.genre}).populate('language').populate('genre').then(movies => {
        return movies
  })},



    createMovie: (args) => {
        var uuid = uuidv4().replace(/-/g, "");
        const movie = new Movie({

            _id: uuid,
            name: args.movieInput.name,
            year: args.movieInput.year,
            genre: args.movieInput.genre,
            language: args.movieInput.language,
            image: args.movieInput.image
        })

        // save new blog using model which will save in MongoDB
        return movie.save().then(result => {
            console.log(result)
            return result
        }).catch(err => {
            console.log(err)
            throw err
        })
    }
}

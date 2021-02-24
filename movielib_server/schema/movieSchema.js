const Genre = require('../models/Genre')
const Language = require('../models/Language')
const Movie = require('../models/Movie')
const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type Language {
        _id: ID!
        name: String!
    }

    input LanguageInput {
        name: String!
    }

    type Genre {
        _id: ID!
        type: String!
    }

    input GenreInput {
        type: String!
    }

    type langQuery {
        langs: [Language!]!
    }

    type Movie {
      _id: ID!
      name: String!
      genre: Genre!
      year: Int!
      language: Language
      image: String!
    }
    input MovieInput {
      name: String!
      year: Int!
      image: String!
      language: String!
      genre: String!
    }

    type RootQuery {
      langs: [Language!]!
      genres: [Genre!]!
      movies: [Movie]
      filterMovies(genre: String):[Movie]
    }

    type RootMutation {
      createLanguage(languageInput: LanguageInput): Language
      createGenre(genreInput: GenreInput): Genre
      createMovie(movieInput: MovieInput): Movie
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)



/*
const Blog = require('../models/blog')
const {buildSchema} = require('graphql');
module.exports = buildSchema(`
    type Blog {
        _id: ID!
        title: String!
        text: String!
        description: String!
        date: String
    }

    input BlogInput {
        title: String!
        text: String!
        description: String!
        date: String
    }


    type blogQuery {
        blogs: [Blog!]!
    }

    type blogMutation {
        createBlog(blogInput: BlogInput): Blog
    }

    schema {
        query: blogQuery
        mutation: blogMutation
    }
`)
*/

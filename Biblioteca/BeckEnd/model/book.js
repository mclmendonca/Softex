const mongoose = require('../db/conn')
const { Schema } = mongoose

const book = mongoose.model(
  'book',
  new Schema({
        titulo: {
        type: String,
        required: true
        },
        autor: {
        type: String,
        required: true
        },
        editora: {
        type: String,
        requires: true
        },
        nota: {
        type: Number
        },
        comentario: {
        type: String
        }, 
        images:{
          type: Array
        }   
      },
      { timestamps: true},
    ),
  )

module.exports = book

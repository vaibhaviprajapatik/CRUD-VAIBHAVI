const mongoose = require("mongoose");

const movie_schema = mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        movie_rating: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model("Movie",movie_schema)

module.exports = Movie
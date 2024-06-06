const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nota: {
            type: String,
            required: true
        },
        comentario: {
            type: String,
            required: false
        },
        titulo: {
            type: String,
            required: false
        },
        quarto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'quarto',
            required: false
        },        
        hospede: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false
        }

    },
    {
        timestamps: true
    }
)

const Avaliacao = mongoose.model('avaliacao', schema)

module.exports = Avaliacao
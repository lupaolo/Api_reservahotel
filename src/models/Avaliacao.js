const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        quarto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'quarto',
            required: false
        },        
        hospede: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false
        },
        nota: {
            type: String,
            required: true
        },
        comentario: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
)

const Avaliacao = mongoose.model('avaliacao', schema)

module.exports = Avaliacao
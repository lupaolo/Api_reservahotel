const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        numero_quarto:{
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        precopornoite: {
            type: String,
            required: true
        },
        vista_praia: {
            type: String,
            required: true
        },
        disponibilidade: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Quarto = mongoose.model('quarto', schema)

module.exports = Quarto
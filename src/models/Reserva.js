const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        quarto: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'quarto',
            required: false
        },
        pacote_descricao: {
            type: String,
            required: false
        },
        dataInicio: {
            type: Date,
            required: false
        },
        dataFim: {
            type: Date,
            required: false
        },
        reservado_por: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cliente',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Reserva = mongoose.model('reserva', schema)

module.exports = Reserva
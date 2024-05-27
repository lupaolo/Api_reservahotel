const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        reserva: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'reserva',
            required: false
        },
        montante: {
            type: Number,
            required: false
        },
        metodo_pagamento: {
            type: String,
            required: true
        },
        data_pagamento: {
            type: Date,
            required: false
        },
        status_pagamento:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Pagamento = mongoose.model('pagamento', schema)

module.exports = Pagamento
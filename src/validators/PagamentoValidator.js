const yup = require('yup')

const cargoSchema = yup.object().shape({
    reserva: yup
        .string('campo precisa ser uma texto'),
    montante: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório'),
    metodo_pagamento: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    data_pagamento: yup
        .date('Data inválida')
        .required('campo obrigatório'),
    status_pagamento: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
})

function pagaValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json(
                    {
                        mensagem: "Falha na validação dos campos",
                        erros: errors
                    }
                )
            })
}

module.exports = {
    pagaValidador
}
const yup = require('yup')

const schema = yup.object().shape({
    quarto: yup
        .string('campo precisa ser uma texto'),
    pacote_descricao: yup
        .string('campo precisa ser uma texto'),
    dataInicio: yup
        .date('Data inválida'),
    dataFim: yup
        .date('Data inválida'),
    reservado_por: yup
        .string('campo precisa ser um texto'),

})

function reservaValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
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
    reservaValidador
}
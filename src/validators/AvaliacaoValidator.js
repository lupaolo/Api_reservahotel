const yup = require('yup')

const schema = yup.object().shape({
    quarto: yup
        .string('campo precisa ser uma texto'),
    hospede: yup
        .string('campo precisa ser um texto'),
    nota: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    comentario: yup
        .string('campo precisa ser um texto'),
})

function avaliacaoValidador(req, res, next) {
    schema
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
    avaliacaoValidador
}
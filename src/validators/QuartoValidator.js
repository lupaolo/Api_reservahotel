const yup = require('yup')

const schema = yup.object().shape({
    numero_quarto: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    tipo: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    descricao: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    precopornoite: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    vista_praia: yup
        .string('campo precisa ser uma texto'),
    disponibilidade: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    

})

function quartoValidador(req, res, next) {
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
    quartoValidador
}
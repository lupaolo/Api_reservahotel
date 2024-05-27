const Avaliacao = require('../models/Avaliacao')

async function create(req, res) {
    const avaliacao = new Avaliacao(req.body)
    const avaliacaoCriado = await avaliacao.save()
    res.status(201).json(avaliacaoCriado)
}

async function getAll(req, res) {
    res.json(await Avaliacao.find().populate(['quarto', 'cliente']))
}

async function getById(req, res) {
    const avaliacao = await Avaliacao.findById(req.params.id).populate(['quarto', 'cliente'])
    if (avaliacao) {
        res.json(avaliacao)
    } else {
        res.status(404).json({ mensagem: "Avaliação não encontrada!" })
    }
}

async function update(req, res) {
    const avaliacaoAtualizado = await Avaliacao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (avaliacaoAtualizado) {
        res.json(avaliacaoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Avaliação não encontrada!" })
    }

}

async function remove(req, res) {
    const avaliacaoExcluido = await Avaliacao.findByIdAndDelete(req.params.id)
    if (avaliacaoExcluido) {
        res.json({
            mensagem: "Avaliação excluida com sucesso!",
            avaliacaoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Avaliação não encontrada!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
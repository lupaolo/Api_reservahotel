const Quarto = require('../models/Quarto')

async function create(req, res) {
    const quarto = new Quarto(req.body)
    const quartoCriado = await quarto.save()
    res.status(201).json(quartoCriado)
}

async function getAll(req, res) {
    res.json(await Quarto.find())
}

async function getById(req, res) {
    const quarto = await Quarto.findById(req.params.id)
    if (quarto) {
        res.json(quarto)
    } else {
        res.status(404).json({ mensagem: "Quarto não encontrado!" })
    }
}

async function update(req, res) {
    const quartoAtulizado = await Quarto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (quartoAtulizado) {
        res.json(quartoAtulizado)
    } else {
        res.status(404).json({ mensagem: "Quarto não encontrado!" })
    }

}

async function remove(req, res) {
    const quartoExcluido = await Quarto.findByIdAndDelete(req.params.id)
    if (quartoExcluido) {
        res.json({
            mensagem: "Quarto excluido com sucesso!",
            quartoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Quarto não encontrado!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
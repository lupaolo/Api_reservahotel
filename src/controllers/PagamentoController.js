const Pagamento = require('../models/Pagamento')

async function create(req, res) {
    const paga = new Pagamento(req.body)
    const pagaCriado = await paga.save()
    res.status(201).json(pagaCriado)
}

async function getAll(req, res) {
    res.json(await Pagamento.find().populate(['reserva']))
}

async function getById(req, res) {
    const paga = await Pagamento.findById(req.params.id).populate(['reserva'])
    if (paga) {
        res.json(paga)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrado!" })
    }
}

async function update(req, res) {
    const pagaAtulizado = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (pagaAtulizado) {
        res.json(pagaAtulizado)
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrado!" })
    }

}

async function remove(req, res) {
    const pagaExcluido = await Pagamento.findByIdAndDelete(req.params.id)
    if (pagaExcluido) {
        res.json({
            mensagem: "Pagamento excluido com sucesso!",
            pagaExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Pagamento não encontrado!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
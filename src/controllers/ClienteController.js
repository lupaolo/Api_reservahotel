const Cliente = require('../models/Cliente')

async function create(req, res) {
    const cliente = new Cliente(req.body)
    const clienteCriado = await cliente.save()
    res.status(201).json(clienteCriado)
}

async function getAll(req, res) {
    res.json(await Cliente.find())
}

async function getById(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    if (cliente) {
        res.json(cliente)
    } else {
        res.status(404).json({ mensagem: "Hóspede não encontrado!" })
    }
}

async function update(req, res) {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (clienteAtualizado) {
        res.json(clienteAtualizado)
    } else {
        res.status(404).json({ mensagem: "Hóspede  não encontrado!" })
    }

}

async function remove(req, res) {
    const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id)
    if (clienteExcluido) {
        res.json({
            mensagem: "Hóspede  excluido com sucesso!",
            clienteExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Hóspede  não encontrado!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
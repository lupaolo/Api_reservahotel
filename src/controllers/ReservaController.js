const Reserva = require('../models/Reserva')

async function create(req, res) {
    const reserva = new Reserva(req.body)
    const reservaCriado = await reserva.save()
    res.status(201).json(reservaCriado)
}

async function getAll(req, res) {
    res.json(await Reserva.find().populate(['cliente', 'quarto']))
}

async function getById(req, res) {
    const reserva = await Reserva.findById(req.params.id).populate(['cliente', 'quarto'])
    if (reserva) {
        res.json(reserva)
    } else {
        res.status(404).json({ mensagem: "Reserva não encontrada!" })
    }
}

async function update(req, res) {
    const reservaAtulizado = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (reservaAtulizado) {
        res.json(reservaAtulizado)
    } else {
        res.status(404).json({ mensagem: "Reserva não encontrada!" })
    }

}

async function remove(req, res) {
    const reservaExcluido = await Reserva.findByIdAndDelete(req.params.id)
    if (reservaExcluido) {
        res.json({
            mensagem: "Reserva excluida com sucesso!",
            reservaExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Reserva não encontrada!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
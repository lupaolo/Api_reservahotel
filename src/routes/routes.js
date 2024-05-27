const express = require('express')
const router = express.Router()

// controllers
const PagamentoController = require('../controllers/PagamentoController')
const AvaliacaoController = require('../controllers/AvaliacaoController')
const ClienteController = require('../controllers/ClienteController')
const QuartoController = require('../controllers/QuartoController')
const ReservaController = require('../controllers/ReservaController')

// validators
const { validarId } = require('../validators/IdValidator')
const { pagaValidador } = require('../validators/PagamentoValidator')
const { avaliacaoValidador } = require('../validators/AvaliacaoValidator')
const { clienteValidador } = require('../validators/ClienteValidator')
const { quartoValidador } = require('../validators/QuartoValidator')
const { reservaValidador } = require('../validators/ReservaValidator')

// Pagamentos
router.post('/pagamento', pagaValidador, PagamentoController.create)
router.get('/pagamento', PagamentoController.getAll)
router.get('/pagamento/:id', validarId, PagamentoController.getById)
router.put('/pagamento/:id', validarId, pagaValidador, PagamentoController.update)
router.delete('/pagamento/:id', validarId, PagamentoController.remove)

// Avaliações
router.post('/avaliacao', avaliacaoValidador, AvaliacaoController.create)
router.get('/avaliacao', AvaliacaoController.getAll)
router.get('/avaliacao/:id', validarId, AvaliacaoController.getById)
router.put('/avaliacao/:id', validarId, avaliacaoValidador, AvaliacaoController.update)
router.delete('/avaliacao/:id', validarId, AvaliacaoController.remove)

// Clientes
router.post('/cliente', clienteValidador, ClienteController.create)
router.get('/cliente', ClienteController.getAll)
router.get('/cliente/:id', validarId, ClienteController.getById)
router.put('/cliente/:id', validarId, clienteValidador, ClienteController.update)
router.delete('/cliente/:id', validarId, ClienteController.remove)

// Quartos
router.post('/quarto', quartoValidador, QuartoController.create)
router.get('/quarto', QuartoController.getAll)
router.get('/quarto/:id', validarId, QuartoController.getById)
router.put('/quarto/:id', validarId, quartoValidador, QuartoController.update)
router.delete('/quarto/:id', validarId, QuartoController.remove)

// Reservas
router.post('/reserva', reservaValidador, ReservaController.create)
router.get('/reserva', ReservaController.getAll)
router.get('/reserva/:id', validarId, ReservaController.getById)
router.put('/reserva/:id', validarId, reservaValidador, ReservaController.update)
router.delete('/reserva/:id', validarId, ReservaController.remove)


module.exports = router
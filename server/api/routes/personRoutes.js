const express = require('express');
const router = express.Router();

const repository = require('../repositories/personRepository');
const response = require('./response');

router.post('/', (req, res) => {
    repository.Add(req.body)
        .then(result => res.send(response.success))
        .catch(error => res.send(response.error))
});

router.get('/', (req, res) => {
    repository.GetAll()
        .then(result => res.send(response.success(result)))
        .catch(error => res.send(response.error))
});

router.get('/:id', (req, res) => {
    repository.GetById(req.params.id)
        .then(result => res.send(response.success(result)))
        .catch(error => res.send(response.error));
});

router.put('/:id', (req, res) => {
    repository.Update(req.params.id, req.body)
        .then(result => res.send(response.success))
        .catch(error => res.send(response.error));
});

router.delete('/:id', (req, res) => {
    repository.Remove(req.params.id)
        .then(result => res.send(response.success))
        .catch(error => res.send(response.error));
});

module.exports = router;
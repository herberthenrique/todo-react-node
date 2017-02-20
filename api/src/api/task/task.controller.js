'use strict';

const Task = require('./task.model');
const helper = require('../helpers/api.helper.js');

function index(req, res) {
	return Task.find().exec()
		.then(helper.respondWithResult(res))
		.catch(helper.handleError(res));
}

// Gets a single Task from the DB
function show(req, res) {
	return Task.findById(req.params.id).exec()
		.then(helper.handleEntityNotFound(res))
		.then(helper.respondWithResult(res))
		.catch(helper.handleError(res));
}

// Creates a new Task in the DB
function create(req, res) {
	console.log('req.body', req.body);
	return Task.create(req.body)
		.then(helper.respondWithResult(res, 201))
		.catch(helper.handleError(res));
}

// Updates an existing Task in the DB
function update(req, res) {
	if (req.body._id) {
		Reflect.deleteProperty(req.body, '_id');
	}
	return Task.findById(req.params.id).exec()
		.then(helper.handleEntityNotFound(res))
		.then(helper.saveUpdates(req.body))
		.then(helper.respondWithResult(res))
		.catch(helper.handleError(res));
}

// Deletes a Task from the DB
function destroy(req, res) {
	return Task.findById(req.params.id).exec()
		.then(helper.handleEntityNotFound(res))
		.then(helper.removeEntity(res))
		.catch(helper.handleError(res));
}

module.exports = {
	index,
	show,
	create,
	update,
	destroy
};

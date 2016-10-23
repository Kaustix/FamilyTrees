const Person = require('../models/person');
const logger = require('../logger');

exports.Add = (person) => {
    return new Promise((resolve, reject) => {
        let person = new Person(person);
        person.save((err) => {
            if (err) {
                const message = 'Failed to save person';
                logger.log(message, err);
                reject(message);
            }
            resolve();
        });
    });
};

exports.Update = (id, person) => {
    Person.update({_id: id}, person, (err) => {
        if (err) {
            const message = 'Failed to update person';
            logger.log(message, err);
            reject(message);
        }
        resolve();
    });
};

exports.Remove = (id) => {
    return new Promise((resolve, reject) => {
        Person.findByIdAndRemove(id, (err) => {
            if (err) {
                const message = 'Failed to remove person';
                logger.log(message, err);
                reject(message);
            }
            resolve();
        });
    })
};

exports.GetAll = () => {
    return new Promise((resolve, reject) => {
        Person.find({}, (err, persons) => {
            if (err) {
                const message = 'Failed to get all persons';
                logger.log(message, err);
                reject(message);
            }
            resolve(persons);
        });
    })
};

exports.GetById = (id) => {
    return new Promise((resolve, reject) => {
        Person.findById(id, (err, person) => {
            if (err) {
                const message = 'Failed to get user by id';
                logger.log(message, err);
                reject(message);
            }
            resolve(person);
        });
    });
};
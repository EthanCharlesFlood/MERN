const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateEventInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : "";

    if (!Validator.isLength(data.text, {min: 10, max: 300})) {
        errors.text = "Event name length must be between 10 and 300";
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = "Text field required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
const Joi = require("joi");

class AdminValidation {

    constructor() { }

    validateCreateProductBodyParams(data) {
        const response = {
            isValid: true,
            message: null
        };
        console.log("data", data);
        const schema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().required(),
            categoryId: Joi.number().required(),
        });
        const validateRes = schema.validate(data);
        if (validateRes && validateRes.error && validateRes.error.details) {
            response.isValid = false;
            response.message = validateRes.error.details[0].message;
        }
        return response;
    }
}
module.exports = new AdminValidation();
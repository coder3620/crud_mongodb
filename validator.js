const Joi = require('joi');

class UserValidator {
    async validate(data, schema) {
        try {
            const value = await schema.validateAsync(data);
            return value;
        } catch (error) {
            throw new Error(`Validation error: ${error.message}`);
        }
    }

    async validateCreateUser(data) {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number().integer().min(18).optional(),
            phone: Joi.string().pattern(new RegExp('^\\d{10}$')).required(),
        });
        return this.validate(data, schema);
    }

    async validateUpdateUser(data) {
        const schema = Joi.object({
            user_id: Joi.string().optional(),
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
            password: Joi.string().optional(),
            age: Joi.number().integer().optional(),
            phone: Joi.string().pattern(new RegExp('^\\d{10}$')).optional(),
        });
        return this.validate(data, schema);
    }

    async validateDeleteUser(data) {
        const schema = Joi.object({
            user_id: Joi.string().required(),
        });
        return this.validate(data, schema);
    }
}

module.exports = new UserValidator();

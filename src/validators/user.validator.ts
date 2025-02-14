import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]{3,10}$/).required().messages({
        "string.pattern.base": "Only chars allowed & this must be from 3 to 10 characters.",
    }),

    password: Joi.string().min(3).max(15).required().messages({
        "string.min": "password can be at least 3 chars",
        "string.max": "password cannot be gt 15 chars",
    })
});
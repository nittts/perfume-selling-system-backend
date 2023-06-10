import Joi from "joi";

const login = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "string.base": "O e-mail deve ser o texto válido.",
    "string.email": "E-mail Inválido.",
    "string.required": "Campo de e-mail é obrigatório.",
  }),
  password: Joi.string().required().messages({
    "string.base": "A senha deve ser o texto válido.",
    "string.required": "A senha é obrigatória.",
  }),
});

const forgot = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "string.base": "O e-mail deve ser o texto válido.",
    "string.email": "E-mail Inválido.",
    "string.required": "Campo de e-mail é obrigatório.",
  }),
  verifyMethod: Joi.string().valid("sms", "email", "whatsapp").required().messages({
    "string.base": "Método de validação deve ser um texto.",
    "string.valid": "Método de validação inválida.",
    "string.required": "Método de validação é obrigatório.",
  }),
});

export { login, forgot };

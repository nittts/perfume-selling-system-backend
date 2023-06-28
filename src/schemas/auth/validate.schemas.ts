import Joi from "joi";

const login = Joi.object()
  .keys({
    email: Joi.string().required().email().messages({
      "string.base": "O e-mail deve ser o texto válido.",
      "string.email": "E-mail Inválido.",
      "any.required": "Campo de e-mail é obrigatório.",
    }),
    password: Joi.string().required().messages({
      "string.base": "A senha deve ser o texto válido.",
      "any.required": "A senha é obrigatória.",
    }),
  })
  .options({ stripUnknown: true });

const logout = Joi.object()
  .keys({
    id: Joi.string().required().min(36).max(36).messages({
      "string.base": "Produto com nome inválido, verifique a escrita.",
      "string.max": "ID inválido para pesquisa.",
      "string.min": "ID inválido para pesquisa.",
      "any.required": "ID é obrigatório.",
    }),
  })
  .options({ stripUnknown: true });

const forgot = Joi.object()
  .keys({
    email: Joi.string().required().email().messages({
      "string.base": "O e-mail deve ser o texto válido.",
      "string.email": "E-mail Inválido.",
      "any.required": "Campo de e-mail é obrigatório.",
    }),
    verifyMethod: Joi.string().required().valid("sms", "email", "whatsapp").messages({
      "string.base": "Método de validação deve ser um texto.",
      "string.valid": "Método de validação inválida.",
      "any.required": "Método de validação é obrigatório.",
    }),
  })
  .options({ stripUnknown: true });

const otp = Joi.object()
  .keys({
    email: Joi.string().required().email().messages({
      "string.base": "O e-mail deve ser o texto válido.",
      "string.email": "E-mail Inválido.",
      "any.required": "Campo de e-mail é obrigatório.",
    }),
  })
  .options({ stripUnknown: true });

export { login, forgot, logout, otp };

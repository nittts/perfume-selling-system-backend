import Joi from "joi";
import userPermission from "../../helpers/enums/usersPermissions.enum";

const createUser = Joi.object().keys({
  name: Joi.string().required().messages({
    "string.base": "O nome deve ser um texto válido.",
    "any.required": "O nome é obrigatório.",
  }),
  phone: Joi.string().min(8).max(20).required().messages({
    "string.base": "O nome deve ser um texto válido.",
    "string.min": "Tamanho de numero inválido.",
    "string.max": "Tamanho de numero inválido.",
    "any.required": "O numero de telefone é obrigatório.",
  }),
  permissions: Joi.array()
    .valid(...Object.values(userPermission))
    .required()
    .messages({
      "array.base": "Valor não é uma lista de permissões válida.",
      "array.valid": "Permissões não permitidas encontradas.",
      "any.required": "A lista de permissões é obrigatória.",
    }),
  type: Joi.string().valid("ADMIN", "CLIENT").required().messages({
    "string.base": "Tipo de usuário inválido.",
    "string.valid": "Tipo de usuário inválido, apenas ADMIN ou CLIENT permitido.",
    "any.required": "Tipo de usuário é um campo obrigatório.",
  }),
  auth: Joi.object({
    otp: Joi.number().messages({
      "number.base": "tipo de código OTP inválido.",
    }),
    email: Joi.string().email().required().messages({
      "string.base": "Tipo de email inválido.",
      "string.email": "E-mail inválido, verifique novamente.",
      "any.required": "E-mail é um campo obrigatório.",
    }),
    password: Joi.string().required().messages({
      "string.base": "A senha deve ser o texto válido.",
      "any.required": "A senha é obrigatória.",
    }),
  }),
});

export { createUser };

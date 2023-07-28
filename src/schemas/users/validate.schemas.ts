import Joi from "joi";
import userPermission from "../../helpers/enums/usersPermissions.enum";

const createUser = Joi.object()
  .keys({
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
      .items(Joi.number().valid(...Object.values(userPermission)))
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
  })
  .options({ stripUnknown: true });

const updateUser = Joi.object()
  .keys({
    name: Joi.string().messages({
      "string.base": "O nome deve ser um texto válido.",
    }),
    phone: Joi.string().min(8).max(20).messages({
      "string.base": "O nome deve ser um texto válido.",
      "string.min": "Tamanho de numero inválido.",
      "string.max": "Tamanho de numero inválido.",
    }),
    permissions: Joi.array()
      .items(Joi.number().valid(...Object.values(userPermission)))
      .messages({
        "array.base": "Valor não é uma lista de permissões válida.",
        "array.valid": "Permissões não permitidas encontradas.",
      }),
    accPaid: Joi.number().min(0).messages({
      "number.base": "A quantidade a ser paga deve ser um valor válido.",
      "number.min": "Valor inválido.",
    }),
    accNotPaid: Joi.number().min(0).messages({
      "number.base": "A quantidade a ser paga deve ser um valor válido.",
      "number.min": "Valor inválido.",
    }),
    type: Joi.string().valid("ADMIN", "CLIENT").messages({
      "string.base": "Tipo de usuário inválido.",
      "string.valid": "Tipo de usuário inválido, apenas ADMIN ou CLIENT permitido.",
    }),
    auth: Joi.object({
      email: Joi.string().email().messages({
        "string.base": "Tipo de email inválido.",
        "string.email": "E-mail inválido, verifique novamente.",
      }),
      password: Joi.string().messages({
        "string.base": "A senha deve ser o texto válido.",
      }),
    }),
    online: Joi.boolean().messages({
      "boolean.base": "Status de ativo do usuário inválido.",
    }),
    active: Joi.string().valid("A", "I").messages({
      "string.base": "Tipo de usuário inválido.",
      "string.valid": "Tipo de usuário inválido, apenas Ativo('A') ou Inativo('I') permitido.",
    }),
  })
  .options({ stripUnknown: true });

const usersFilters = Joi.object()
  .keys({
    id: Joi.string().min(36).max(36).messages({
      "string.base": "Produto com nome inválido, verifique a escrita.",
      "string.max": "ID inválido para pesquisa.",
      "string.min": "ID inválido para pesquisa.",
    }),
    name: Joi.string().messages({
      "string.base": "O nome deve ser um texto válido.",
    }),
    phone: Joi.string().min(8).max(20).messages({
      "string.base": "O nome deve ser um texto válido.",
      "string.min": "Tamanho de numero inválido.",
      "string.max": "Tamanho de numero inválido.",
    }),
    permissions: Joi.array()
      .items(Joi.number().valid(...Object.values(userPermission)))
      .messages({
        "array.base": "Valor não é uma lista de permissões válida.",
        "array.valid": "Permissões não permitidas encontradas.",
      }),
    type: Joi.string().valid("ADMIN", "CLIENT").messages({
      "string.base": "Tipo de usuário inválido.",
      "string.valid": "Tipo de usuário inválido, apenas ADMIN ou CLIENT permitido.",
    }),
    "auth.email": Joi.string().email().messages({
      "string.base": "Tipo de email inválido.",
      "string.email": "E-mail inválido, verifique novamente.",
    }),
    online: Joi.boolean().messages({
      "boolean.base": "Status de ativo do usuário inválido.",
    }),
    active: Joi.string().valid("A", "I").messages({
      "string.base": "Tipo de usuário inválido.",
      "string.valid": "Tipo de usuário inválido, apenas Ativo('A') ou Inativo('I') permitido.",
    }),
  })
  .options({ stripUnknown: true });

export { createUser, updateUser, usersFilters };

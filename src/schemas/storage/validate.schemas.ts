import Joi from "joi";

const ProductsFilters = Joi.object().keys({
  buyingValue: Joi.number().min(0).max(9999999).messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
  }),
  resellValue: Joi.number().min(0).max(9999999).messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
  }),
  name: Joi.string().messages({
    "string.base": "Produto com nome inválido, verifique a escrita.",
  }),
  id: Joi.string().min(36).max(36).messages({
    "string.base": "Produto com nome inválido, verifique a escrita.",
    "string.max": "ID inválido para pesquisa.",
    "string.min": "ID inválido para pesquisa.",
  }),
  category: Joi.string().min(36).max(36).messages({
    "string.base": "ID de categoria inválido, verifique a escrita.",
    "string.max": "ID inválido para pesquisa.",
    "string.min": "ID inválido para pesquisa.",
  }),
  resellerProductId: Joi.string().max(128).messages({
    "string.base": "ID de referência inválido, verifique a escrita.",
    "string.max": "ID inválido para pesquisa.",
  }),
  resellerId: Joi.string().min(36).max(36).messages({
    "string.base": "ID de categoria inválido, verifique a escrita.",
    "string.max": "ID inválido para pesquisa.",
    "string.min": "ID inválido para pesquisa.",
  }),
  discount: Joi.boolean().messages({
    "boolean.base": "Valor de desconto deve ser apenas verdadeiro ou falso.",
  }),
});

const ProductCreate = Joi.object().keys({
  buyingValue: Joi.number().min(0).max(9999999).required().messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
    "any.required": "Valor de compra é necessário.",
  }),
  resellValue: Joi.number().min(0).max(9999999).messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
    "any.required": "Valor de revenda é necessário.",
  }),
  name: Joi.string().required().messages({
    "string.base": "Produto com nome inválido, verifique a escrita.",
    "any.required": "Nome do Produto é necessário.",
  }),
  category: Joi.string().min(36).max(36).required().messages({
    "string.base": "ID de categoria inválido, verifique a escrita.",
    "string.max": "ID inválido para criação.",
    "string.min": "ID inválido para criação.",
    "any.required": "Categoria do Produto é necessário.",
  }),
  resellerProductId: Joi.string().max(128).required().messages({
    "string.base": "ID de referência inválido, verifique a escrita.",
    "string.max": "ID de referência inválido para criação.",
    "any.required": "ID de referência é necessário.",
  }),
  resellerId: Joi.string().min(36).max(36).required().messages({
    "string.base": "ID de categoria inválido, verifique a escrita.",
    "string.max": "ID inválido para criação.",
    "string.min": "ID inválido para criação.",
    "any.required": "Revendedor é necessário.",
  }),
  discount: Joi.boolean().messages({
    "boolean.base": "Valor de desconto deve ser apenas verdadeiro ou falso.",
  }),
  discountAmmount: Joi.number().max(100).min(0).messages({
    "number.base": "Valor de desconto deve ser um número válido.",
    "number.max": "Valor de desconto não pode ultrapassar 100%.",
    "number.min": "Valor de desconto não pode ser menor que 0%",
  }),
});

const ProductEdit = Joi.object().keys({
  buyingValue: Joi.number().min(0).max(9999999).messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
  }),
  resellValue: Joi.number().min(0).max(9999999).messages({
    "number.base": "Valor deve ser um número.",
    "number.min": "Valor deve ser acima de zero.",
    "number.max": "Valor deve ser um número válido.",
  }),
  name: Joi.string().messages({
    "string.base": "Produto com nome inválido, verifique a escrita.",
  }),
  category: Joi.string().min(36).max(36).messages({
    "string.base": "ID de categoria inválido, verifique a escrita.",
    "string.max": "ID inválido para edição.",
    "string.min": "ID inválido para edição.",
  }),
  resellerProductId: Joi.string().max(128).messages({
    "string.base": "ID de referência inválido, verifique a escrita.",
    "string.max": "ID inválido para edição.",
  }),
  discount: Joi.boolean().messages({
    "boolean.base": "Valor de desconto deve ser apenas verdadeiro ou falso.",
  }),
  discountAmmount: Joi.number().max(100).min(0).messages({
    "number.base": "Valor de desconto deve ser um número válido.",
    "number.max": "Valor de desconto não pode ultrapassar 100%.",
    "number.min": "Valor de desconto não pode ser menor que 0%",
  }),
});

export { ProductsFilters, ProductCreate, ProductEdit };

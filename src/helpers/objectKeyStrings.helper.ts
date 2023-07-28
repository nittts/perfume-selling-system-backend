import { LooseObject } from "../@types";

function createObjectFromStrings(keys: string[]) {
  let obj: LooseObject = {};

  for (let key of keys) {
    let putInto = obj;
    let tokens = key.split(".");
    for (let i = 0; i < tokens.length; i++) {
      let name = tokens[i];
      let value = i === tokens.length - 1 ? "" : {};
      putInto[name] = putInto[name] || value;
      putInto = putInto[name];
    }
  }
  return obj;
}

function convertKeysToString(obj: LooseObject, parentKey: string = "", result: LooseObject = {}) {
  for (const key in obj) {
    const value = obj[key];
    const currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (Array.isArray(value)) {
      // Se o valor é um array, mantenha a chave original sem modificar
      result[currentKey] = value;
    } else if (typeof value === "object" && value !== null) {
      // Se o valor é um objeto, faça uma chamada recursiva para transformar seus valores em "dot notation"
      convertKeysToString(value, currentKey, result);
    } else {
      // Se o valor é um valor primitivo, faça a transpilação para "dot notation"
      result[currentKey] = value;
    }
  }

  return result;
}

export { createObjectFromStrings, convertKeysToString };

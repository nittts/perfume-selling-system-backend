const parseBool = (params: unknown | string) => {
  return !(params === "false" || params === "0" || params === "" || params === undefined);
};

export { parseBool };

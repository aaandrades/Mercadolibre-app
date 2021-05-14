export const currencyPipe = (currency, currencyType) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currencyType,
  });
  const integer = formatter.format(currency).toString().split(",")[0];
  let decimals = formatter.format(currency).toString().split(",")[1];
  decimals = decimals === "00" ? undefined : "," + decimals;
  return {
    integer,
    decimals,
  };
};

export const conditionPipe = (condition) =>
  condition === "new" ? "Nuevo" : "Usado";

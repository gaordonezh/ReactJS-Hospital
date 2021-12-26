const formatMoney = (value) => {
  /*   let f = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }); */
  let f = new Intl.NumberFormat("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `S/. ${f}`;
  //return f.format(value);
};
export default formatMoney;

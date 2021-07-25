const coupons = [
  {
    name: "vip",
    discount: 30,
  },
  {
    name: "medio",
    discount: 20,
  },
  {
    name: "basico",
    discount: 15,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - parseFloat(descuento);
  const PrecioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return PrecioConDescuento;
}
// console.log({precioOrinal,descuento,porcentajePrecioDescuento,PrecioConDescuento});

function onclickButtonPriceDiscount() {
  const inputprice = document.getElementById("inputPrice");
  const inputDiscount = document.getElementById("inputDiscount");
  const Resultado = document.getElementById("resultado");
  const inputValue = inputprice.value;
  const couponValid = coupons.find(function (coupon) {
    return coupon.name === inputDiscount.value;
  });

  // console.log(couponValid)
  if (!couponValid) {
    Resultado.innerText = `El cupon ingresado no existe, verificalo por favor.`;
  } else {
    const precioFinal = calcularPrecioConDescuento(
      inputValue,
      couponValid.discount
    );
    Resultado.innerText = `El precio final de tu producto es ${precioFinal}$`;
  }
}

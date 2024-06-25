import iconCart from "../../assets/images/icon-cart.svg";
import ItemListContainer from "../ItemListContainer";

function CartWidget() {
  return (
    <div className="CartWidget">
      <button className="cartButton">
        <img src={iconCart} alt="Carrinho" />
      </button>
      <ItemListContainer greeting="Olá!" />
    </div>
  );
}

export default CartWidget;

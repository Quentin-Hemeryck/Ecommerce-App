import { Button } from "react-bootstrap";
import { useState } from "react";
import { useCart } from "../Cart/CartContext";
import "../../App.css";

function ProductItemForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (event) => {
    const value = event.target.value;

    if (value === "") return;

    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setQuantity(parsedValue);
    }
  };

  const handleBlur = () => {
    if (quantity < 1 || isNaN(quantity)) {
      setQuantity(1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <label htmlFor="quantity" style={{ fontSize: "0.9rem" }}>Amount</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
        onBlur={handleBlur}
        style={{ maxWidth: "100px", margin: "0 5px" }}
      />
      <Button variant="primary" type="submit" disabled={product.isOutOfStock}>Add</Button>
    </form>
  );
}

export default ProductItemForm;

import { Button, Modal } from "react-bootstrap";
import { useCart } from "./CartContext";
import trashIcon from "../../assets/trash.svg"; 

function CartModal({ open, onClose }) {
  const { items, removeFromCart, clearCart } = useCart();

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <Modal show={open} onHide={onClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <table className="table table-striped table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price (€)</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(item)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <img src={trashIcon} alt="Remove" style={{ width: "20px", height: "20px", filter: "brightness(0) saturate(100%) invert(20%)"}} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Utilisation de Math.round pour arrondir le total à deux décimales car sinon erreur JS*/}
            <h4 className="text-end fw-bold">Total Amount : {Math.round(items.reduce((sum, item) => sum + item.price * item.quantity, 0)* 100)/100}€</h4>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={clearCart} disabled={items.length === 0}>
          Clear Cart
        </Button>
        <Button 
          variant="success" 
          onClick={() => {
            alert('Your order has been successfully placed!');
            clearCart(); // Vide le panier après la commande
            onClose(); // Ferme la modale
          }} 
          disabled={items.length === 0}
        >
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
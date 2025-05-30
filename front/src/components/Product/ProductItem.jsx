import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItemForm from "./ProductItemForm";

function ProductItem(props) {
  const product = {
    _id: props.id || props.key,
    name: props.name,
    price: props.price,
    image: props.image,
    quantity: props.quantity,
    sold: props.sold,
    isOutOfStock: props.isOutOfStock,
  };

  return (
    <Card className="h-100">
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Img variant="top" src={props.image} alt={props.name} style={{objectFit: "contain", width: "100%", height: "200px", padding: "1rem"}} />
        <Card.Body >
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.price} €</Card.Text> {/*J'aurais pu utiliser toFixed pour déterminer le nbr de chiffres après la virgule */}
        </Card.Body>
      </Link>
      <div className="mt-auto">
        <ProductItemForm product={product} />
      </div>
    </Card>
  );
}

export default ProductItem;
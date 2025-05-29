import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = "http://127.0.0.1:3000/api";

    axios
      .get(`${API_URL}/product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unable to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <img src={product.mainImage} alt={product.name} style={{ width: "150px", height: "150px", objectFit: "cover"}} />
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} - ${index + 1}`}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>
      <p>Prix : {product.price}€</p>
      <p>Description : {product.description}</p>
      <p>Quantité disponible : {product.quantity - product.sold}</p>
      <p>
        Statut :{" "}
        {product.isOutOfStock ? (
          <span style={{ color: "red", fontWeight: "bold" }}>Rupture de stock</span>
        ) : (
          <span style={{ color: "green", fontWeight: "bold" }}>En stock</span>
        )}
      </p>
    </div>
  );
}

export default ProductDetails;
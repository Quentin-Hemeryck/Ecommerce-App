import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
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
      .catch(() => {
        setError("Impossible de charger les détails du produit.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#007bff",
          padding: "8px 16px",
          borderRadius: "5px",
          display: "inline-block",
          marginBottom: "20px"
        }}
      >
        ← Retour à la boutique
      </Link>

      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{product.name}</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "nowrap",
          marginBottom: "20px",
          overflowX: "auto"
        }}
      >
        {[product.mainImage, ...product.images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} - ${index}`}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              border: "1px solid #ddd"
            }}
          />
        ))}
      </div>

      <p style={{ fontSize: "1.2rem" }}>
        <strong>Prix :</strong> {product.price}€
      </p>
      <p><strong>Description :</strong> {product.description}</p>
      <p><strong>Quantité disponible :</strong> {product.quantity - product.sold}</p>
      <p>
        <strong>Statut :</strong>{" "}
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

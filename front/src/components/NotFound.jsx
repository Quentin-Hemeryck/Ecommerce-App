import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist or may have been moved.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Click this link
      </Link> to return to the homepage.
    </div>
  );
}

export default NotFound;
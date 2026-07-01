import "./ErrorPage.css";
import { Header } from "../components/Header";

export function ErrorPage({ cart }) {
  return (
    <div className="error-page">
      <div className="grid-floor" />
      <div className="noise-block" />
      <div className="noise-block" style={{ animationDelay: '1.2s' }} />
      <div className="noise-block" style={{ animationDelay: '3.7s' }} />
      
      <Header cart={cart} />
      <h1>Page Not Found</h1>
      <h2>
        404
        <span className="glitch-layer-1" />
        <span className="glitch-layer-2" />
      </h2>
      <a href="/" className="home-link">
        Back to Home
      </a>
    </div>
  );
}
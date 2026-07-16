import "./ErrorPage.css";
import { Header } from "../components/Header";

export function ErrorPage({ cart }) {
  return (
    <div className="error-page">
      <div className="tear-bar" />
      <div className="tear-bar" style={{ animationDelay: '1.4s' }} />
      <div className="tear-bar" style={{ animationDelay: '2.8s' }} />
      
      <Header cart={cart} />
      <h1>Page Not Found</h1>
      <h2>
        404
        <span className="glitch-layer-1" />
        <span className="glitch-layer-2" />
        <span className="glitch-layer-3" />
      </h2>
      <a href="/" className="home-link">
        Back to Home
      </a>
    </div>
  );
}
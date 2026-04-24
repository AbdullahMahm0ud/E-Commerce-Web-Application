import './ErrorPage.css'
import { Header } from '../components/Header'

export function ErrorPage() {
    return (
        <div className="error-page">
            <Header />
            <h1>Page Not Found</h1>
            <h2>404</h2>
            <a href="/" className="home-link">Back to Home</a>
        </div>
    )
}
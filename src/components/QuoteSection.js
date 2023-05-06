import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function QuoteSection() {
    return (
        <div className="section quote">
            <p className="quote-text"> <FontAwesomeIcon icon={faQuoteLeft} className="quote-img" /> Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.</p>
            <p className="quote-author">- Anthony Bourdain</p>
        </div>
    )
}
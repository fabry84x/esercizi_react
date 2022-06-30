import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div>
            <h1>Page Does Not Exists</h1>
            <Link to="/">Homepage</Link>
        </div>
        
    )
}
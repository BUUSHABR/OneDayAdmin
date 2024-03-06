import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const auth = localStorage.getItem("USERKEY") ? true : false; // Check if the user is authenticated
    return auth ? children : <Navigate to="/login" />; // Render children if authenticated, otherwise navigate to login
}

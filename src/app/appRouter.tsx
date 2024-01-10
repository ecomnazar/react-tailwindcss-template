import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";

export const appRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <App />
    }
])
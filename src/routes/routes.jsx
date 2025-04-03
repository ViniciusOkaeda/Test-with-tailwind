import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "../theme/theme-context";

import Layout from "../theme/layout";
import HomePage from "../pages/home/home";
import CustomerPage from "../pages/user/customer";
import CustomerEditPage from "../pages/user/edit/customer-edit";
import CustomerRegisterPage from "../pages/user/register/customer-register";

function MyRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytics</h1>,
                },
                {
                    path: "customers",
                    element: <CustomerPage />,
                },
                {
                    path: "customers/edit/:id",
                    element: <CustomerEditPage />
                },
                {
                    path: "new-customer",
                    element: <CustomerRegisterPage />,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customers</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "*",
                    element: <h1 className="title">Não encontrado</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default MyRoutes
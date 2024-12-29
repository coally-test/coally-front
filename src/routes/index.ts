import { createBrowserRouter } from "react-router-dom";


import { ALL_ROUTES } from "@/constants/routes";
import { Login } from "@/pages/Auth/Login";
import { Register } from "@/pages/Auth/Register";
import { AuthLayout } from "@/components/layouts/Auth";
// import { LoginPage, RegisterPage } from "@/pages/Auth";
// import { CoreLayout } from "@/layouts/CoreLayout";
// import { HomePage } from "@/pages/Core/Home";
// import { ContentPage } from "@/pages/Core/Content";

export const router = createBrowserRouter([
    {
        path: ALL_ROUTES.AUTH.BASE,
        Component: AuthLayout,
        children: [
            {
                path: ALL_ROUTES.AUTH.LOGIN,
                Component: Login,
            },
            {
                path: ALL_ROUTES.AUTH.REGISTER,
                Component: Register,
            },
        ],
    },
])

export default router
import { createBrowserRouter } from "react-router-dom";


import { ALL_ROUTES } from "@/constants/routes";
import { Login } from "@/pages/Auth/Login";
import { Register } from "@/pages/Auth/Register";
import { AuthLayout } from "@/components/layouts/Auth";
import { CoreLayout } from "@/components/layouts/Core";
import { Home } from "@/pages/Core/home/home";
import { CreateTask } from "@/pages/Core/create";


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
    {
        path: ALL_ROUTES.CORE.BASE,
        Component: CoreLayout,
        children: [
            {
                path: ALL_ROUTES.CORE.HOME,
                Component: Home
            },
            {
                path: ALL_ROUTES.CORE.CREATE,
                Component: CreateTask
            }
        ]
    }
])

export default router
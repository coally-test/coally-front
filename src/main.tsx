import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Fragment } from 'react/jsx-runtime'
import router from './routes'
import '@/assets/styles/globals.scss'
import "daisyui/dist/full.css";
import "react-toastify/dist/ReactToastify.css";



createRoot(document.getElementById('root')!).render((
    <Fragment>
        <RouterProvider router={router} />
        <ToastContainer />
    </Fragment>
))

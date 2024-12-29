import { registerServices } from "@/services/auth/auth-services"
import { IBodyRegister } from "@/services/auth/auth-types"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const useRegister = () => {

    const form = useForm<IBodyRegister>()
    const [loading, setLoading] = useState(false)
    const goPage = useNavigate()

    const register = async (form: IBodyRegister) => {

        try {
            await registerServices(form)

            toast('usuario registrado con exito')

            goPage('/')

        } catch (error: any) {

            toast(`${error.message ? error.message : 'erorr in register user'}`)


        } finally {
            setLoading(false)
        }
    }


    return {
        form,
        loading,
        register
    }
}
import { useState } from "react"
import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { useSessionStore } from "@/store/session"

import { IBodyLogin } from "@/services/auth/auth-types"
import { loginServices } from "@/services/auth/auth-services"


export const useLogin = () => {

    const form = useForm<IBodyLogin>()
    // const goPage = useNavigate()

    const [loading, setLoading] = useState(false)

    const { setToken, setUser } = useSessionStore()


    const login = async (form: IBodyLogin) => {

        setLoading(true)

        try {

            const { user, token } = await loginServices(form)

            setToken(token)

            setUser(user)

            toast(`Bienvenido ${user.username}`)

            // goPage('/task')


        } catch (error: any) {

            console.log(error, 'asdadd')

            toast(error.message ? error.message : 'error in login services')

        } finally {

            setLoading(false)
        }

    }

    return {
        login,
        loading,
        form
    }
}
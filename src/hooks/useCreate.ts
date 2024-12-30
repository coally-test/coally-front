import { createTaskServices } from "@/services/task"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { toast } from "react-toastify"

export type FormCreateTask = {
    title: string,
    description?: string
}


export const useCreate = ({ form }: { form: UseFormReturn<FormCreateTask> }) => {

    const [loadCreate, setLoadCreate] = useState(false)

    const createTask = async () => {

        setLoadCreate(true)

        try {

            await createTaskServices(form.getValues())

            toast('Nueva tarea creada exitosamente')


        } catch (error: any) {
            toast(`${error.message ? error.message : 'error in create task'}`)

            form.reset({})

        } finally {
            setLoadCreate(false)
        }
    }

    return {
        loadCreate,
        createTask
    }
}
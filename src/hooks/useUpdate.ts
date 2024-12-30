import { toast } from "react-toastify"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"

import { FormCreateTask } from "./useCreate"

import { updateTaskServices } from "@/services/task"

export const useUpdate = ({ form }: { form: UseFormReturn<FormCreateTask> }) => {

    const [loadUpdate, setLoadUpdate] = useState(false)


    const updateTask = async ({ id }: { id: string }) => {

        setLoadUpdate(true)
        try {

            await updateTaskServices(id, form.getValues())

            form.reset({
                title: '',
                description: ''
            })

            toast('Tarea Actualizada')

        } catch (error: any) {

            toast(`${error.message ? error.message : 'error in update task'}`)

        } finally {

            setLoadUpdate(false)
        }
    }

    const updateStatus = async ({ id, statusActual }: { id: string, statusActual: boolean }) => {
        setLoadUpdate(true)
        try {

            await updateTaskServices(id, { completed: !statusActual })

            form.reset({
                title: '',
                description: ''
            })

            toast('Tarea Actualizada')

        } catch (error: any) {

            toast(`${error.message ? error.message : 'error in update task'}`)

        } finally {

            setLoadUpdate(false)
        }
    }

    return {
        loadUpdate,
        updateTask,
        updateStatus
    }
}
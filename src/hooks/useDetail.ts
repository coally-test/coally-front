import { ITask } from "@/interfaces/ITask"
import { getByIdServices } from "@/services/task"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { toast } from "react-toastify"
import { FormCreateTask } from "./useCreate"

export const useDetail = ({ form }: { form: UseFormReturn<FormCreateTask> }) => {

    const [loadDetail, setLoadDetail] = useState(false)
    const [task, setTask] = useState<Partial<ITask>>({})


    const getByIdTask = async ({ id }: { id: string }) => {

        setLoadDetail(true)

        try {

            const taskById = await getByIdServices(id)

            form.reset({
                title: taskById.title,
                description: taskById.description
            })

            setTask(taskById)


        } catch (error: any) {

            toast(`${error.message ? error.message : 'error in delete'}`)

        } finally {
            setLoadDetail(false)
        }
    }
    return {
        getByIdTask,
        loadDetail,
        task
    }
}
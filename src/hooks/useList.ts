import { useState } from "react"
import { toast } from "react-toastify"
import { ITask } from "@/interfaces/ITask"
import { getListTaskServices } from "@/services/task"

export const useListTask = () => {

    const [loading, setLoading] = useState(false)

    const [taskList, setTaskList] = useState<ITask[]>([])


    const getTaskList = async () => {

        setLoading(true)

        try {

            const data = await getListTaskServices()

            setTaskList(data)

        } catch (error: any) {

            toast(error.message ? error.message : 'error in get list')

        } finally {

            setLoading(false)

        }
    }
    return {
        taskList,
        loading,
        getTaskList,
    }
}
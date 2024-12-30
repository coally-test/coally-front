import { deleteTaskServices } from "@/services/task"
import { useState } from "react"
import { toast } from "react-toastify"
import { useListTask } from "./useList"

export const useDelete = () => {

    const [loadDelete, setLoadDelete] = useState(false)

    const { getTaskList } = useListTask()

    const deleteTask = async ({ id }: { id: string }) => {

        setLoadDelete(true)

        try {

            await deleteTaskServices(id)
            await getTaskList()

            toast('tarea eleminada')

        } catch (error: any) {

            toast(`${error.message ? error.message : 'error in delete'}`)

        } finally {
            setLoadDelete(false)
        }
    }

    return {
        deleteTask,
        loadDelete
    }
}
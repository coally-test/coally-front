import { FC } from "react";
import { ITask } from "@/interfaces/ITask";
import { useDrawerStore } from "@/store/drawer";
import { useDetail } from "@/hooks/useDetail";
import { useDelete } from "@/hooks/useDelete";
import { FormCreateTask } from "@/hooks/useCreate";
import { UseFormReturn } from "react-hook-form";
import { useTaskStore } from "@/store/taskList";

interface TaskActionsProps {
    task: ITask;
    onRefresh: () => void;
    form: UseFormReturn<FormCreateTask>
}

export const TaskActions: FC<TaskActionsProps> = ({ task, onRefresh, form }) => {
    const { toggleDrawer } = useDrawerStore();
    const { getByIdTask } = useDetail({ form });
    const { deleteTask } = useDelete();
    const { setTask } = useTaskStore()

    const handleEdit = () => {
        toggleDrawer("edit");
        getByIdTask({ id: task._id });
        setTask(task)
    };

    const handleDelete = async () => {
        await deleteTask({ id: task._id! });
        onRefresh();
    };

    return (
        <ul className="flex space-x-5">
            <li
                className="text-black hover:underline hover:text-red-700 cursor-pointer"
                onClick={handleEdit}
            >
                Editar
            </li>
            <li
                className="text-black hover:underline hover:text-red-700 cursor-pointer"
                onClick={handleDelete}
            >
                Eliminar
            </li>
        </ul>
    );
};

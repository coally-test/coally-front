import { ITableColumn } from "@/components/Table/table.types";
import { ITask } from "@/interfaces/ITask";
import { formatDate } from "@/uitls/formatDate";

export const BASE_COLUMNS_TASK: ITableColumn<ITask>[] = [
    {
        id: "_id",
        label: "ID",
        render: (task) => task._id,
    },
    {
        id: "createdAt",
        label: "Fecha de Creación",
        render: (task) => formatDate({ date: task.createdAt, view_time: false }),
    },
    {
        id: "title",
        label: "Título",
        render: (task) => task.title,
    },

    {
        id: "description",
        label: "Descripción",
        render: (task) => task.description,
    },
    {
        id: "completed",
        label: "Completada",
        render: (task) => (task.completed ? "Completada" : "No completada"),
    }
];
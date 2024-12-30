import { ITableColumn } from "@/components/Table/table.types";
import { ITask } from "@/interfaces/ITask";
import { formatDate } from "@/uitls/formatDate";

export const COLUMNS_TASK: ITableColumn<ITask>[] = [
    {
        id: "_id",
        label: 'ID',
        render: (task) => task._id
    },
    {
        id: 'createdAt',
        label: 'fecha de creacion',
        render: (task) => formatDate({ date: task.createdAt, view_time: false })
    },
    {
        id: 'title',
        label: 'Titulo',
        render: (task) => task.title
    },
    {
        id: 'completed',
        label: 'Complatada',
        render: (task) => task.completed ? 'Completada' : 'No completada'
    },
    {
        id: 'description',
        label: 'descricion',
        render: (task) => task.description
    }
]
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";

import { GenericTable } from "@/components/Table";
import { Button } from "@/components/Buttom";
import Drawer from "react-modern-drawer";
import { FormCreateTask } from "@/components/form/FormTask";

import { useDrawerStore } from "@/store/drawer";
import { useListTask } from "@/hooks/useList";
import { useCreate } from "@/hooks/useCreate";

import { BASE_COLUMNS_TASK } from "./constants/columns-task";
import { ITableColumn } from "@/components/Table/table.types";
import { ITask } from "@/interfaces/ITask";
import { TaskActions } from "./components/TaskActions";
import { useUpdate } from "@/hooks/useUpdate";
import { useTaskStore } from "@/store/taskList";

import styles from './styles.module.css';
import { DrawerContent } from "./components/DrawerContent";

export const Home = () => {
    const form = useForm<FormCreateTask>();
    const { isOpen, toggleDrawer, action } = useDrawerStore();

    const { loading, taskList, getTaskList } = useListTask();
    const { createTask } = useCreate({ form });
    const { updateTask, updateStatus } = useUpdate({ form })
    const { task } = useTaskStore()

    const handleActionCreate = async () => {
        await createTask();
        getTaskList();
        toggleDrawer();
    };

    const handleActionUpdate = async () => {
        await updateTask({ id: task._id! })
        getTaskList();
        toggleDrawer();
    }

    const handleChangeStatus = async () => {
        await updateStatus({ id: task._id!, statusActual: task.completed! })
        await getTaskList()
        toggleDrawer()
    }

    useEffect(() => {
        getTaskList();
    }, []);

    return (
        <Fragment>
            <div className="w-full space-y-10">
                <div className={styles.title}>Tablero</div>

                <div className="w-full flex justify-end items-center">
                    <Button title="Crear Tarea" onClick={() => {
                        toggleDrawer("create"),
                            form.reset({
                                title: '',
                                description: ''
                            })
                    }} />
                </div>

                <GenericTable
                    data={taskList}
                    loading={{ state: loading }}
                    columns={
                        [...BASE_COLUMNS_TASK,
                        {
                            id: "actions",
                            label: "Actions",
                            render: (task: ITask) => (
                                <TaskActions task={task} onRefresh={getTaskList} form={form} />
                            ),
                        }] as ITableColumn<ITask>[]
                    }
                />
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="!w-[350px] !bg-slate-500 !px-5"
            >
                <DrawerContent
                    action={action!}
                    form={form}
                    handleActionCreate={handleActionCreate}
                    handleActionUpdate={handleActionUpdate}
                    handleChangeStatus={handleChangeStatus}
                    isTaskCompleted={task?.completed}
                />
            </Drawer>
        </Fragment>
    );
};

import { FC } from "react";
import { FormTask, FormCreateTask } from "@/components/form/FormTask";
import { Button } from "@/components/Buttom";
import { UseFormReturn } from "react-hook-form";

interface DrawerContentProps {
    action: "create" | "edit";
    form: UseFormReturn<FormCreateTask>;
    handleActionCreate: () => Promise<void>;
    handleActionUpdate: () => Promise<void>;
    handleChangeStatus: () => void;
    isTaskCompleted?: boolean;
}

export const DrawerContent: FC<DrawerContentProps> = ({
    action,
    form,
    handleActionCreate,
    handleActionUpdate,
    handleChangeStatus,
    isTaskCompleted,
}) => {
    return (
        <div>
            <div className="text-2xl text-center my-10">{action === "create" ? "Crear" : "Actualizar"}</div>
            {action === "create" && (
                <FormTask
                    form={form}
                    service={handleActionCreate}
                />
            )}

            {action === "edit" && (
                <div className="flex flex-col justify-center items-center space-y-10">
                    <FormTask
                        isEdit
                        form={form}
                        service={handleActionUpdate}
                    />
                    <Button
                        title={isTaskCompleted ? "No Completada" : "Completada"}
                        onClick={handleChangeStatus}
                        variant={isTaskCompleted ? "error" : "success"}
                    />
                </div>
            )}
        </div>
    );
};

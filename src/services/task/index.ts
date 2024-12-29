import { COALLY_API, IBaseResponse } from "@/config/fetch";
import { ENDPOINTS } from '@/constants/endpoints';
import { ITask } from "@/interfaces/ITask";

const {
    TASK: {
        LIST,
        GET,
        DELETE,
        CREATE,
        UPDATE
    }
} = ENDPOINTS;

export const getListTaskServices = async () => {
    const { data } = await COALLY_API.GET<IBaseResponse<ITask[]>>({ endpoint: LIST });
    return data;
};

export const getByIdServices = async (id: string) => {
    const { data } = await COALLY_API.GET<IBaseResponse<ITask>>({ endpoint: `${GET}/${id}` });
    return data;
};

export const createTaskServices = async (task: Partial<ITask>) => {
    const { data } = await COALLY_API.POST<IBaseResponse<ITask>>({ endpoint: CREATE, body: task });
    return data;
};

export const updateTaskServices = async (id: string, task: Partial<ITask>) => {
    const { data } = await COALLY_API.PUT<IBaseResponse<ITask>>({ endpoint: `${UPDATE}/${id}`, body: task });
    return data;
};

export const deleteTaskServices = async (id: string) => {
    const { data } = await COALLY_API.DELETE<IBaseResponse<null>>({ endpoint: `${DELETE}/${id}` });
    return data;
};

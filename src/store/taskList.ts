import { ITask } from '@/interfaces/ITask';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ITaskStore {
    list: Partial<ITask>[];

    task: Partial<ITask>

    setList: (list: ITask[]) => void

    setTask: (task: ITask) => void
}

export const useTaskStore = create(
    persist<ITaskStore>(
        (set) => ({
            list: [],
            task: {},
            setTask: (task: Partial<ITask>) => set({ task }),
            setList: (list: ITask[]) => set({ list }),
        }),
        {
            name: 'task',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

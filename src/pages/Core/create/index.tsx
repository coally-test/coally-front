import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import { FormCreateTask, useCreate } from '@/hooks/useCreate'
import { FormTask } from '@/components/form/FormTask'


export const Task = () => {
    const form = useForm<FormCreateTask>()

    const { loadCreate, createTask } = useCreate({ form })

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Crear Tarea</h1>
                <FormTask
                    form={form}
                    service={createTask}
                    load={loadCreate}
                />
            </div>
        </div>
    )
}
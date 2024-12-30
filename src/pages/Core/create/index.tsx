import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import { Button } from '@/components/Buttom'
import { Input } from '@/components/Input'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { createTaskServices } from '@/services/task'

type FormCreateTask = {
    title: string,
    description?: string
}

export const CreateTask = () => {
    const form = useForm<FormCreateTask>()
    const [load, setLoad] = useState(false)

    const createTask = async (body: FormCreateTask) => {

        setLoad(true)
        try {

            await createTaskServices(body)

            toast('Nueva tarea creada exitosamente')


        } catch (error: any) {
            toast(`${error.message ? error.message : 'error in create task'}`)

            form.reset({})

        } finally {
            setLoad(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Crear Tarea</h1>
                <form className='flex flex-col justify-center items-center w-full space-y-7' onSubmit={form.handleSubmit(createTask)}>
                    <Input
                        form={form}
                        label='Titulo'
                        name='title'
                        validation={{ required: "usuario es requerido" }}
                    />
                    <Input
                        form={form}
                        label='Descripcion'
                        name='description'
                        validation={{ required: "correo es requerido" }}
                    />

                    <Button
                        title='Crear Tarea'
                        variant='success'
                        onClick={() => form.handleSubmit(createTask)}
                        type='submit'
                        disabled={load}
                    />
                </form>
            </div>
        </div>
    )
}
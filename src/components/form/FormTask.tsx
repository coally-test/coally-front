import { UseFormReturn } from "react-hook-form"
import { Button } from "../Buttom"
import { Input } from "../Input"

export type FormCreateTask = {
    title: string,
    description?: string
}

type InyectProps = {
    form: UseFormReturn<FormCreateTask>
    isEdit?: boolean,
    service: (body: FormCreateTask) => Promise<void>,
    load?: boolean
}

export const FormTask = ({ form, isEdit, service, load }: InyectProps) => {

    return (
        <form className='flex flex-col justify-center items-center w-full space-y-7' onSubmit={form.handleSubmit(service)}>
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
            />

            <Button
                title={isEdit ? 'Editar' : 'Crear'}
                variant='success'
                onClick={() => form.handleSubmit(service)}
                type='submit'
                disabled={load}
            />
        </form>
    )
}
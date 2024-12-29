import { useNavigate } from 'react-router-dom';

import { Input } from '@/components/Input'
import styles from './styles.module.scss'
import { Button } from '@/components/Buttom'

import { useRegister } from './useRegister';


export const Register = () => {
    const goPage = useNavigate();
    const { form, register, loading } = useRegister()

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Registrate</h1>
                <form className='flex flex-col justify-center items-center w-full space-y-7' onSubmit={form.handleSubmit(register)}>
                    <Input
                        form={form}
                        label='Usuario'
                        name='username'
                        validation={{ required: "usuario es requerido" }}
                    />
                    <Input
                        form={form}
                        label='Correo electronico'
                        name='email'
                        validation={{ required: "correo es requerido" }}
                    />
                    <Input
                        form={form}
                        label='Contrasena'
                        name='password'
                        type='password'
                        validation={{ required: "contrsena es requerida" }}
                    />
                    <Button
                        title='Registrate'
                        variant='success'
                        onClick={() => form.handleSubmit(register)}
                        type='submit'
                        disabled={loading}
                    />
                </form>
                <p className='text-center my-5'>Ya tienes una cuenta?{" "}
                    <span className='hover:underline hover:text-red-400 cursor-pointer' onClick={() => goPage('/')}>Inicia Sesion</span>
                </p>
            </div>
        </div>
    )
}
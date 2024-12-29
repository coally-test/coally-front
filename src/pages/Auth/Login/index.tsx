import { Input } from '@/components/Input'
import styles from './styles.module.scss'
import { Button } from '@/components/Buttom'
import { useNavigate } from 'react-router-dom';
import { useLogin } from './useLogin';


export const Login = () => {
    const goPage = useNavigate();
    const { login, loading, form } = useLogin()

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <form className='flex flex-col justify-center items-center w-full space-y-7' onSubmit={form.handleSubmit(login)}>
                    <Input
                        form={form}
                        label='Usuario o Correo electronico'
                        name='identifier'
                        validation={{ required: "Username is required" }}
                    />
                    <Input
                        form={form}
                        label='Contrasena'
                        type='password'
                        name='password'
                        validation={{ required: "Username is required" }}
                    />
                    <Button title='Inciar sesion' variant='success' type='submit' disabled={loading} />
                </form>
                <p className='text-center my-5'>No Tienes una cuenta?{" "}
                    <span className='hover:underline hover:text-red-400 cursor-pointer' onClick={() => goPage('/register')}>Registrate aqui</span>
                </p>
            </div>
        </div>
    )
}

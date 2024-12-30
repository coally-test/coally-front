import { useNavigate } from 'react-router-dom'

import { useSessionStore } from '@/store/session'

import logo from '@/assets/images/unnamed.png'
import iconProfile from '@/assets/icons/profile.svg'
import styles from './styles.module.scss'

export const SideNav = () => {
    const { setToken, setUser, user } = useSessionStore()
    const goPage = useNavigate()

    const handleLogout = () => {
        goPage('/')
        setToken('')
        setUser({})
    }
    return (
        <div className={styles.container}>
            <div className='space-y-10'>
                <img src={logo} />
                <ul className='space-y-3'>
                    <li onClick={() => goPage('')} className='text-black hover:underline hover:text-blue-400 cursor-pointer'>Inicio</li>
                    <li onClick={() => goPage('create')} className='text-black hover:underline hover:text-blue-400 cursor-pointer'>Crear nueva tarea</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-center items-center space-y-3'>
                <div className={styles.profile}>
                    <img src={iconProfile} alt="icon-profile" />
                    <p>{user.username}</p>
                </div>
                <p
                    className='text-black hover:text-red-700 hover:underline cursor-pointer' onClick={handleLogout}>Cerrar Sesion
                </p>
            </div>
        </div>
    )
}
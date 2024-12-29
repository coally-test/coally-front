import { useNavigate } from 'react-router-dom'

import { useSessionStore } from '@/store/session'

import logo from '@/assets/images/unnamed.png'
import styles from './styles.module.scss'

export const SideNav = () => {
    const { setToken, setUser } = useSessionStore()
    const goPage = useNavigate()

    const handleLogout = () => {
        goPage('/')
        setToken('')
        setUser({})
    }
    return (
        <div className={styles.container}>
            <img src={logo} />
            <p className='text-black hover:text-red-700 hover:underline cursor-pointer' onClick={handleLogout}>Cerrar Sesion</p>
        </div>
    )
}
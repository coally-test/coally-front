import { GenericTable } from "@/components/Table"
import { useHome } from "./hooks/usehome"
import { COLUMNS_TASK } from "./constants/columns-task"

import styles from './styles.module.css'
import { useEffect } from "react"

export const Home = () => {
    const { loading, getTaskList, taskList } = useHome()

    useEffect(() => {
        getTaskList()
    }, [])

    return (
        <div className="w-full space-y-10">
            <div className={styles.title}>Tablero</div>
            <GenericTable
                data={taskList}
                loading={{
                    state: loading
                }}
                columns={COLUMNS_TASK}

            />
        </div>
    )
}
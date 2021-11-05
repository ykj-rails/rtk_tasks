import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import { fetchAsyncProf } from '../login/loginSlice'
import { selectTasks, fetchAsyncGet } from './taskSlice'
import styles from './TaskItem.module.css'

const TaskList = () => {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet())
      await dispatch(fetchAsyncProf())
    }
    fetchTaskProf()
  }, [dispatch])
  return (
    <div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList

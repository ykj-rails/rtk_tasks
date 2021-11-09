import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import { fetchAsyncProf } from '../login/loginSlice'
import { selectTasks, fetchAsyncGet } from './taskSlice'
import styles from './TaskItem.module.css'

const TaskList = () => {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((c) => c + 1)
  }
  useEffect(() => {
    const fetchTaskProf = async () => {
      await dispatch(fetchAsyncGet())
      await dispatch(fetchAsyncProf())
    }
    fetchTaskProf()
  }, [dispatch])

  return (
    <div>
      <button onClick={handleClick}>クリック</button>
      <div>
        {count}
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskList

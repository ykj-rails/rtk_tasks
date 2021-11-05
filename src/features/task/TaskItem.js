import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncDelete, selectTask, editTask } from './taskSlice'
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import styles from './TaskItem.module.css'

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.listItem}>
      <span
        className={styles.cursor}
        onClick={() => dispatch(selectTask(task))}
      >
        {task.title}
      </span>
      <div>
        <button
          onClick={() => dispatch(fetchAsyncDelete(task.id))}
          className={styles.taskIcon}
        >
          <BsTrash />
        </button>
        <button
          onClick={() => dispatch(editTask(task))}
          className={styles.taskIcon}
        >
          <FaEdit />
        </button>
      </div>
    </li>
  )
}

export default TaskItem

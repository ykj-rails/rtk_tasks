import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import styles from './TaskInput.module.css'

import {
  fetchAsyncCreate,
  fetchAsyncUpdate,
  editTask,
  selectEditedTask,
} from './taskSlice'

const TaskInput = () => {
  const dispatch = useDispatch()
  const editedTask = useSelector(selectEditedTask)

  const handleInputChange = (e) => {
    editedTask.id === 0
      ? dispatch(editTask({ id: 0, title: e.target.value }))
      : dispatch(editTask({ id: editedTask.id, title: e.target.value }))
  }

  const createClicked = () => {
    dispatch(fetchAsyncCreate(editedTask))
    dispatch(editTask({ id: 0, title: '' }))
  }
  const updateClicked = () => {
    dispatch(fetchAsyncUpdate(editedTask))
    dispatch(editTask({ id: 0, title: '' }))
  }

  const isDisabled = editedTask.title.length === 0

  return (
    <div>
      <input
        type="text"
        className={styles.taskInput}
        value={editedTask.title}
        onChange={handleInputChange}
        placeholder="Please input task"
      />
      <div className={styles.switch}>
        {editedTask.id === 0 ? (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={createClicked}
            color="primary"
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={updateClicked}
            color="primary"
          >
            Update
          </Button>
        )}
      </div>
    </div>
  )
}

export default TaskInput

import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import TaskList from './features/task/TaskList'
import styles from './App.module.css'
import TaskDetails from './features/task/TaskDetails'

function App() {
  const Logout = () => {
    localStorage.removeItem('localJWT')
    window.location.href = '/'
  }
  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={Logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
        <TaskList />
      </div>
      <div className={styles.appDetails}>
        <TaskDetails />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import Header from './features/login/Header'
import TaskList from './features/task/TaskList'
import TaskDetails from './features/task/TaskDetails'
import TaskInput from './features/task/TaskInput'
import styles from './App.module.css'

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
        <Header />
        <TaskInput />
        <TaskList />
      </div>
      <div className={styles.appDetails}>
        <TaskDetails />
      </div>
    </div>
  )
}

export default App

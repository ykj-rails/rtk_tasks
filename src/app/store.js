import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import loginReducer from '../features/login/loginSlice'
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    task: taskReducer,
  },
})

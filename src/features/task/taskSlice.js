import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'http://localhost:8000/api/tasks'
const token = localStorage.localJWT

export const fetchAsyncGet = createAsyncThunk('task/get', async () => {
  const res = await axios.get(apiUrl, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })
  return res.data
})

export const fetchAsyncCreate = createAsyncThunk('task/post', async (task) => {
  const res = await axios.post(apiUrl, task, {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return res.data
})

export const fetchAsyncUpdate = createAsyncThunk('task/put', async (task) => {
  const res = await axios.put(`${apiUrl}${task.id}`, task, {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return res.data
})

export const fetchAsyncDelete = createAsyncThunk('task/delete', async (id) => {
  const res = await axios.delete(`${apiUrl}${id}`, {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return id
})

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [
      {
        id: 0,
        title: '',
        created_at: '',
        updated_at: '',
      },
    ],
    editedTask: {
      id: 0,
      title: '',
      created_at: '',
      updated_at: '',
    },
    selectedTask: {
      id: 0,
      title: '',
      created_at: '',
      updated_at: '',
    },
  },
  reducers: {
    editTask(state, action) {
      state.editedTask = action.payload
    },
    selectTask(state, action) {
      state.selectedTask = action.payload
    },
  },
  extraReducers: (builder) => {},
})

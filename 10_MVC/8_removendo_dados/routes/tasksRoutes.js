import express, { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const tasksRoutes = new Router()

tasksRoutes.get('/', TaskController.showTask)
tasksRoutes.get('/add', TaskController.createTask)
tasksRoutes.post('/add', TaskController.createTaskSave)
tasksRoutes.post('/remove', TaskController.deleteTask)

export default tasksRoutes
import express, { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const tasksRoutes = new Router()

tasksRoutes.get('/', TaskController.showTask)
tasksRoutes.get('/add', TaskController.createTask)
tasksRoutes.post('/add', TaskController.createTaskSave)
tasksRoutes.get('/edit/:id', TaskController.updateTask)
tasksRoutes.post('/edit', TaskController.updateTaskSave)
tasksRoutes.post('/updatestatus', TaskController.toggleUpdateStatus)
tasksRoutes.post('/remove', TaskController.deleteTask)

export default tasksRoutes
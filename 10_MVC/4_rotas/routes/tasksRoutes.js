import express, { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const tasksRoutes = new Router()

tasksRoutes.get('/', TaskController.showTask)
tasksRoutes.get('/add', TaskController.createTask)

export default tasksRoutes
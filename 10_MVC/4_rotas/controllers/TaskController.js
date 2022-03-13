import Task from '../models/Tasks.js'

export default class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }
    static showTask(req, res) {
        res.render('tasks/all')
    }
}
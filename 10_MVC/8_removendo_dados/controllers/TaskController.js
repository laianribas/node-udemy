import Task from '../models/Tasks.js'

export default class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async showTask(req, res) {
        const tasks = await Task.findAll({ raw: true })
        res.render('tasks/all', { tasks })
    }

    static async deleteTask(req, res) {
        const { id } = req.body
        await Task.destroy({ where: { id: id } })
        res.redirect('/tasks')
    }
}
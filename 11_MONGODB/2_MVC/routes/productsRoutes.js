import { Router } from 'express'
import ProductController from '../controllers/ProductController.js'
const router = Router()

router.get('/', ProductController.showProducts)

export default router
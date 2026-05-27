import express from 'express'

import {
  toggleLessonProgress
} from '../controllers/progressController.js'

const router = express.Router()

router.post('/', toggleLessonProgress)

export default router
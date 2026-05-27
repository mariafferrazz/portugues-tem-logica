import express from 'express'

import {
  getCourses,
  createCourse,
  getCourseById
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', getCourses)

router.get('/:id', getCourseById)

router.post('/', createCourse)

export default router
import prisma from '../lib/prisma.js'

export async function getCourses(req, res) {

  try {

    const courses = await prisma.course.findMany()

    res.json(courses)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}

export async function createCourse(req, res) {

  try {

    const {
      title,
      description,
      thumbnail,
      price
    } = req.body

    const course = await prisma.course.create({
      data: {
        title,
        description,
        thumbnail,
        price
      }
    })

    res.status(201).json(course)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
export async function getCourseById(req, res) {

  try {

    const { id } = req.params

    const course = await prisma.course.findUnique({
      where: {
        id: Number(id)
      },

      include: {
        modules: {
          include: {
            lessons: {
  include: {
    progress: true
  }
}
          }
        }
      }
    })

    res.json(course)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
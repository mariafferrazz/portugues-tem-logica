import prisma from '../lib/prisma.js'

export async function createModule(req, res) {

  try {

    const {
      title,
      courseId
    } = req.body

    const module = await prisma.module.create({
      data: {
        title,
        courseId: Number(courseId)
      }
    })

    res.status(201).json(module)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
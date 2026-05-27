import prisma from '../lib/prisma.js'

export async function createLesson(req, res) {

  try {

    const {
      title,
      videoUrl,
      moduleId
    } = req.body

    const lesson = await prisma.lesson.create({
      data: {
        title,
        videoUrl,
        moduleId: Number(moduleId)
      }
    })

    res.status(201).json(lesson)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
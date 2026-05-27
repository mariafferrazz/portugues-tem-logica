import prisma from '../lib/prisma.js'

export async function toggleLessonProgress(req, res) {

  try {

    const {
      userId,
      lessonId
    } = req.body

    const existingProgress =
      await prisma.lessonProgress.findUnique({

        where: {
          userId_lessonId: {
            userId,
            lessonId
          }
        }
      })

    if (existingProgress) {

      const updated =
        await prisma.lessonProgress.update({

          where: {
            id: existingProgress.id
          },

          data: {
            completed: !existingProgress.completed
          }
        })

      return res.json(updated)
    }

    const progress =
      await prisma.lessonProgress.create({

        data: {
          userId,
          lessonId,
          completed: true
        }
      })

    res.status(201).json(progress)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
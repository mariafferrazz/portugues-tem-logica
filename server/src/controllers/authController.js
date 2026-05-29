import prisma from '../lib/prisma.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function register(req, res) {
  try {
    const { name, email, password } = req.body

    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      return res.status(400).json({
        error: 'Usuário já existe'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user
    })

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

export async function login(req, res) {

  try {

    const {
      email,
      password
    } = req.body

    const user =
      await prisma.user.findUnique({
        where: { email }
      })

    if (!user) {

      return res.status(400).json({
        error: 'Usuário não encontrado'
      })
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!passwordMatch) {

      return res.status(400).json({
        error: 'Senha inválida'
      })
    }

    const token = jwt.sign(
      {
        id: user.id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      }
    )

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      error: error.message
    })
  }
}
export async function forgotPassword(req, res) {

  try {

    const { email } = req.body

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {

      return res.json({
        message:
          'Se o email existir, enviaremos recuperação.'
      })
    }

    res.json({
      message:
        'Recuperação solicitada com sucesso'
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })
  }
}
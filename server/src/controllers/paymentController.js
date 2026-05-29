import { Preference } from 'mercadopago'
import client from '../services/mercadoPago.js'

export async function createPayment(req, res) {

  try {

    const {
      title,
      price
    } = req.body

    const preference = {
      items: [
        {
          title,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: Number(price)
        }
      ],

      back_urls: {
        success: 'http://localhost:5173/dashboard',
        failure: 'http://localhost:5173/payment-failure'
      },

      auto_return: 'approved'
    }

    const response = await preference.create({
  body: {
    items: [
      {
        title,
        quantity: 1,
        unit_price: Number(price)
      }
    ]
  }
})

  } catch (error) {

    console.log(error)

    res.status(500).json({
      error: error.message
    })
  }
}
import { useState } from 'react'

import api from '../services/api'

function ForgotPassword() {

  const [email, setEmail] = useState('')

  async function handleSubmit(e) {

    e.preventDefault()

    try {

      await api.post('/auth/forgot-password', {
        email
      })

      alert(
        'Se o email existir, um link de recuperação foi enviado.'
      )

      setEmail('')

    } catch (error) {

      console.log(error)

      alert('Erro ao solicitar recuperação')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-3xl w-full max-w-md"
      >

        <h1 className="text-4xl font-black text-white mb-8">
          Recuperar Senha
        </h1>

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full mb-6 p-4 rounded-2xl bg-slate-800 text-white"
        />

        <button
          className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black"
        >
          Enviar Recuperação
        </button>

      </form>
    </div>
  )
}

export default ForgotPassword
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

function Register() {

  const navigate = useNavigate()

  const { register } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {

    e.preventDefault()

    const success =
      await register(name, email, password)

    if (success) {

      navigate('/dashboard')

    } else {

      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-3xl w-full max-w-md"
      >

        <h1 className="text-4xl font-black text-white mb-8">
          Criar Conta
        </h1>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-5 p-4 rounded-2xl bg-slate-800 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 p-4 rounded-2xl bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-4 rounded-2xl bg-slate-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black"
        >
          Criar Conta
        </button>

      </form>

    </div>
  )
}

export default Register
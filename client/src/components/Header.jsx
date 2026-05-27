import { Link } from 'react-router-dom'
import { BookOpen, User } from 'lucide-react'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-xl">
            <BookOpen className="text-slate-900" />
          </div>

          <h1 className="text-white font-black text-xl md:text-2xl">
            Português Tem Lógica
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <a href="#courses" className="hover:text-yellow-400 duration-300">
            Cursos
          </a>

          <a href="#benefits" className="hover:text-yellow-400 duration-300">
            Benefícios
          </a>

          <a href="#plans" className="hover:text-yellow-400 duration-300">
            Planos
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-white hover:text-yellow-400 duration-300"
          >
            <User />
          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 text-slate-900 px-5 py-3 rounded-xl font-bold hover:scale-105 duration-300"
          >
            Assinar
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
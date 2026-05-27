import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  User,
  LogOut
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6 hidden lg:flex flex-col">
      <div>
        <h1 className="text-2xl font-black text-yellow-400">
          PTL
        </h1>

        <p className="text-slate-400 mt-2">
          Português Tem Lógica
        </p>
      </div>

      <nav className="mt-14 flex flex-col gap-3">
        <button className="flex items-center gap-4 bg-yellow-400 text-slate-900 px-5 py-4 rounded-2xl font-bold">
          <LayoutDashboard />
          Dashboard
        </button>

        <button className="flex items-center gap-4 text-slate-300 hover:bg-slate-900 px-5 py-4 rounded-2xl duration-300">
          <BookOpen />
          Cursos
        </button>

        <button className="flex items-center gap-4 text-slate-300 hover:bg-slate-900 px-5 py-4 rounded-2xl duration-300">
          <PlayCircle />
          Aulas
        </button>

        <button className="flex items-center gap-4 text-slate-300 hover:bg-slate-900 px-5 py-4 rounded-2xl duration-300">
          <User />
          Perfil
        </button>
      </nav>

      <button className="mt-auto flex items-center gap-4 text-red-400 hover:bg-red-500/10 px-5 py-4 rounded-2xl duration-300">
        <LogOut />
        Sair
      </button>
    </aside>
  )
}

export default Sidebar
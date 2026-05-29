import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-32">

        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold"
          >
            Português para concursos públicos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mt-8"
          >
            Português não é decorar.

            <span className="text-yellow-400 block">
              É entender a lógica.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-xl mt-8 max-w-xl leading-relaxed"
          >
            Aprenda gramática, interpretação e redação com uma metodologia simples, didática e prática.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-5 mt-10"
          >
            <button className="bg-yellow-400 text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 duration-300">
              Começar Agora
            </button>

            <button className="border border-slate-700 text-white px-8 py-5 rounded-2xl font-bold hover:border-yellow-400 duration-300">
              Ver Cursos
            </button>
          </motion.div>
        </div>

<div className="relative hidden lg:flex justify-center">
  <div className="w-[620px] h-[620px] rounded-[50px] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-yellow-400/10 blur-3xl"></div>

    {/* Logo */}
    <img
      src="client/src/assets/logo-portugues-tem-logica.png"
      alt="Português Tem Lógica"
      className="relative z-10 w-[122%] max-w-none object-contain translate-y-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
    />

  </div>
</div>

      </div>
    </section>
  )
}

export default Hero
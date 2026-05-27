import {
  Brain,
  BookText,
  Trophy,
  MonitorPlay,
} from 'lucide-react'

function Benefits() {

  const benefits = [
    {
      icon: Brain,
      title: 'Aprendizado lógico',
      description: 'Entenda o motivo das regras sem decorar.'
    },

    {
      icon: BookText,
      title: 'Didática simplificada',
      description: 'Aulas organizadas para facilitar o entendimento.'
    },

    {
      icon: Trophy,
      title: 'Foco em concursos',
      description: 'Conteúdo direcionado para aprovação.'
    },

    {
      icon: MonitorPlay,
      title: 'Aulas online',
      description: 'Assista de qualquer lugar e no seu ritmo.'
    }
  ]

  return (
    <section
      id="benefits"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900">
            Por que estudar conosco?
          </h2>

          <p className="text-slate-500 text-xl mt-6 max-w-3xl mx-auto">
            Um método criado para transformar o português em algo claro e intuitivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => {

            const Icon = item.icon

            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:-translate-y-2 duration-300"
              >

                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-slate-900" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Benefits
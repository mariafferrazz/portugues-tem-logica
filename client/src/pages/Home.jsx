import Header from '../components/Header'
import Hero from '../components/Hero'
import CourseCard from '../components/CourseCard'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section
        id="courses"
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900">
            Cursos Disponíveis
          </h2>

          <p className="text-slate-500 text-xl mt-6">
            Conteúdos organizados para acelerar sua aprovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Português para Concurso"
            description="Gramática, interpretação e lógica da língua portuguesa."
          />

          <CourseCard
            title="Redação"
            description="Estrutura completa para redações nota máxima."
          />

          <CourseCard
            title="Questões Comentadas"
            description="Resoluções detalhadas para fixação do conteúdo."
          />
        </div>
      </section>

      <Benefits />

      <Footer />
    </>
  )
}

export default Home
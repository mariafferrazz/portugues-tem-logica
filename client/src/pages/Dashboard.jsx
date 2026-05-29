import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import api from '../services/api'

function Dashboard() {

  const [courses, setCourses] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    async function fetchCourses() {

      try {

        const response =
          await api.get('/courses')

        setCourses(response.data)

      } catch (error) {

        console.log(error)
      }
    }

    fetchCourses()

  }, [])

  async function handleBuyCourse(course) {

    try {

      const response =
        await api.post('/payment/create', {
          title: course.title,
          price: course.price
        })

      window.location.href =
        response.data.init_point

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 p-6">

        <h1 className="text-4xl font-black">
          Português Tem Lógica
        </h1>

        <p className="text-slate-400 mt-2">
          Seus cursos disponíveis
        </p>

      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-black mb-10">
          Meus Cursos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <div
              key={course.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-400 duration-300"
            >

              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black">
                  {course.title}
                </h3>

                <p className="text-slate-400 mt-4 line-clamp-3">
                  {course.description}
                </p>

                <p className="text-yellow-400 text-3xl font-black mt-6">
                  R$ {course.price}
                </p>

               {course.hasAccess ? (

                  <button
                    onClick={() =>
                      handleBuyCourse(course)
                    }
                    className="w-full mt-8 bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black hover:scale-105 duration-300"
                  >
                    Comprar Curso
                  </button>

                ) : (

                  <button
                    onClick={() =>
                      navigate(`/courses/${course.id}`)
                    }
                    className="w-full mt-8 bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black hover:scale-105 duration-300"
                  >
                    Acessar Curso
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  )
}

export default Dashboard
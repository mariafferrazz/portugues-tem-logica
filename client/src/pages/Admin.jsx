import { useState } from 'react'

import api from '../services/api'

function Admin() {

  // CURSO
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [price, setPrice] = useState('')

  // MÓDULO
  const [moduleTitle, setModuleTitle] = useState('')
  const [moduleCourseId, setModuleCourseId] = useState('')

  // AULA
  const [lessonTitle, setLessonTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [lessonModuleId, setLessonModuleId] = useState('')

  // CRIAR CURSO
  async function handleCreateCourse(e) {

    e.preventDefault()

    try {

      await api.post('/courses', {
        title,
        description,
        thumbnail,
        price: Number(price)
      })

      alert('Curso criado com sucesso')

      setTitle('')
      setDescription('')
      setThumbnail('')
      setPrice('')

    } catch (error) {

      console.log(error)

      alert('Erro ao criar curso')
    }
  }

  // CRIAR MÓDULO
  async function handleCreateModule(e) {

    e.preventDefault()

    try {

      await api.post('/modules', {
        title: moduleTitle,
        courseId: Number(moduleCourseId)
      })

      alert('Módulo criado com sucesso')

      setModuleTitle('')
      setModuleCourseId('')

    } catch (error) {

      console.log(error)

      alert('Erro ao criar módulo')
    }
  }

  // CRIAR AULA
  async function handleCreateLesson(e) {

    e.preventDefault()

    try {

      await api.post('/lessons', {
        title: lessonTitle,
        videoUrl,
        moduleId: Number(lessonModuleId)
      })

      alert('Aula criada com sucesso')

      setLessonTitle('')
      setVideoUrl('')
      setLessonModuleId('')

    } catch (error) {

      console.log(error)

      alert('Erro ao criar aula')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Painel do Professor
        </h1>

        {/* FORM CURSO */}
        <form
          onSubmit={handleCreateCourse}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800"
        >

          <h2 className="text-3xl font-black mb-8">
            Criar Curso
          </h2>

          <div className="mb-6">

            <label className="block mb-2 font-bold">
              Título do Curso
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-800"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-bold">
              Descrição
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-800 h-32"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-bold">
              Thumbnail URL
            </label>

            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-800"
            />

          </div>

          <div className="mb-8">

            <label className="block mb-2 font-bold">
              Preço
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-800"
            />

          </div>

          <button
            className="w-full bg-yellow-400 text-slate-900 py-5 rounded-2xl font-black text-lg hover:scale-105 duration-300"
          >
            Criar Curso
          </button>

        </form>

        {/* DIVISÃO */}
        <hr className="my-16 border-slate-800" />

        {/* FORM MÓDULO */}
        <form
          onSubmit={handleCreateModule}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800 mb-16"
        >

          <h2 className="text-3xl font-black mb-8">
            Criar Módulo
          </h2>

          <input
            type="text"
            placeholder="Título do módulo"
            value={moduleTitle}
            onChange={(e) => setModuleTitle(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 mb-5"
          />

          <input
            type="number"
            placeholder="ID do curso"
            value={moduleCourseId}
            onChange={(e) => setModuleCourseId(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 mb-5"
          />

          <button
            className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black"
          >
            Criar Módulo
          </button>

        </form>

        {/* FORM AULA */}
        <form
          onSubmit={handleCreateLesson}
          className="bg-slate-900 p-8 rounded-3xl border border-slate-800"
        >

          <h2 className="text-3xl font-black mb-8">
            Criar Aula
          </h2>

          <input
            type="text"
            placeholder="Título da aula"
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 mb-5"
          />

          <input
            type="text"
            placeholder="URL do vídeo"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 mb-5"
          />

          <input
            type="number"
            placeholder="ID do módulo"
            value={lessonModuleId}
            onChange={(e) => setLessonModuleId(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 mb-5"
          />

          <button
            className="w-full bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black"
          >
            Criar Aula
          </button>

        </form>

      </div>

    </div>
  )
}

export default Admin
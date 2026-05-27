import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import VideoPlayer from '../components/VideoPlayer'
import LessonSidebar from '../components/LessonSidebar'

function CourseDetails() {

  const { id } = useParams()

  const [course, setCourse] = useState(null)

  const [selectedLesson, setSelectedLesson] = useState(null)

  useEffect(() => {

    async function fetchCourse() {

      const response = await api.get(`/courses/${id}`)

      setCourse(response.data)

      const firstLesson =
        response.data.modules?.[0]?.lessons?.[0]

      setSelectedLesson(firstLesson)
    }

    fetchCourse()

  }, [id])

  if (!course || !selectedLesson) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Carregando...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row">

      <div className="flex-1 p-6">

        <VideoPlayer lesson={selectedLesson} />

        <div className="mt-8">
          <h1 className="text-4xl font-black text-white">
            {selectedLesson.title}
          </h1>

          <p className="text-slate-400 mt-4">
            {course.title}
          </p>
        </div>

      </div>

      <LessonSidebar
        modules={course.modules}
        onSelectLesson={setSelectedLesson}
      />

    </div>
  )
}

export default CourseDetails
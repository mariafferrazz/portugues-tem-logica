import api from '../services/api'

function LessonSidebar({
  modules,
  onSelectLesson
}) {

  async function handleProgress(lessonId) {

    try {

      await api.post('/progress', {
        userId: 1,
        lessonId
      })

      alert('Progresso salvo')

    } catch (error) {

      console.log(error)
    }
  }
  const totalLessons =
  modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  )

const completedLessons =
  modules.reduce(
    (acc, module) =>
      acc +
      module.lessons.filter(
        (lesson) => lesson.progress?.length > 0
      ).length,
    0
  )

const progressPercentage =
  totalLessons > 0
    ? (completedLessons / totalLessons) * 100
    : 0

  return (
    <aside className="w-full lg:w-96 bg-slate-900 border-l border-slate-800 p-6 overflow-y-auto">

      <h2 className="text-2xl font-black text-white mb-8">
        Conteúdo do Curso
      </h2>
      <div className="mb-8">

  <div className="flex justify-between text-sm mb-2">
    <span>Progresso</span>

    <span>
      {Math.round(progressPercentage)}%
    </span>
  </div>

  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

    <div
      style={{
        width: `${progressPercentage}%`
      }}
      className="h-full bg-green-400"
    ></div>

  </div>

</div>

      {modules.map((module) => (

        <div
          key={module.id}
          className="mb-10"
        >

          <h3 className="text-yellow-400 font-bold mb-4">
            {module.title}
          </h3>

          <div className="flex flex-col gap-3">

            {module.lessons.map((lesson) => (

              <div
                key={lesson.id}
                className={`
  p-4 rounded-2xl duration-300 flex items-center justify-between
  ${lesson.progress?.length > 0
    ? 'bg-green-500/20 border border-green-500'
    : 'bg-slate-800 hover:bg-slate-700'
  }
`}
              >

                <button
                  onClick={() => onSelectLesson(lesson)}
                  className="text-left flex-1"
                >
                  {lesson.title}
                </button>

                <button
                  onClick={() => handleProgress(lesson.id)}
                  className="text-green-400 text-xl ml-4"
                >
                  <span
  className={`
    text-xl ml-4
    ${lesson.progress?.length > 0
      ? 'text-green-400'
      : 'text-slate-500'
    }
  `}
>
  {lesson.progress?.length > 0 ? '✓' : '○'}
</span>
                </button>

              </div>

            ))}

          </div>

        </div>

      ))}

    </aside>
  )
}

export default LessonSidebar
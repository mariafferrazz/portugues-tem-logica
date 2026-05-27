function CourseCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl duration-300">
      <div className="h-40 bg-slate-200 rounded-xl mb-4"></div>

      <h2 className="text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="text-slate-600 mt-3">
        {description}
      </p>

      <button className="mt-6 w-full bg-yellow-400 py-3 rounded-xl font-bold">
        Ver Curso
      </button>
    </div>
  )
}

export default CourseCard
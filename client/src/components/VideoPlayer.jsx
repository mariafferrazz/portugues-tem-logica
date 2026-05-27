function VideoPlayer({ lesson }) {

  return (
    <div className="w-full aspect-video rounded-3xl overflow-hidden">

      <iframe
        className="w-full h-full"
        src={lesson.videoUrl}
        title={lesson.title}
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default VideoPlayer
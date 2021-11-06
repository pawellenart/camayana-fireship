const LessonItem = ({lesson}) => {
  return (
    <a href={lesson.url} target="_blank" rel="noreferrer">
      <div className="h-24 flex items-center justify-center bg-gray-700 transition duration-300 hover:bg-gray-500 hover:scale-x-105">
        <div className="text-center w-[10%] text-xl">{lesson.icon}</div>
        <div>
          <div className="text-white font-bold">{lesson.title}</div>
          <div className="text-gray-300">{lesson.description}</div>
        </div>
        <div className="ml-auto pr-4 text-xs text-center space-y-1">
          {lesson.free ? (
            <div className="p-1 w-10 text-white bg-green-400 rounded-sm">
              free
            </div>
          ) : (
            ''
          )}

          <div className="p-1 w-10 text-gray-200 bg-gray-500 rounded-sm">
            {lesson.duration}
          </div>
        </div>
      </div>
    </a>
  );
};

export default LessonItem;

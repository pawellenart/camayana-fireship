import LessonItem from './components/LessonItem';
import lessonData from './data/lessons';

const App = () => {
  return (
    <div className="w-screen h-screen px-8 bg-gray-900 pt-10">
      <div className="max-w-5xl mx-auto">
        {lessonData.map(lesson => (
          <LessonItem lesson={lesson} key={lesson.icon} />
        ))}
      </div>
    </div>
  );
};

export default App;

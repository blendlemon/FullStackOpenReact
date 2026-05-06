const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    );
  }
  const Part = (props) => {
    let part = props.part.name;
    let exercises = props.part.exercises;
    return (
      <p>{part} {exercises}</p>
    );
  }

  const Content = ({ parts }) => {
    return (
      <div>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
      </div>
    );
  }

  const Total = ({ parts }) => {
    let sum = 0;
    parts.map(part => {
      sum += part.exercises;
    }
    )

    return (
      <p>Number of exercises {sum}</p>
    );
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <p>
        {props.info} {props.exercises}
      </p>
    </>
  );
};

const Content = (info) => {
  return (
    <>
      <Part info={info.info[1].part1} exercises={info.info[1].exercises1} />
      <Part info={info.info[2].part2} exercises={info.info[2].exercises2} />
      <Part info={info.info[3].part3} exercises={info.info[3].exercises3} />
    </>
  );
};

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3;

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const info = [
    { course: "Half Stack application development" },
    { part1: "Fundamentals of React", exercises1: 10 },
    { part2: "Using props to pass data", exercises2: 7 },
    { part3: "State of a component", exercises3: 14 },
  ];

  return (
    <div>
      <Header course={info[0].course} />
      <Content info={info} />
      <Total
        exercises1={info[1].exercises1}
        exercises2={info[2].exercises2}
        exercises3={info[3].exercises3}
      />
    </div>
  );
};

export default App;

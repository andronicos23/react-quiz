import Options from "./Options";

function Question({ Question, dispatch, answer }) {
  return (
    <div>
      <h4>{Question.question}</h4>
      <Options Question={Question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;

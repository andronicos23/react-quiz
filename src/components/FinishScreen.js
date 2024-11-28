function FinishScreen({ points, sumofPoints, dispatch }) {
  const percentage = (points / sumofPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {sumofPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;

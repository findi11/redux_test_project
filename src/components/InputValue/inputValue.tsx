function InputValue(props: any) {
  const { sentencesVal, handleButtonClick } = props;

  return (
    <div>
      <p className="value_text">Input value: {sentencesVal}</p>
      <button className="input_button" onClick={handleButtonClick}>
        Enter a value
      </button>
    </div>
  );
}
export default InputValue;

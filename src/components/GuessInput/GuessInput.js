import React from 'react';

function GuessInput({ handleSubmitGuess, isGameOver }) {
  const [guess, setGuess] = React.useState('');

  function handleChange(event) {
    const textValue = event.target.value.toUpperCase();

    setGuess(textValue);
  };

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="5 letter word"
        disabled={isGameOver()}
      />
    </form>
  );
}

export default GuessInput;

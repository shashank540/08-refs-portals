import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState('');
  const [submitted, setSubmited] = useState(false);

  function handleOnChange(event)
  {
    setSubmited(false);
    setPlayerName(event.target.value);
  }

  function handleClick()
  {
    setSubmited(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'} </h2>
      <p>
        <input type="text" onChange={handleOnChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

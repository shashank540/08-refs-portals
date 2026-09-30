import { useState, useRef} from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  const palyerName = useRef();
  
  function handleClick()
  {
    setPlayerName(palyerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input type="text" ref={palyerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

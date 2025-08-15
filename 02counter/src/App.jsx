import { useState } from 'react'
import './App.css'

function App() {

  // States
  const [count, setCount] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);

    // setCount(count + 1);  //it update Value by 1 only not 4
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevValue) => prevValue + 1 );
    setCount((prevValue) => prevValue + 1 );
    setCount((prevValue) => prevValue + 1 );
    setCount((prevValue) => prevValue + 1 );
  }

  const removeVal = () =>{
    setCount(count - 1);   
  }


  return (
    <>
      <h1>This is New Era</h1>
      <h1>Count Value : {count} </h1>
      <button
      onClick={addValue}
      >Add Value</button>{" "}
      <button onClick={removeVal}
      >Remove Val</button>

      <footer>p: {count}</footer>
    </>
  )
}

export default App

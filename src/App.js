import './App.css';
import { useState } from 'react'; 
import {evaluate} from 'mathjs'


const btnValues = [
  "C", "+-", "%", "/",
  7, 8, 9, "*",
  4, 5, 6, "-",
  1, 2, 3, "+",
  0, ".", "=",
];



const App = () => {

const [calcScreen, setCalcScreen ] = useState('')

 const calcType = (btnValue) => {
   if (btnValue === "="){
      setCalcScreen(evaluate(calcScreen))
   }
   else if (btnValue === "C"){
      setCalcScreen('')
   }else{
    setCalcScreen(calcScreen + btnValue)
   }
  }

  return (
    <div className="Calc">

      <span id="screen">{calcScreen}</span>

    <div className="calcBtns">
      {btnValues.map((currentBtn) => {
        return <button onClick={() => calcType (currentBtn) }>{currentBtn}</button>
      })}
    </div>
    </div>

    
  );
}

export default App;

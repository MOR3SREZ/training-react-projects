import './App.css';
import { useState } from 'react';

function App() {
  //*states____
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  //* functions____
  const updateClac = (value) => {
    if (
      (ops.includes(value) && calc == '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createNumbers = () => {
    const numb = [];
    for (let i = 1; i < 10; i++) {
      numb.push(
        <button onClick={() => updateClac(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numb;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className='App'>
      <h2>Mores Calculator App</h2>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || '0'}
        </div>

        <div className='operators'>
          <button onClick={() => updateClac('/')}>/</button>
          <button onClick={() => updateClac('*')}>*</button>
          <button onClick={() => updateClac('+')}>+</button>
          <button onClick={() => updateClac('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='numbers'>
          {createNumbers()}
          <button onClick={() => updateClac('.')}>.</button>
          <button onClick={() => updateClac('0')}>0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

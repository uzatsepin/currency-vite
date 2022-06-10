import { useState } from 'react';
import { ConverterNames } from './Components/Converter';
import './styles/index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-4xl m-auto pb-6 pt-14">
        <ConverterNames />
      </div>
    </div>
  );
}

export default App;

import { ConverterNames } from './Components/Converter';
import './styles/index.css';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  localStorage.setItem('theme', theme);

  return (
    <div className="h-screen bg-gray-100 transition ease-in-out dark:bg-slate-700 duration-200">
      <div className="max-w-4xl m-auto pb-6 pt-14 pr-4 pl-4">
        <ConverterNames theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;

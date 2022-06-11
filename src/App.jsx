import { ConverterNames } from './Components/Converter';
import './styles/index.css';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  localStorage.setItem('theme', theme);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="h-full bg-gray-100 transition ease-in-out dark:bg-slate-700 duration-200 md:h-screen">
      <div className="max-w-4xl m-auto pb-6 pt-14 pr-4 pl-4">
        <button onClick={() => toggleTheme()} className="float-right py-3 px-3">
          {theme === 'light' ? (
            <SunIcon className="h-7 w-7" />
          ) : (
            <MoonIcon className="h-7 w-7 transition ease-in-out dark:text-gray-200 duration-200" />
          )}
        </button>
        <ConverterNames />
      </div>
    </div>
  );
}

export default App;

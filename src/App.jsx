import { ConverterNames } from './Components/Converter';
import './styles/index.css';

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-4xl m-auto pb-6 pt-14 pr-4 pl-4">
        <ConverterNames />
      </div>
    </div>
  );
}

export default App;

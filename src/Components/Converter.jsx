import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Amount } from './Amount';
import { ExpandedInput } from './ExpandedInput';
import { SwitchBtn } from './SwitchBtn';
import { ConvertResult } from './ConvertResult';

export const ConverterNames = () => {
  const [convertTo, setConvertTo] = useState('USD');
  const [base, setBase] = useState('UAH');
  const [state, setState] = useState([]);
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/convert?from=${base}&to=${convertTo}&amount=${amount}`)
      .then((res) => setState(res.data));
    axios.get('https://api.exchangerate.host/latest').then((res) => setRates(res.data.rates));
  }, [amount, convertTo, base]);

  return (
    <section className="pt-14 bg-white pb-14 px-6 shadow-md dark:bg-slate-800">
      <h1 className="flex items-center justify-center text-black text-2xl mb-10 font-semibold dark:text-gray-200">
        Currency Exchange Rate 💰
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col mb-6 gap-4 items-center justify-center w-3/4 m-auto sm:w-2/4 md:flex-row md:w-full md:gap-9">
          <Amount amount={amount} setAmount={setAmount} />
          <ExpandedInput select={base} setSelect={setBase} rates={rates} />
          <SwitchBtn
            base={base}
            setBase={setBase}
            convertTo={convertTo}
            setConvertTo={setConvertTo}
          />
          <ExpandedInput select={convertTo} setSelect={setConvertTo} rates={rates} />
        </div>
      </form>
      <ConvertResult amount={amount} base={base} state={state} convertTo={convertTo} />
    </section>
  );
};

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ConverterNames = () => {
  const [convertTo, setConvertTo] = useState('USD');
  const [base, setBase] = useState('UAH');
  const [state, setState] = useState([]);
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState('');

  const amountValue = amount ? `?amount=${amount}` : '';

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/convert?from=${base}&to=${convertTo}&amount=${amount}`)
      .then((res) => setState(res.data));
    axios.get('https://api.exchangerate.host/latest').then((res) => setRates(res.data.rates));
  }, [base, amountValue]);

  const swapConversion = () => {
    setBase(convertTo);
    setConvertTo(base);
  };

  return (
    <section className="pt-14 bg-white pb-14 px-6 shadow">
      <h1 className="text-black text-2xl mb-10 font-semibold text-center">
        Currency Exchange Rate
      </h1>
      <form>
        <div className="flex flex-row mb-6 gap-9 items-center justify-center">
          <div className="flex-1">
            <label className="font-bold text-sm block" htmlFor="text">
              Amount
            </label>
            <input
              type="number"
              className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
              value={amount}
              size="lg"
              placeholder="Enter amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="flex-1">
            <Listbox value={base} onChange={setBase}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    From:
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{base}</span>
                      </span>
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {Object.keys(rates).map((rate) => (
                          <Listbox.Option
                            key={rate}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9',
                              )
                            }
                            value={rate}>
                            {({ base, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      base ? 'font-semibold' : 'font-normal',
                                      'ml-3 block truncate',
                                    )}>
                                    {rate}
                                  </span>
                                </div>

                                {base ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                    )}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div
            className="border-2 border-blue-100 rounded-full p-4 cursor-pointer hover:border-green-300"
            onClick={() => swapConversion()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
              aria-hidden="true"
              className="w-4 h-4 text-green-500 miscellany___StyledIconSwap-sc-1r08bla-1 fZJuOo">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="flex-1">
            <Listbox value={convertTo} onChange={setConvertTo}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    To:
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{convertTo}</span>
                      </span>
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {Object.keys(rates).map((rate) => (
                          <Listbox.Option
                            key={rate}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9',
                              )
                            }
                            value={rate}>
                            {({ convertTo, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      convertTo ? 'font-semibold' : 'font-normal',
                                      'ml-3 block truncate',
                                    )}>
                                    {rate}
                                  </span>
                                </div>

                                {convertTo ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                    )}>
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </div>
      </form>
      <div className="flex justify-between items-center mt-10">
        <div>
          <p className="flex items-center text-xs font-regular text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp; This conversion uses midmarket rates.
          </p>
        </div>
        {amount ? (
          <>
            <div>
              <div className="flex gap-1 mb-1">
                <p className="font-semibold text-sm text-gray-500">
                  {amount} {base} =
                </p>
              </div>
              <div className="flex gap-1 font-normal items-baseline">
                <p className="text-3xl font-bold">
                  {state.result?.toFixed(2)} {convertTo}
                </p>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <div>
          <button
            className={
              !amount
                ? 'cursor-not-allowed inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-md font-bold rounded-md text-white bg-gray-300'
                : 'inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-md font-bold rounded-md text-white bg-green-500 hover:bg-green-600'
            }>
            Convert
          </button>
        </div>
      </div>
    </section>
  );
};

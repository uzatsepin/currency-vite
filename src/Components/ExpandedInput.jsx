import { Listbox, Transition } from '@headlessui/react';
import { currencies } from 'country-data';
import { Fragment } from 'react';
import CurrencyFlag from 'react-currency-flags';
import { SelectorIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ExpandedInput = ({ select, setSelect, rates }) => {
  return (
    <div className="flex-1 w-full">
      <Listbox value={select} onChange={setSelect}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              From:
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-600 dark:border-slate-600 dark:text-gray-200">
                <span className="flex items-center">
                  <CurrencyFlag currency={select} size="md" />
                  <span className="ml-3 block truncate dark:text-gray-200">
                    {currencies[select].name ? currencies[select].name : select}
                  </span>
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
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm dark:bg-slate-700 dark:text-slate-200">
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
                      {({ select, active }) => (
                        <>
                          <div className="flex items-center">
                            <CurrencyFlag currency={String(rate)} size="md" />
                            <span
                              className={classNames(
                                select ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate',
                              )}>
                              {rate}
                            </span>
                          </div>

                          {select ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}></span>
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
  );
};

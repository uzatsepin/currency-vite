export const ConvertResult = ({ amount, base, state, convertTo }) => {
  return (
    <div className="flex flex-col-reverse items-center gap-5 justify-center md:flex-row md:justify-between">
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
      {amount > 0 ? (
        <>
          <div>
            <div className="flex gap-1 mb-1">
              <p className="font-semibold text-sm text-gray-500 dark:text-gray-400">
                {amount}
                &nbsp;
                {base} =
              </p>
            </div>
            <div className="flex gap-1 font-normal items-baseline">
              <p className="text-2xl font-bold md:text-3xl dark:text-gray-200">
                {state.result?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                &nbsp;
                {convertTo ? convertTo : ''}
              </p>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

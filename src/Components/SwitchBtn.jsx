export const SwitchBtn = ({ base, setBase, convertTo, setConvertTo }) => {
  const swapConversion = () => {
    setBase(convertTo);
    setConvertTo(base);
  };
  return (
    <div
      className="border-2 border-blue-100 rounded-full p-4 cursor-pointer hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-500"
      onClick={() => swapConversion()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 17"
        aria-hidden="true"
        className="w-4 h-4 text-indigo-500 miscellany___StyledIconSwap-sc-1r08bla-1 fZJuOo">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
          clipRule="evenodd"></path>
      </svg>
    </div>
  );
};

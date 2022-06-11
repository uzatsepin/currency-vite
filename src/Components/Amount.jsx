export const Amount = ({ amount, setAmount }) => {
  return (
    <div className="flex-1 w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="text">
        Amount
      </label>
      <input
        type="number"
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1 dark:bg-slate-600 dark:border-slate-600 dark:text-gray-200"
        value={amount > 0 ? amount : 'Enter amount bigger then 0'}
        size="lg"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
};

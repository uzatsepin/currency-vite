export const Amount = ({ amount, setAmount }) => {
  return (
    <div className="flex-1 w-full">
      <label className="block text-sm font-medium text-gray-700" htmlFor="text">
        Amount
      </label>
      <input
        type="number"
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-1"
        value={amount}
        size="lg"
        placeholder="Enter amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
    </div>
  );
};

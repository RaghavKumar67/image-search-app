import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center space-x-4 mb-6">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for images..."
        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
      />
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
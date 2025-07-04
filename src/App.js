import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';


function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleSubmit = async (newTerm) => {
    setTerm(newTerm);
    setPage(1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (!term) return;
      setLoading(true);
      setError('');
      try {
        const result = await searchImages(term, page);
        setImages(result);
      } catch (err) {
        setError('Failed to fetch images. Try again.');
        setImages([]);
      }
      setLoading(false);
    };
    fetchImages();
  }, [term, page]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleToggleFavorite = (image) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === image.id)
        ? prev.filter((fav) => fav.id !== image.id)
        : [...prev, image]
    );
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Image Search App</h1>
          <button onClick={toggleTheme} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
        <SearchBar onSubmit={handleSubmit} />
        {error && <div className="text-red-500 my-4">{error}</div>}
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <>
            <ImageList images={images} onToggleFavorite={handleToggleFavorite} favorites={favorites} />
            {images.length > 0 && (
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 rounded bg-gray-500 text-white disabled:opacity-50"
                  disabled={page === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 rounded bg-gray-500 text-white"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
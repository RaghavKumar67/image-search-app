import { useState } from 'react';

function ImageShow({ image, isFavorite, onToggleFavorite }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownloadBtn = () => {
    const link = document.createElement('a');
    link.href = image.urls.full;
    link.download = `${image.id}.jpg`;
    link.click();
  };

  return (
    <div className="relative">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="rounded shadow hover:scale-105 transition-transform cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <div className="flex justify-between mt-2">
        <button
          onClick={() => onToggleFavorite(image)}
          className={`px-2 py-1 rounded text-sm ${isFavorite ? 'bg-yellow-500' : 'bg-gray-300'} text-black`}
        >
          {isFavorite ? '★ Favorite' : '☆ Fav'}
        </button>
        <button
          onClick={handleDownloadBtn}
          className="px-2 py-1 rounded text-sm bg-blue-400 text-white hover:bg-blue-600"
        >
          Download
        </button>
      </div>
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <img
            src={image.urls.full}
            alt={image.alt_description}
            className="max-w-full max-h-full rounded"
          />
        </div>
      )}
    </div>
  );
}

export default ImageShow;
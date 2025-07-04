import ImageShow from './ImageShow';

function ImageList({ images, onToggleFavorite, favorites }) {
  return (
    <div className="masonry">
      {images.map((image) => (
        <div key={image.id} className="masonry-item">
          <ImageShow
            image={image}
            isFavorite={favorites.some((fav) => fav.id === image.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageList;

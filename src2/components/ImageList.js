import ImageShow from "./ImageShow";


function ImageList({ images = [] }) {
  console.log("ImageList received:", images); // ✅ check if undefined
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));

  return <div>{renderedImages}</div>;
}

export default ImageList;

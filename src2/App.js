import { useState } from "react";
import Search from "./components/Search";
import searchImage from "./api"; // ✅ name matches api.js export
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleClick = async (term) => {
    const result = await searchImage(term);
    console.log("Search Result:", result); // 👈 Must show an array
    setImages(result);
  };

  return (
    <div>
      <Search onSubmit={handleClick} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

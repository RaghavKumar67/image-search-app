import axios from "axios";

const searchImages = async (term, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cebOoQMsC2hRcuMqYB24bqUk4ZRoS7w3qFBTvuNV_RY"
    },
    params: {
      query: term,
      page: page,
      per_page: 12,
    },
  });
  return response.data.results;
};

export default searchImages;
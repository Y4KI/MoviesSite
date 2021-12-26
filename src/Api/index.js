import axios from "axios";

export const requestApi = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=598dd5ee3fee82f7160aa3923751994e"
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

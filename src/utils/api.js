import axios from "axios";

// This Will be Our Base Url
const BASE_URL = "https://api.themoviedb.org/3";
// Here were Importing the Token For Different URL
// without env file ka use krke Bhi ho sakta --- bs Direct token url Paste krdo
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

// FetCh Data From API Using Async Method --- Wahi try catch wala Method se
// Ek Baar Pad Lena Namaste Javascript Se Sahi se Ya Phir Pedrotech se

export const fetchDataFromApi = async (url, params) => {
  try {
    // Base URL +url
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

import axios from "axios";

const gameUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
  baseURL: gameUrl,
});

const getGenreList = axiosCreate.get(`/genres?key=${apiKey}`);
const getAllGameList = axiosCreate.get(`/games?key=${apiKey}`);
const getGameListByGenreId = (id) => axiosCreate.get(`/games?key=${apiKey}&genres=${id}`)

export default {
  getGenreList,
  getAllGameList,
  getGameListByGenreId,
}

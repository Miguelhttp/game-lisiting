import { useEffect, useState } from "react";
import GameApi from "../../services/GameApi";

export default function GenreList({ genereId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getGenreList = () => {
    GameApi.getGenreList.then((response) => {
      setGenreList(response.data.results);
    });
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Lista de Gênero</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genereId(item.id);
            selectedGenresName(item.name);
          }}
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className={`w-[40px] h-[40px] object-cover group-hover:scale-105 transition-all ease-in-out duration-300 rounded-lg ${
              activeIndex === index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-white group-hover:font-bold text-[18px] ${
              activeIndex === index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

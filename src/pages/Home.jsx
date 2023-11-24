import { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GameApi from "../services/GameApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GamesByGenresId";

export default function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Ação")

  const getAllGameList = () => {
    GameApi.getAllGameList.then((response) => {
      setAllGameList(response.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GameApi.getGameListByGenreId(id).then((response) => {
      setGameListByGenres(response.data.results);
      console.log("Game List By GenresId:",response.data.results);
    });
  };

  useEffect(() => {
    getAllGameList();
    getGameListByGenresId(4);
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          genereId={(genereId) => getGameListByGenresId(genereId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId gameList={gameListByGenres} selectedGenresName={selectedGenresName} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

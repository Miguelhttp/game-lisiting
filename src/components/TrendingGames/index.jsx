import { useEffect } from "react";

export default function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(`GameList: ${gameList}`);
  }, []);

  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[20px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                className="bg-[#76A8F75E] rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out"
                key={item.id}
              >
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="h-[270px] rounded-t object-cover"
                />
                <h2 className="dark:text-white text-[20px] p-2 font-bold">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

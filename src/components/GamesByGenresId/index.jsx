export default function GamesByGenresId({ gameList, selectedGenresName }) {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        Jogos {selectedGenresName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((item) => (
          <div
            className="bg-[#76A8F75E] p-3 rounded-lg pb-12 h-full cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
            key={item.id}
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="dark:text-white font-bold text-[20px]">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating} ☁️{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

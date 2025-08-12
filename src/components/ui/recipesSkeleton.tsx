const RecipesSkeleton = () => {
  return (
    <div className="container mx-auto grid grid-cols-5 gap-3">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <div key={i}>
            <div className="w-full h-[350px] p-2 border border-gray-300 mt-10">
              <div className="w-full h-53 bg-gray-300 rounded"></div>
              <div className="w-[190px] h-3 rounded-md mx-auto my-4 bg-gray-300 text-center"></div>
              <div className="w-[140px] h-3 rounded-md mx-auto my-4 bg-gray-300 text-center"></div>
              <div className="w-[170px] h-3 rounded-md mx-auto my-4 bg-gray-300 text-center"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipesSkeleton;

import { memo, type FC } from "react";
import type { IRecipes } from "../../types";

interface Props {
  name: string;
  gridCol?: string;
  data: IRecipes[] | undefined;
}

const RecipesView: FC<Props> = ({ name, data }) => {
  const wrapperClass = `grid grid-cols-5 gap-3`;
  return (
    <div className="container mx-auto">
      <div className={wrapperClass}>
        {data?.map((recipes: IRecipes) => (
          <div key={recipes.id} className="p-4 border border-gray-200 mt-10">
            <div>
              <img src={recipes.image} alt="" />
            </div>
            <div>
              <h3 className="line-clamp-1 text-center mt-1">{recipes.name}</h3>
            </div>
            <div>
              <p className="text-center mt-1">
                Difficulty:{recipes.difficulty}
              </p>
            </div>
            <div>
                <h6 className="text-center font-bold">{recipes.mealType}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(RecipesView);

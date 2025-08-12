import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import type { IResponse } from "../../types";
import ProductsView from "../../components/ProductsView";
import RecipesSkeleton from "../../components/ui/recipesSkeleton";

const Shop = () => {
  const limit = 5;
  const [params, setParams] = useSearchParams();

  const skip = Number(params.get("skip")) || 1;
  const tag = params.get("tags") || "";

  const { data, loading } = useFetch<IResponse>(
    `/recipes${tag ? `/tag/${tag}` : ""}`,
    {
      limit,
      skip: (skip - 1) * limit,
    }
  );
  const { data: tags } = useFetch<string[]>("/recipes/tags");

  const handlePaginate = (inx: number) => {
    const newParams = new URLSearchParams(params.toString());
    if (inx === 0) {
      newParams.delete("skip");
    } else {
      newParams.set("skip", (inx + 1).toString());
    }
    setParams(newParams);
  };

  const handleTag = (item: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (!item) {
      newParams.delete("tags");
    } else {
      newParams.set("tags", item);
    }
    newParams.delete("skip");
    setParams(newParams);
  };
  return (
    <div>
      <div className="container mx-auto gap-4 flex py-4 overflow-x-auto">
        <div
          onClick={() => handleTag("")}
          className={`${
            tag === "" ? "bg-gray-500 text-white" : "bg-gray-200"
          } px-4 rounded-md whitespace-nowrap select-none cursor-pointer`}
        >
          All
        </div>
        {tags?.map((item: string, index: number) => (
          <div
            onClick={() => handleTag(item)}
            key={index}
            className={`${
              tag === item ? "bg-gray-500 text-white" : "bg-gray-200"
            } px-4 rounded-md whitespace-nowrap select-none cursor-pointer`}
          >
            {item}
          </div>
        ))}
      </div>
      {(loading && <RecipesSkeleton />) || (
        <ProductsView data={data?.recipes} name="Shop" gridCol={"4"} />
      )}

      <div className="text-center my-4 flex justify-center gap-1">
        <button
          className="border px-2 rounded-[5px]"
          disabled={skip === 1}
          onClick={() => handlePaginate(skip - 2)}
        >
          &#10094;
        </button>
        {Array(Math.ceil((data?.total || 0) / limit))
          .fill("")
          .map((_, inx: number) => (
            <button
              key={inx}
              onClick={() => handlePaginate(inx)}
              className={`${
                skip === inx + 1 ? "bg-gray-500 text-white" : ""
              } px-2 rounded-[5px]`}
            >
              {inx + 1}
            </button>
          ))}
        <button
          className="border px-2 rounded-[5px]"
          disabled={skip >= Math.ceil((data?.total || 0) / limit)}
          onClick={() => handlePaginate(skip)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default memo(Shop);

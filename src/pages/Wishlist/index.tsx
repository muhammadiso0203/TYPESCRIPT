import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import type { ICartProduct } from "../../types";
import { addItem } from "../../lib/features/cartSlice";

const Wishlist = () => {
  const wishlist = useSelector(
    (state: RootState) => state.like.data
  ) as ICartProduct[];

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-6">
      {
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-purple-600 font-bold text-lg">
                  {product.price.toLocaleString()} so‘m
                </p>
                <button
                  onClick={() => dispatch(addItem({ ...product, amount: 1 }))}
                  className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Savatga qo‘shish
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Wishlist;

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import type { ICartProduct } from "../../types";
import {
  decrementAmount,
  inrementAmount,
  removeItem,
} from "../../lib/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.amount),
    0
  );

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4">Korzina</h2>
      <h1 className="text-xl font-semibold mb-6">
        Umumiy: <span className="text-purple-600">{total.toFixed(2)} so‘m</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Savat hozircha bo‘sh</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item: ICartProduct) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                width={80}
                alt={item.title}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">
                  {item.price} so‘m × {item.amount} ={" "}
                  <span className="font-bold text-purple-600">
                    {Number(item.price) * item.amount} so‘m
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    disabled={item.amount <= 1}
                    onClick={() => dispatch(decrementAmount(item))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-3">{item.amount}</span>
                  <button
                    onClick={() => dispatch(inrementAmount(item))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

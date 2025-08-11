import { memo } from "react";
import logo from "../../assets/Link → SVG.svg";
import katalog from "../../assets/div.catalog-icon.svg";
import { NavLink } from "react-router-dom";
import lupa from "../../assets/Vector (7).svg";
import odamcha from "../../assets/Frame.svg";
import like from "../../assets/Frame (1).svg";
import cart from "../../assets/SVG.svg";
import { Product } from "../../components/static";
import { useDispatch } from "react-redux";
import { toggleWishes } from "../../lib/features/wishlistSlice";
import { addItem } from "../../lib/features/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header className="container">
        <nav className="flex gap-6 mt-[18px]">
          <div>
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex gap-2">
            <div className="w-[120px] h-[40px] flex items-center justify-center bg-[#F0F0FF] rounded-[4px]">
              <img src={katalog} alt="" />
              <p>Katalog</p>
            </div>
            <div className="w-[551px] h-[40px] border flex items-center justify-between rounded-[4px] overflow-hidden">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className="p-4 flex-1 text-[14px] outline-none"
              />
              <div className="w-[79px] bg-gray-400 h-full flex justify-center items-center">
                <img src={lupa} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <NavLink to={"#"} className="flex items-center gap-1.5">
                <img src={odamcha} alt="" />
                <h1>Kirish</h1>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/wishlist"} className="flex items-center gap-1.5">
                <img src={like} alt="" />
                <h1>Saralangan</h1>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/cart"} className="flex items-center gap-1.5">
                <img src={cart} alt="" />
                <h1>Savat</h1>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main className="container grid grid-cols-4 mt-[50px]">
        {Product.map((product) => (
          <div key={product.id}>
            <div className="w-[232px] flex flex-col gap-1 mt-[20px]">
              <img src={product.image} alt="" className="relative" />
              <div
                className="absolute bg-white rounded-[50%] p-1  ml-[200px] mt-[7px]"
                onClick={() => dispatch(toggleWishes(product))}
              >
                <NavLink to={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-heart-icon lucide-heart"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                  </svg>
                </NavLink>
              </div>
              <div className="text-[#7f4dff] flex flex-col">
                <p className="text-[15px]">{product.price}</p>
                <del className="text-[15px]">{product.price_del}</del>
              </div>
              <div className="w-[97px] h-[19px] bg-[#FFFF00] flex justify-center items-center rounded-[4px] text-[11px]">
                <p>{product.month}</p>
              </div>
              <p className="text-[13px]">{product.title}</p>
              <div className="flex gap-0.5 items-center">
                <img src={product.yulduz} alt="" />
                <p className="text-[#8B8E99] text-[15px]">{product.rating}</p>
                <p className="text-[#8B8E99] text-[15px]">{product.comment}</p>
              </div>
              <div className="w-full h-[30px] bg-[#7000ff] rounded-[4px] flex justify-center">
                <button
                  onClick={() => dispatch(addItem({ ...product, amount: 1 }))}
                  className="text-[14px] text-white font-semibold py-2 flex items-center"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default memo(Home);

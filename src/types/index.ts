export interface IProduct {
  id: number;
  image: string;
  price: number | string;
  price_del: number | string;
  month: string;
  title: string;
  yulduz: string;
  rating: string;
  comment: string;
}

export type ICartProduct = IProduct & {
  amount: number;
};

export interface IRecipes {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  tag: string;
  rating: string;
  mealType: string;
}

export interface IResponse {
  recipes: IRecipes[];
  limit: number;
  total: number;
  skip: number;
}

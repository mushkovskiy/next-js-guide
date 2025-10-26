export type TRacket = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: {
    id: number;
    name: string;
  };
  userData?: {
    isFavorite?: boolean;
    productId: number;
  }[] | {
    isFavorite?: boolean;
    productId: number;
  };

};

export type Product = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  imageUrl: string;
  description?: string;
  price_id: string;
};

export type CartItem = {
  name: string;
  price: number;
  description: string | undefined;
  currency: string;
  imageUrl: string;
  price_id: string;
};

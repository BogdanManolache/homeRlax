export type Product = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  imageUrl: string;
  description?: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  description: string | undefined;
  currency: string;
  imageUrl: string;
};

export type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

export type Results = {
  totalPrice: number;
  data: Product[];
};

export type ProductFormatted = Product & {
  priceFormatted: string;
};

export type SearchResultsProps = {
  totalPrice: number;
  results: ProductFormatted[];
  onAddToWishlist: (id: number) => void;
};

export type ProductItemProps = {
  product: Product;
  onAddToWishlist: (id: number) => void;
};

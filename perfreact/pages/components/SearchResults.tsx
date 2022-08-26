import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
};

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, { price }) => (total += price), 0),
    [results]
  );

  return (
    <div>
      {results.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}

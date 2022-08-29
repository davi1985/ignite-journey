import { useMemo } from "react";
import { SearchResultsProps } from "../../@types";
import { ProductItem } from "./ProductItem";

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
      <h2>{totalPrice}</h2>

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

import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, { price }) => (total += price), 0),
    [results]
  );

  return (
    <div>
      {results.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}

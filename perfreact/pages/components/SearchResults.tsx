import { useMemo } from "react";
import { SearchResultsProps } from "../../@types";
import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, { price }) => (total += price), 0),
    [results]
  );

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem
        key={key}
        product={results[index]}
        onAddToWishlist={onAddToWishlist}
      />
    </div>
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

import { memo, useState } from "react";
import { ProductItemProps } from "../../@types";
import dynamic from "next/dynamic";
import { AddingProductToWishlistProps } from "./AddingProductToWishlist";

const AddingProductToWishlist = dynamic<AddingProductToWishlistProps>(
  () =>
    import("./AddingProductToWishlist").then(
      (mod) => mod.AddingProductToWishlist
    ),
  {
    loading: () => <span>Carregando</span>,
  }
);

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState<boolean>(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Add</button>
      {isAddingToWishlist && (
        <AddingProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

import { memo } from "react";

type ProductItemProps = {
  product: { id: number; price: number; title: string };
  onAddToWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <br />
      <button onClick={() => onAddToWishlist(product.id)}>Add</button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
